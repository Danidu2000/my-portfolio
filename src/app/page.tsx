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
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation />
      
      {/* Fixed Hero Section */}
      <Hero />
      
      {/* Scrollable Content that overlaps Hero */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
