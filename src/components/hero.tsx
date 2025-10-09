"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown } from "lucide-react"
import CodeSVG from "@/components/svg/code-svg"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroProps {
  magnetic?: boolean
}

export default function Hero({ magnetic = false }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const fullText = "Associate Software Engineer"

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Mouse movement for parallax effect only
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (event.clientX - centerX) * 0.01
        const deltaY = (event.clientY - centerY) * 0.01
        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Scroll progress for hiding content
  const { scrollYProgress } = useScroll()
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  return (
    <>
      <section ref={heroRef} className="fixed inset-0 flex items-center justify-center overflow-hidden z-10">
        {/* CSS-based Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                boxShadow: "0 0 6px #60a5fa",
              }}
            />
          ))}
        </div>

        {/* Background Image with CSS Parallax */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` 
          }}
        >
          <Image
            src="/background.png"
            alt="Tech background"
            fill
            className="object-cover"
            priority
          />
          {/* Theme-aware overlay */}
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/80'}`}></div>
        </div>

        {/* CSS-based Lens Flare Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl animate-lens-flare" />
        </div>

        {/* Animated Background SVG */}
        <div className="absolute inset-0 opacity-5">
          <CodeSVG />
        </div>

        {/* Hero Content - Fades out on scroll */}
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ 
            opacity: contentOpacity,
            y: contentY
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* CSS-based Floating Avatar */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 animate-float-avatar">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-20"></div>
                  <Image
                    src="/Danidu.png"
                    alt="Danidu Pramuditha"
                    width={200}
                    height={200}
                    className="relative rounded-full border-4 border-primary shadow-2xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>

              {/* Animated Name with Shine Effect */}
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                  Danidu Pramuditha
                </span>
              </motion.h1>

              {/* Typing Animation */}
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance min-h-[2.5rem] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <span>{currentText}</span>
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </motion.div>

              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Passionate about full-stack development with expertise in React, Vue, Angular, Laravel, and Spring Boot.
                Building modern web and mobile applications that make a difference.
              </motion.p>

              {/* Animated Buttons */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  data-magnetic
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  data-magnetic
                  className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* CSS-based Scroll Indicator - Also fades out */}
        <motion.a 
          href="#about" 
          data-magnetic
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ opacity: contentOpacity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.a>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(5px); }
          }
          @keyframes float-avatar {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes lens-flare {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(150%); }
          }
          .animate-shine {
            animation: shine 3s linear infinite;
          }
          .animate-float {
            animation: float linear infinite;
          }
          .animate-float-avatar {
            animation: float-avatar 4s ease-in-out infinite;
          }
          .animate-lens-flare {
            animation: lens-flare 15s linear infinite;
          }
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}</style>
      </section>
    </>
  )
}
