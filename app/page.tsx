"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import { LoadingScreen } from "@/components/loading-screen"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about"
import { ProjectsSection } from "@/components/projects"
import { AchievementsSection } from "@/components/achievements"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AppleStory } from "@/components/apple-story"

const HeroSection = dynamic(
  () => import("@/components/hero").then(m => m.HeroSection),
  { ssr: false }
)

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  return (
    <SmoothScroll>

      {loading && (
        <LoadingScreen onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <ThemeToggle />
          <Navigation />

          <main>
            <HeroSection />
            <AppleStory />
            <AboutSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}

    </SmoothScroll>
  )
}
