"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react"
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
			"Built a comprehensive web-based Rent A Car management system, streamlining vehicle reservations, tracking availability, and enhancing customer interactions. Contributed extensively to both front-end and back-end development for seamless operation.",
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
	const [currentRotation, setCurrentRotation] = useState(0)
	const [activeIndex, setActiveIndex] = useState(0)
	const sectionRef = useRef<HTMLElement>(null)

	const totalProjects = projects.length
	const anglePerCard = 360 / totalProjects

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

	const rotateCarousel = (direction: "next" | "prev") => {
		if (direction === "next") {
			setCurrentRotation((prev) => prev - anglePerCard)
			setActiveIndex((prev) => (prev + 1) % totalProjects)
		} else {
			setCurrentRotation((prev) => prev + anglePerCard)
			setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects)
		}
	}

	const goToProject = (index: number) => {
		const targetRotation = -index * anglePerCard
		setCurrentRotation(targetRotation)
		setActiveIndex(index)
	}

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="py-12 sm:py-16 lg:py-32 bg-black/40 backdrop-blur-lg border-t border-border/50 shadow-2xl min-h-screen relative overflow-hidden"
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

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-6xl mx-auto">
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
								Projects
							</span>
						</motion.h2>

						{/* Cylindrical Carousel Container - Fixed transitions */}
						<div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000 mb-16 sm:mb-24">
							{/* Carousel Cylinder - Improved transitions */}
							<div
								className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 preserve-3d"
								style={{
									transformStyle: "preserve-3d",
									transform: `rotateY(${currentRotation}deg)`,
									transformOrigin: "center center",
									transition: "transform 1200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
								}}
							>
								{projects.map((project, index) => {
									const rotateY = index * anglePerCard
									const translateZ = 350

									return (
										<motion.div
											key={index}
											className="absolute w-56 h-72 transform-gpu"
											style={{
												transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
												transformStyle: "preserve-3d",
												transformOrigin: "center center",
												left: "50%",
												top: "50%",
												marginLeft: "-112px",
												marginTop: "-144px",
											}}
											initial={{ opacity: 0 }}
											animate={isVisible ? { opacity: 1 } : {}}
											transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
										>
											<div
												className={`relative p-4 rounded-lg bg-background border border-border/50 hover:border-primary/50 h-full group ${
													index === activeIndex
														? "shadow-[0_0_40px_rgba(59,130,246,0.3)] scale-105"
														: "shadow-[0_0_20px_rgba(59,130,246,0.1)]"
												} animate-float-card`}
												style={{
													transition: "all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)",
												}}
											>
												{/* Gradient Background Effect */}
												<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

												{/* Corner Accents */}
												<div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
												<div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
												<div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
												<div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

												{/* Content */}
												<div className="relative z-10 h-full flex flex-col">
													<div className="flex items-start justify-between mb-4">
														<motion.div
															className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 animate-float-icon"
															whileHover={{ scale: 1.05 }}
														>
															<Code2 className="h-5 w-5 text-primary" />
														</motion.div>
														{project.link && (
															<motion.a
																href={project.link}
																target="_blank"
																rel="noopener noreferrer"
																className="text-muted-foreground hover:text-primary transition-colors duration-300"
																data-magnetic
																whileHover={{ scale: 1.1 }}
																whileTap={{ scale: 0.95 }}
															>
																<ExternalLink className="h-5 w-5" />
															</motion.a>
														)}
													</div>

													<h3 className="text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
														{project.title}
													</h3>
													<p className="text-xs text-muted-foreground mb-2">
														{project.type} • {project.company}
													</p>
													<p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3 flex-1">
														{project.description}
													</p>

													<div className="flex flex-wrap gap-1">
														{project.tech.map((tech) => (
															<Badge
																key={tech}
																variant="secondary"
																className="bg-muted/50 hover:bg-primary/20 transition-colors text-xs"
															>
																{tech}
															</Badge>
														))}
													</div>
												</div>
											</div>
										</motion.div>
									)
								})}
							</div>

							{/* Navigation Controls */}
							<button
								onClick={() => rotateCarousel("prev")}
								className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-full text-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] z-20"
								data-magnetic
							>
								<ChevronLeft className="h-6 w-6" />
							</button>

							<button
								onClick={() => rotateCarousel("next")}
								className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-full text-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] z-20"
								data-magnetic
							>
								<ChevronRight className="h-6 w-6" />
							</button>
						</div>

						{/* Project Indicators */}
						<div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
							{projects.map((_, index) => (
								<button
									key={index}
									onClick={() => goToProject(index)}
									className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
										activeIndex === index
											? "bg-primary scale-125"
											: "bg-muted-foreground/30 hover:bg-primary/50"
									}`}
									data-magnetic
								/>
							))}
						</div>

						{/* Active Project Info */}
						<motion.div
							className="mt-6 sm:mt-8 text-center px-4"
							key={activeIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
								{projects[activeIndex].title}
							</h3>
							<p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
								{projects[activeIndex].description}
							</p>
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
				.perspective-1000 {
					perspective: 1000px;
				}
				.preserve-3d {
					transform-style: preserve-3d;
				}
				.line-clamp-3 {
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				.line-clamp-4 {
					display: -webkit-box;
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			`}</style>
		</section>
	)
}
