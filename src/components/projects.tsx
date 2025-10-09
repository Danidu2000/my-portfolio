"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Code2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Hardware POS System",
    description:
      "Collaborated with the development team to build a hardware-integrated Point of Sale system using modern web technologies. Represented the front-end team and contributed to interface development using a component-based architecture.",
    tech: ["Vue.js", "Laravel"],
    type: "Team Project",
    company: "RedCode Solutions",
  },
  {
    title: "Clothing POS System",
    description:
      "Developed a hardware-integrated POS system tailored for clothing retail environment. Contributed as part of the front-end team, focusing on user interface development with seamless integration between software and physical POS devices.",
    tech: ["Vue.js", "Laravel"],
    type: "Team Project",
    company: "RedCode Solutions",
  },
  {
    title: "Rent A Car System",
    description:
      "Built a web-based Rent A Car management system, streamlining vehicle reservations, availability tracking, and customer interactions. Contributed to both front-end and back-end development.",
    tech: ["Laravel Blade", "Laravel"],
    type: "Team Project",
    company: "RedCode Solutions",
  },
  {
    title: "MEDIPLUS - Dental Clinic Management",
    description:
      "Developed a comprehensive dental clinic management system aimed at streamlining patient records, appointment scheduling, and treatment tracking. Built secure, scalable, and user-friendly system tailored to dental clinic workflows.",
    tech: ["Laravel Blade", "Laravel"],
    type: "Team Project",
    company: "RedCode Solutions",
  },
  {
    title: "DevDrops Nature Villa Website",
    description:
      "Developed a responsive and visually appealing website showcasing the villa's features and services. Customized themes and plugins to create an engaging user experience with easy navigation and booking inquiries.",
    tech: ["WordPress"],
    type: "Individual Project",
    company: "RedCode Solutions",
    link: "https://dewdropsvilla.com/",
  },
  {
    title: "WeCare - Hospital Management System",
    description:
      "Contributed to the development of a hospital management system aimed at improving patient care, appointment scheduling, and medical record management. Built a scalable and maintainable system.",
    tech: ["Angular", "Spring Boot"],
    type: "Team Project",
    company: "ICET",
  },
  {
    title: "Yala Avocet Safari Website",
    description:
      "Designed and developed a responsive website highlighting safari tours, wildlife, and booking options. Created engaging sections including safari packages, wildlife highlights, customer testimonials, and FAQs.",
    tech: ["WordPress", "Elementor"],
    type: "Individual Project",
    company: "RedCode Solutions",
    link: "https://yalaavocetsafari.com/",
  },
  {
    title: "Betel Lanka Tours Website",
    description:
      "Designed and developed a responsive website to showcase tour packages, itineraries, and services for local and international travellers. Optimized for SEO, performance, and mobile responsiveness.",
    tech: ["WordPress", "Elementor"],
    type: "Individual Project",
    company: "RedCode Solutions",
    link: "https://betellankatours.com/",
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-balance">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.type} • {project.company}
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
