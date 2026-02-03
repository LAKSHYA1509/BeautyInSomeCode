"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Cursor from "@/components/ui/Cursor" 
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { CareerJourney } from "@/components/career-journey"
import { ProcurementCompetencies } from "@/components/procurement-competencies"
import { KeyAchievements } from "@/components/key-achievements"
import { Certifications } from "@/components/certifications"
import { IndustryRecognition } from "@/components/industry-recognition"
import TestimonialsSection from "@/components/TestimonialsSection"
import PhilosophySection from "@/components/PhilosophySection"
import { ProfessionalGallery } from "@/components/professional-gallery"
import { InsightsBlog } from "@/components/insights-blog"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
    <Cursor/>
    <SmoothScroll>
      <>
        <AnimatePresence>
          {isLoaded && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50"
            >
              <Navigation />
            </motion.div>
          )}
        </AnimatePresence>

        <Hero onComplete={() => setIsLoaded(true)} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {isLoaded && (
            <>
              <CareerJourney />
              <AboutSection />
              <ProcurementCompetencies />
              <KeyAchievements />
              <Certifications />
              <TestimonialsSection />
              <IndustryRecognition />
              <PhilosophySection />
              <ProfessionalGallery />
              <InsightsBlog />
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
