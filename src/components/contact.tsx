"use client"

import { useEffect, useRef, useState } from "react"
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
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-balance text-center">Get In Touch</h2>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="mailto:danidupramuditha@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">danidupramuditha@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:0761068613"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium">0761068613</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">Minuwangoda, Sri Lanka</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/danidu-kumarasinghe-b42273338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-medium">Connect with me</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://github.com/Danidu2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/danidu-kumarasinghe-b42273338/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>References:</strong>
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Ishan Kariyawasam</strong> - Founder of RedCode Solutions (PVT) Ltd.
                  <br />
                  <a href="mailto:sameeraishan11@gmail.com" className="text-primary hover:underline">
                    sameeraishan11@gmail.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Ravindu Samarawickrama</strong> - Managing Director of ICET
                  <br />
                  <a href="mailto:thilakshanaravindu@gmail.com" className="text-primary hover:underline">
                    thilakshanaravindu@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Danidu Pramuditha. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}
