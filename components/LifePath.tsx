"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface Moment {
    title: string
    image: string
    position: { x: string; y: string } // Position along the path
    fadeRange: [number, number] // When to fade in (scroll progress)
}

const moments: Moment[] = [
    {
        title: "First Code",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
        position: { x: "55%", y: "15%" },
        fadeRange: [0.1, 0.2]
    },
    {
        title: "Cricket Love",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80",
        position: { x: "20%", y: "30%" },
        fadeRange: [0.25, 0.35]
    },
    {
        title: "First Book",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
        position: { x: "65%", y: "45%" },
        fadeRange: [0.4, 0.5]
    },
    {
        title: "Music & Code",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
        position: { x: "25%", y: "60%" },
        fadeRange: [0.55, 0.65]
    },
    {
        title: "Building Dreams",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
        position: { x: "60%", y: "75%" },
        fadeRange: [0.7, 0.8]
    },
    {
        title: "Making Impact",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
        position: { x: "50%", y: "90%" },
        fadeRange: [0.85, 0.95]
    }
]

export function LifePath() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Smooth spring animation for the path drawing
    const pathProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section
            ref={containerRef}
            className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black"
            style={{ minHeight: "400vh" }}
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Title */}
                <motion.div
                    className="absolute top-10 md:top-20 left-0 right-0 z-20 text-center px-4"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.5, 0])
                    }}
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
                        My Life Path
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/60 italic">
                        Check out how a path will start to draw as you{" "}
                        <span className="text-[#C9A962] font-semibold not-italic">start scrolling</span>
                    </p>
                </motion.div>

                {/* SVG Canvas with Drawing Path */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 800 1200"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        {/* Gold Gradient */}
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F5D78E" />
                            <stop offset="50%" stopColor="#C9A962" />
                            <stop offset="100%" stopColor="#8B7355" />
                        </linearGradient>

                        {/* Glow Filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Background ghost path (faint) */}
                    <path
                        d="M 400 50 
               C 400 150, 600 250, 550 400
               S 200 550, 250 700
               C 300 850, 600 800, 580 950
               S 400 1100, 400 1150"
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="40"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Animated drawing path */}
                    <motion.path
                        d="M 400 50 
               C 400 150, 600 250, 550 400
               S 200 550, 250 700
               C 300 850, 600 800, 580 950
               S 400 1100, 400 1150"
                        stroke="url(#pathGradient)"
                        strokeWidth="35"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                        style={{
                            pathLength: pathProgress
                        }}
                    />
                </svg>

                {/* Life Moments */}
                <div className="absolute inset-0 pointer-events-none">
                    {moments.map((moment, index) => (
                        <MomentCard
                            key={index}
                            moment={moment}
                            scrollProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function MomentCard({
    moment,
    scrollProgress
}: {
    moment: Moment
    scrollProgress: any
}) {
    const opacity = useTransform(
        scrollProgress,
        moment.fadeRange,
        [0, 1]
    )

    const scale = useTransform(
        scrollProgress,
        moment.fadeRange,
        [0.5, 1]
    )

    return (
        <motion.div
            style={{
                opacity,
                scale,
                left: moment.position.x,
                top: moment.position.y,
                x: "-50%",
                y: "-50%"
            }}
            className="absolute z-30"
        >
            <div className="relative group">
                {/* Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border-3 border-[#C9A962]/50 shadow-2xl shadow-[#C9A962]/20 bg-black">
                    <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C9A962]/30">
                        <div className="w-2 h-2 rounded-full bg-[#C9A962] animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
                            {moment.title}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}