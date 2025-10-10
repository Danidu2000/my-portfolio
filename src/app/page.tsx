"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation />
      
      {/* Fixed Hero Section */}
      <Hero />
      
      {/* Scrollable Content that overlaps Hero */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        {mounted ? (
          <>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </>
        ) : (
          // Server-side fallback without particles
          <div className="min-h-screen">
            <div className="h-screen" /> {/* About placeholder */}
            <div className="h-screen" /> {/* Experience placeholder */}
            <div className="h-screen" /> {/* Projects placeholder */}
            <div className="h-screen" /> {/* Skills placeholder */}
            <div className="h-screen" /> {/* Education placeholder */}
            <div className="h-screen" /> {/* Contact placeholder */}
          </div>
        )}
      </div>
    </main>
  )
}
