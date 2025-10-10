"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-32 bg-muted/30 relative overflow-hidden">
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-balance text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                Get In Touch
              </span>
            </motion.h2>

            {/* Contact Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] animate-float-card">
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "danidupramuditha@gmail.com",
                        href: "mailto:danidupramuditha@gmail.com",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "0761068613",
                        href: "tel:0761068613",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Minuwangoda, Sri Lanka",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        value: "Connect with me",
                        href: "https://www.linkedin.com/in/danidu-kumarasinghe-b42273338/",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      >
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group/item"
                          >
                            <motion.div
                              className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary/20 transition-colors duration-300 animate-float-icon"
                              whileHover={{ scale: 1.05 }}
                            >
                              <contact.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                              <p className="font-medium text-foreground group-hover:item:text-primary transition-colors">
                                {contact.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 p-4 rounded-lg">
                            <motion.div
                              className="p-3 bg-primary/10 rounded-lg animate-float-icon"
                              whileHover={{ scale: 1.05 }}
                            >
                              <contact.icon className="h-6 w-6 text-primary" />
                            </motion.div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                              <p className="font-medium">{contact.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <motion.div
                    className="mt-8 pt-8 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-6">
                      <motion.a
                        href="https://github.com/Danidu2000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-6 w-6" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/danidu-kumarasinghe-b42273338/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-6 w-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* References */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Danidu Pramuditha. All rights reserved.
          </p>
        </div>
      </footer>

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
