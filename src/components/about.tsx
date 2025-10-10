"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)
  
  // Scroll progress for the entire page
  const { scrollYProgress } = useScroll()
  
  // Transform the About section to slide up over Hero
  const y = useTransform(scrollYProgress, [0, 0.3], ["100vh", "0vh"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], [40, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: "💻",
      title: "Full-Stack Engineer",
      description: "Experienced in building end-to-end solutions with modern technologies. Proficient in backend development with",
      highlights: ["Laravel", "Spring Boot"],
      description2: "and frontend frameworks including",
      highlights2: ["React.js", "Vue.js", "Angular"],
      description3: "delivering robust, scalable applications."
    },
    {
      icon: "🚀",
      title: "Innovator / Problem Solver",
      description: "Passionate about tackling complex challenges through creative thinking and collaborative teamwork. Experienced in agile environments at",
      highlights: ["RedCode Solution (PVT) Ltd"],
      description2: "contributing to multiple successful projects from concept to deployment."
    },
    {
      icon: "🎨",
      title: "Creative Technologist",
      description: "Dedicated to crafting elegant, user-friendly interfaces that combine beautiful design with seamless functionality. Focus on creating",
      highlights: ["responsive", "intuitive"],
      description2: "digital experiences that make a real impact."
    }
  ]

  return (
    <motion.section 
      id="about" 
      ref={sectionRef} 
      className="relative py-20 lg:py-32 overflow-hidden bg-black/40 backdrop-blur-lg border-t border-border/50 shadow-2xl min-h-screen"
      style={{ 
        y,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        zIndex: 30
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              boxShadow: "0 0 4px #60a5fa",
            }}
          />
        ))}
      </div>

      {/* Connecting Nodes Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <circle
                cx={`${(i + 1) * 12.5}%`}
                cy={`${Math.sin(i) * 20 + 50}%`}
                r="2"
                fill="currentColor"
                className="text-primary animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              {i < 7 && (
                <line
                  x1={`${(i + 1) * 12.5}%`}
                  y1={`${Math.sin(i) * 20 + 50}%`}
                  x2={`${(i + 2) * 12.5}%`}
                  y2={`${Math.sin(i + 1) * 20 + 50}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Dark overlay for theme consistency */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/30'}`}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated Title with Shine Effect */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-balance text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                About Me
              </span>
            </motion.h2>

            {/* Main Content Grid - Image Left, Cards Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Image */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative group">
                  {/* Image Container with Effects */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-1 animate-float-card">
                    <div className="relative overflow-hidden rounded-xl bg-background">
                      <Image
                        src="/aboutme.png"
                        alt="About Me - Professional Photo"
                        width={600}
                        height={700}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Floating Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60"></div>
                </div>
              </motion.div>

              {/* Right Side - Cards */}
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="space-y-6">
                  {cards.map((card, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                    >
                      {/* Card Container */}
                      <div className="relative p-6 rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-float-card">
                        {/* Gradient Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-start space-x-4">
                          {/* Icon */}
                          <div className="text-3xl animate-float-icon flex-shrink-0">{card.icon}</div>
                          
                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                              {card.title}
                            </h3>
                            
                            {/* Description */}
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              <p>
                                {card.description}{" "}
                                {card.highlights.map((highlight, i) => (
                                  <span key={i} className="relative inline-block">
                                    <span className="text-foreground font-semibold">
                                      {highlight}
                                    </span>
                                    {i < card.highlights.length - 1 && <span className="text-muted-foreground"> and </span>}
                                  </span>
                                ))}
                                {card.description2 && (
                                  <>
                                    {" "}{card.description2}{" "}
                                    {card.highlights2?.map((highlight, i) => (
                                      <span key={i} className="relative inline-block">
                                        <span className="text-foreground font-semibold">
                                          {highlight}
                                        </span>
                                        {i < card.highlights2!.length - 1 && <span className="text-muted-foreground">, </span>}
                                      </span>
                                    ))}
                                  </>
                                )}
                                {card.description3 && <> {card.description3}</>}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-5px); }
          75% { transform: translateY(-12px) translateX(3px); }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-shine {
          animation: shine 3s linear infinite;
        }
        .animate-float-particles {
          animation: float-particles linear infinite;
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        .animate-float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  )
}