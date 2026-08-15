"use client"

import { useState } from "react"
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
import { GitHubStats } from "@/components/GithubStats"
import { ScrollProgress } from "@/components/scroll-progress"
// import { ThemeToggle } from "@/components/theme-toggle"
import AwardsSection from "@/components/AwardsSection"
import LifePhotosMarquee from "@/components/LifePhotosMarquee"
import TechStackMarquee from "@/components/TechStackMarquee"
import PhilosophySection from "@/components/PhilosophySection"
// import { LifePath } from "@/components/LifePath"

export default function HomePage() {
  // Master state to control visibility of Nav/Scroll
  const [isLoaded, setIsLoaded] = useState(false)

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

  {/* Main Content fades in AFTER loading */}
        <motion.main
        initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          >
          {isLoaded && (
            <>
              <ScrollProgress />
              <AppleStory />
              <AboutSection />
              <TechStackMarquee />
              <WorkSection />
              <ProjectsSection />
              <GitHubStats />
              <AchievementsSection />
              {/* Testimonials pulled until real, attributable quotes exist.
                  The previous three were unattributed placeholder text. */}
              <AwardsSection />
              <PhilosophySection />
              <LifePhotosMarquee />
              <BlogSection />
              {/* <LifePath /> */}
              <ContactSection />
              <Footer />
            </>
          )}
        </motion.main>
      </>
    </SmoothScroll>
    </>
  )
}