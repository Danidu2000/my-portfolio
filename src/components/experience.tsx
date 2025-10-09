"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
          {[...Array(6)].map((_, i) => (
            <g key={i}>
              <circle
                cx={`${(i + 1) * 16.66}%`}
                cy={`${Math.sin(i) * 15 + 50}%`}
                r="2"
                fill="currentColor"
                className="text-primary animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
              {i < 5 && (
                <line
                  x1={`${(i + 1) * 16.66}%`}
                  y1={`${Math.sin(i) * 15 + 50}%`}
                  x2={`${(i + 2) * 16.66}%`}
                  y2={`${Math.sin(i + 1) * 15 + 50}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/30"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
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
                Experience
              </span>
            </motion.h2>

            {/* Experience Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-float-card">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className="p-4 bg-primary/10 rounded-xl animate-float-icon group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Briefcase className="h-8 w-8 text-primary" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl sm:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Software Engineer Intern
                      </motion.h3>

                      <motion.p
                        className="text-lg text-muted-foreground mb-3 font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        RedCode Solutions (PVT) Ltd
                      </motion.p>

                      <motion.div
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>January 2025 - Present</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <ul className="space-y-4 text-muted-foreground">
                      {[
                        "Responsible for developing and implementing software applications",
                        "Contributed to multiple client-facing web projects as part of a collaborative development team",
                        "Assisted in designing and enhancing user-friendly, responsive interfaces for real-world applications",
                        "Actively participated in the development of an ongoing mobile application, focusing on interface design and user experience",
                        "Gained hands-on experience in a real-world development environment, working closely with team members to meet project goals and deadlines",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                        >
                          <span className="text-primary mt-1.5 text-lg">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes float-particles {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(8px);
          }
          50% {
            transform: translateY(-8px) translateX(-5px);
          }
          75% {
            transform: translateY(-12px) translateX(3px);
          }
        }
        @keyframes float-card {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(2deg);
          }
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
    </section>
  )
}
