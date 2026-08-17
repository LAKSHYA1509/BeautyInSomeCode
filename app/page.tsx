"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Cursor from "@/components/ui/Cursor" 
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { AchievementsSection } from "@/components/achievements"
import { AppleStory } from "@/components/apple-story"
import { BlogSection } from "@/components/blog"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { WorkSection } from "@/components/work"
import { ScrollProgress } from "@/components/scroll-progress"
import { CreedSection } from "@/components/creed"
import { BookSection } from "@/components/book"
import { EducationSection } from "@/components/education"
import { SectionReveal } from "@/components/section-reveal"
import { QuietHoursSection } from "@/components/quiet-hours"
// import { ThemeToggle } from "@/components/theme-toggle"
import AwardsSection from "@/components/AwardsSection"
import LifePhotosMarquee from "@/components/LifePhotosMarquee"
import TechStackMarquee from "@/components/TechStackMarquee"
import PhilosophySection from "@/components/PhilosophySection"
// import { LifePath } from "@/components/LifePath"

export default function HomePage() {
  // Master state to control visibility of Nav/Scroll
  const [isLoaded, setIsLoaded] = useState(false)

  // The content below is now always mounted so the server sends real HTML —
  // it's just transparent and inert until the hero finishes. Lock scrolling
  // for that window so nobody can wander into the invisible page.
  useEffect(() => {
    if (isLoaded) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [isLoaded])

  return (
    <>
    <Cursor/>
    <SmoothScroll>
      <>
        {/* Only show Navigation & Toggle when loading is complete */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50"
            >
              <Navigation />
              <div className="absolute top-4 right-4 md:right-8 z-50">
                 {/* <ThemeToggle /> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

{/* Hero handles the Loading Animation internally */}
{/* It calls setIsLoaded(true) when the "Expansion" is finished */}
<Hero onComplete={() => setIsLoaded(true)} />

        {/*
          Main content fades in after the hero, but is ALWAYS rendered.

          This used to be wrapped in a second `{isLoaded && ...}` guard, which
          meant the server sent a page containing nothing but "Open LAK SHYA" —
          no headings, no projects, nothing for a crawler to read. The opacity
          animation alone gives the same visual result while keeping the real
          HTML in the response.
        */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          aria-hidden={!isLoaded}
          className={isLoaded ? undefined : "pointer-events-none"}
        >
          <ScrollProgress />

          {/* AppleStory runs its own sticky scroll choreography — leave it alone.
              TechStackMarquee is a thin divider strip, not a section. */}
          <AppleStory />

          <SectionReveal><AboutSection /></SectionReveal>
          <TechStackMarquee />
          <SectionReveal><WorkSection /></SectionReveal>
          <SectionReveal><ProjectsSection /></SectionReveal>

          {/* Straight after Projects, while someone is still in the mood to
              click something. Buried near the footer it would never get opened. */}
          <SectionReveal><QuietHoursSection /></SectionReveal>

          {/* The 3D contribution graph already renders inside <AppleStory />
              as Contribution_Architecture.sys — don't add a second one. */}
          <SectionReveal><AchievementsSection /></SectionReveal>

          {/* Testimonials pulled until real, attributable quotes exist.
              The previous three were unattributed placeholder text. */}
          <SectionReveal variant="fade"><AwardsSection /></SectionReveal>
          <SectionReveal><EducationSection /></SectionReveal>
          <SectionReveal variant="fade"><PhilosophySection /></SectionReveal>
          <SectionReveal variant="fade"><CreedSection /></SectionReveal>
          <SectionReveal variant="fade"><LifePhotosMarquee /></SectionReveal>
          <SectionReveal variant="fade"><BookSection /></SectionReveal>
          <SectionReveal variant="fade"><BlogSection /></SectionReveal>
          {/* <LifePath /> */}
          <SectionReveal><ContactSection /></SectionReveal>
          <Footer />
        </motion.main>
      </>
    </SmoothScroll>
    </>
  )
}