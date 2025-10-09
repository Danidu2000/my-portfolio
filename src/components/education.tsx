"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

const education = [
  {
    degree: "ICET Certified Developer (ICD) Program",
    institution: "Institute Of Computer Engineering Technology - ICET",
    year: "Recent",
  },
  {
    degree: "Bachelor of Ayurvedic Medicine & Surgery (UG)",
    institution: "Gampaha Wickramarachchi University of Indigenous Medicine",
    year: "In Progress",
  },
  {
    degree: "G.C.E. Advance Level",
    institution: "President's College - Minuwangoda",
    year: "2019",
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "President's College - Minuwangoda",
    year: "2016",
  },
]

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-balance">Education</h2>

            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground mb-1">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
