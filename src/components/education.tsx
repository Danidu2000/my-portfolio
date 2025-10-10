"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

const education = [
	{
		id: 1,
		degree: "ICET Certified Developer (ICD) Program",
		institution: "Institute Of Computer Engineering Technology - ICET",
		year: "Recent",
		location: "Panadura",
		description: "Comprehensive software development program covering modern technologies and industry best practices.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		id: 2,
		degree: "Bachelor of Ayurvedic Medicine & Surgery (UG)",
		institution: "Gampaha Wickramarachchi University of Indigenous Medicine",
		year: "In Progress",
		location: "Yakkala",
		description: "Pursuing undergraduate degree in traditional Ayurvedic medicine and modern medical practices.",
		color: "from-purple-500 to-pink-500",
	},
	{
		id: 3,
		degree: "G.C.E. Advance Level",
		institution: "President's College - Minuwangoda",
		year: "2019",
		location: "Minuwangoda",
		description: "Completed Advanced Level examination with focus on Science stream.",
		color: "from-green-500 to-emerald-500",
	},
	{
		id: 4,
		degree: "G.C.E. Ordinary Level",
		institution: "President's College - Minuwangoda",
		year: "2016",
		location: "Minuwangoda",
		description: "Completed Ordinary Level examination with excellent results.",
		color: "from-orange-500 to-red-500",
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
		<section
			id="education"
			ref={sectionRef}
			className="py-20 bg-black/40 backdrop-blur-lg border-t border-border/50 shadow-2xl relative overflow-hidden"
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

			<div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isVisible ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Animated Title */}
					<motion.h2 
						className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-balance text-center"
						initial={{ opacity: 0, y: 30 }}
						animate={isVisible ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2, duration: 0.8 }}
					>
						<span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
							Education Journey
						</span>
					</motion.h2>

					{/* Education Cards Row */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
						{education.map((item, index) => (
							<motion.div
								key={item.id}
								className="relative group cursor-pointer"
								initial={{ opacity: 0, y: 50 }}
								animate={isVisible ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
								data-magnetic
							>
								{/* Expandable Card */}
								<div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-500 ease-out animate-float-card h-80 lg:h-96 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
									{/* Gradient Background Effect */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									
									{/* Corner Accents - Fixed visibility */}
									<div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-100 transition-opacity duration-300"></div>
									<div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-100 transition-opacity duration-300"></div>
									<div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-100 transition-opacity duration-300"></div>
									<div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-100 transition-opacity duration-300"></div>

									{/* Card Content */}
									<div className="relative z-10 p-4 sm:p-6 lg:p-6 h-full flex flex-col">
										{/* Header Section */}
										<div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-4 sm:mb-6">
											<motion.div 
												className={`p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color} animate-float-icon group-hover:scale-110 transition-transform duration-300`}
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.5 }}
											>
												<GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
											</motion.div>
											
											<div className="w-full">
												<h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
													{item.degree}
												</h3>
												<p className="text-xs sm:text-sm text-muted-foreground font-medium">
													{item.year}
												</p>
											</div>
										</div>

										{/* Always Visible Details */}
										<div className="flex-1 overflow-hidden space-y-3 sm:space-y-4">
											{/* Institution */}
											<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
												{item.institution}
											</p>
											
											{/* Year and Location */}
											<div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-muted-foreground">
												<div className="flex items-center gap-1">
													<Calendar className="h-3 w-3" />
													<span>{item.year}</span>
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="h-3 w-3" />
													<span>{item.location}</span>
												</div>
											</div>
											
											{/* Description */}
											<p className="text-xs text-muted-foreground leading-relaxed text-center">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
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
