"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const CLOUD = "https://res.cloudinary.com/dgmrrew73/video/upload"

// The raw uploads are 15-36 MB each and, critically, are NOT faststart —
// their `moov` atom sits at the END of the file, so a browser has to download
// the whole thing before it can decode frame one. Routing through a Cloudinary
// transform re-encodes with `moov` up front AND drops ~75% of the bytes, which
// is the difference between "plays instantly" and "never renders at all".
const clip = (id: string, w: number) => `${CLOUD}/f_auto,q_auto,w_${w}/${id}.mp4`
const poster = (id: string, w: number) => `${CLOUD}/so_0,f_auto,q_auto,w_${w}/${id}.jpg`

// De-duplicated: the desktop list previously repeated one clip three times and
// the mobile list repeated one twice, so most "rotations" changed nothing.
const DESKTOP_IDS = [
  "v1770221532/202602042113_wd9l4q",
  "v1770300463/202602051923_bcycpe",
]

const MOBILE_IDS = [
  "v1770300609/202602051923_1_tberz8",
  "v1770223413/202602042113_1_tllnkt",
  "v1770302363/202602051923_2_hxg9av",
]

const desktop = DESKTOP_IDS.map((id) => ({ src: clip(id, 1280), poster: poster(id, 1280) }))
const mobile = MOBILE_IDS.map((id) => ({ src: clip(id, 720), poster: poster(id, 720) }))

const words = ["DEV", "WRITER", "READER", "SPEAKER", "LAKSHYA"]

interface HeroProps {
  onComplete?: () => void
}

export function Hero({ onComplete }: HeroProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"initial" | "split" | "expanded">("initial")
  
  // ✅ 1. NEW STATE: Holds the active array (defaults to desktop to avoid hydration mismatch)
  const [videos, setVideos] = useState(desktop)

  const [wordIndex, setWordIndex] = useState(0)

  // The desktop and mobile lists are different lengths, so a resize mid-rotation
  // can leave `index` pointing past the end of the new array. Wrap rather than
  // hand `undefined` to the <video>.
  const active = videos[index % videos.length]

  // ✅ 2. NEW LOGIC: Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideos(mobile)
      } else {
        setVideos(desktop)
      }
    }

    handleResize() // Run on initial load
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Keep the latest callback reachable without making it an effect dependency.
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  useEffect(() => {
    const splitTimer = setTimeout(() => setPhase("split"), 1200)

    const expandTimer = setTimeout(() => {
      setPhase("expanded")
      setTimeout(() => onCompleteRef.current?.(), 1800)
    }, 4400)

    return () => {
      clearTimeout(splitTimer)
      clearTimeout(expandTimer)
    }
    // Intentionally mount-once: the caller passes an inline arrow, so depending on
    // `onComplete` directly would reset the phase timers on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Rotate in BOTH phases. Previously this was gated on `split`, so the moment
  // the hero expanded the index froze and the main page showed one static clip
  // forever. Cadence differs: brisk while the box is small, ambient once full-screen.
  useEffect(() => {
    if (phase === "initial") return
    if (videos.length < 2) return

    const everyMs = phase === "split" ? 900 : 7000

    const interval = setInterval(() => {
      setIndex((prev) => {
        // Shuffle-style pick so it feels random without ever repeating a frame back-to-back.
        const next = Math.floor(Math.random() * (videos.length - 1))
        return next >= prev ? next + 1 : next
      })
    }, everyMs)

    return () => clearInterval(interval)
  }, [phase, videos])

  useEffect(() => {
    if (phase !== "expanded") return

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [phase])

  return (
    <section className="relative h-screen w-full bg-[#0D0D0D] overflow-hidden text-[#Eaeaea]">

      {/* LAYER 1: IMAGE BOX */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          layout
          initial={{ width: 0, height: 0, borderRadius: "20px" }}
          animate={
            phase === "initial" ? { width: 0, height: 0 } :
            phase === "split" ? { width: "200px", height: "120px", borderRadius: "12px", x: -30 } :
            { width: "100%", height: "100%", borderRadius: "0px" }
          }
          transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          className="relative overflow-hidden"
        >
          <AnimatePresence mode="sync">
            <motion.video
              // Keyed on the clip itself so the expanded phase crossfades too.
              // It used to be pinned to the literal string "final", which meant
              // React reused one element and the src never actually swapped.
              key={active.src}
              src={active.src}
              poster={active.poster}
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: phase === "expanded" ? 1.2 : 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: phase === "expanded" ? "brightness(0.5)" : "brightness(1)" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LAYER 2: TEXT */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          layout
          className={`flex w-full h-full transition-all duration-1000 ${
            phase === "expanded"
              ? "items-end justify-start p-6 md:p-12"
              : "items-center justify-center"
          }`}
        >
          <motion.div layout className="flex items-center">

            {phase === "expanded" ? (
              <AnimatePresence mode="wait">
                <motion.h1
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="font-bold leading-none tracking-tighter mix-blend-difference text-[18vw] sm:text-[16vw] md:text-[14vw]"
                >
                  {words[wordIndex]}
                </motion.h1>
              </AnimatePresence>
            ) : (
              <>
                <motion.h1
                  layout
                  className="font-bold mix-blend-difference text-6xl md:text-8xl"
                >
                  LAK
                </motion.h1>

                <motion.div
                  layout
                  animate={{ width: phase === "split" ? 180 : 0 }}
                  transition={{ duration: 1 }}
                />

                <motion.h1
                  layout
                  className="font-bold mix-blend-difference text-6xl md:text-8xl"
                >
                  SHYA
                </motion.h1>
              </>
            )}

          </motion.div>
        </motion.div>
      </div>

      {/* LAYER 3: DETAILS */}
      <AnimatePresence>
        {phase === "expanded" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 z-30 pointer-events-none flex justify-between p-6 md:p-12"
          >
            <div className="ml-auto text-right text-xs font-mono uppercase text-white/80">
              <p>Backend &amp; Platform Engineer</p>
              <p className="text-white/50">Systems · Pipelines · AI</p>
              <p>Based in India</p>
              <p className="text-green-400 mt-2">● Available</p>
            </div>

            <div className="absolute bottom-10 right-10">
              <div className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-bounce">
                <ArrowDownRight className="text-white w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}