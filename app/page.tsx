"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import { AboutSection } from "@/components/about"
import { AchievementsSection } from "@/components/achievements"
import { AppleStory } from "@/components/apple-story"
import { BlogSection } from "@/components/blog"
import { ContactSection } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeToggle } from "@/components/theme-toggle"

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
            <BlogSection />
          </main>

          <Footer />
        </>
      )}

    </SmoothScroll>
  )
}
