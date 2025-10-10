"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Users } from "lucide-react"

const skillCategories = [
	{
		title: "Programming Languages",
		icon: Code2,
		skills: [
			{ name: "Java", proficiency: 85 },
			{ name: "PHP", proficiency: 90 },
			{ name: "JavaScript", proficiency: 88 },
			{ name: "TypeScript", proficiency: 82 },
			{ name: "HTML/CSS", proficiency: 92 },
		],
		color: "bg-muted",
	},
	{
		title: "Frameworks & Libraries",
		icon: Database,
		skills: [
			{ name: "React.js", proficiency: 85 },
			{ name: "React Native", proficiency: 78 },
			{ name: "Vue.js", proficiency: 88 },
			{ name: "Angular", proficiency: 80 },
			{ name: "Laravel", proficiency: 90 },
			{ name: "Spring Boot", proficiency: 82 },
		],
		color: "bg-muted",
	},
	{
		title: "Soft Skills",
		icon: Users,
		skills: [
			{ name: "Project Management", proficiency: 85 },
			{ name: "Teamwork", proficiency: 95 },
			{ name: "Time Management", proficiency: 88 },
			{ name: "Leadership", proficiency: 82 },
			{ name: "Effective Communication", proficiency: 90 },
			{ name: "Critical Thinking", proficiency: 87 },
			{ name: "Public Relations", proficiency: 80 },
		],
		color: "bg-border",
	},
]

export default function Skills() {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			id="skills"
			ref={sectionRef}
			className="py-20 relative overflow-hidden"
		>
			{/* Animated Background Particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particles"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 20}s`,
							animationDuration: `${Math.random() * 25 + 20}s`,
							boxShadow: "0 0 6px #3b82f6",
						}}
					/>
				))}
			</div>

			{/* Gradient Shimmer Background */}
			<div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent blur-3xl animate-pulse"></div>

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
						{/* Animated Title with Light Sweep */}
						<motion.h2
							className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-balance text-center"
							initial={{ opacity: 0, y: 30 }}
							animate={isVisible ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
								Skills & Expertise
							</span>
						</motion.h2>

						{/* Skills Grid */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{skillCategories.map((category, categoryIndex) => {
								const IconComponent = category.icon
								return (
									<motion.div
										key={categoryIndex}
										className="relative group"
										initial={{ opacity: 0, y: 50 }}
										animate={isVisible ? { opacity: 1, y: 0 } : {}}
										transition={{
											delay: 0.4 + categoryIndex * 0.2,
											duration: 0.8,
										}}
									>
										{/* Glassmorphism Card */}
										<div className="relative p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-float-card h-full">
											{/* Gradient Background Effect */}
											<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

											{/* Neon Glow Border */}
											<div
												className="absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
											></div>

											{/* Corner Accents */}
											<div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
											<div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

											{/* Content */}
											<div className="relative z-10">
												{/* Header */}
												<div className="flex items-center gap-4 mb-6">
													<motion.div
														className={`p-3 rounded-xl ${category.color} animate-float-icon group-hover:scale-110 transition-transform duration-300`}
														whileHover={{ rotate: 360 }}
														transition={{ duration: 0.5 }}
													>
														<IconComponent className="h-6 w-6 text-foreground" />
													</motion.div>
													<h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
														{category.title}
													</h3>
												</div>

												{/* Skills with Proficiency */}
												<div className="space-y-4">
													{category.skills.map((skill, skillIndex) => (
														<motion.div
															key={skillIndex}
															className="flex items-center justify-between"
															initial={{ opacity: 0, x: -20 }}
															animate={isVisible ? { opacity: 1, x: 0 } : {}}
															transition={{
																delay:
																	0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
																duration: 0.5,
															}}
														>
															<div className="flex items-center gap-3 flex-1">
																{/* Skill Badge */}
																<Badge
																	variant="secondary"
																	className={`${category.color} text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 text-sm px-3 py-1`}
																>
																	{skill.name}
																</Badge>

																{/* Proficiency Ring */}
																<div className="relative w-8 h-8">
																	<svg
																		className="w-8 h-8 transform -rotate-90"
																		viewBox="0 0 36 36"
																	>
																		{/* Background circle */}
																		<path
																			d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																			fill="none"
																			stroke="currentColor"
																			strokeWidth="2"
																			className="text-muted/20"
																		/>
																		{/* Progress circle */}
																		<motion.path
																			d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
																			fill="none"
																			stroke="url(#gradient)"
																			strokeWidth="2"
																			strokeDasharray={`${skill.proficiency}, 100`}
																			className="drop-shadow-sm"
																			initial={{ strokeDasharray: "0, 100" }}
																			animate={
																				isVisible
																					? { strokeDasharray: `${skill.proficiency}, 100` }
																					: {}
																			}
																			transition={{
																				delay:
																					1 + categoryIndex * 0.2 + skillIndex * 0.1,
																				duration: 1.5,
																			}}
																		/>
																		<defs>
																			<linearGradient
																				id="gradient"
																				x1="0%"
																				y1="0%"
																				x2="100%"
																				y2="0%"
																			>
																				<stop offset="0%" stopColor="#3b82f6" />
																				<stop offset="100%" stopColor="#8b5cf6" />
																			</linearGradient>
																		</defs>
																	</svg>
																	{/* Percentage text */}
																	<div className="absolute inset-0 flex items-center justify-center">
																		<span className="text-xs font-bold text-primary">
																			{skill.proficiency}%
																		</span>
																	</div>
																</div>
															</div>
														</motion.div>
													))}
												</div>
											</div>
										</div>
									</motion.div>
								)
							})}
						</div>
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
						transform: translateY(0px) translateX(0px) rotate(0deg);
					}
					25% {
						transform: translateY(-20px) translateX(10px) rotate(90deg);
					}
					50% {
						transform: translateY(-10px) translateX(-8px) rotate(180deg);
					}
					75% {
						transform: translateY(-15px) translateX(5px) rotate(270deg);
					}
				}
				@keyframes float-card {
					0%,
					100% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-8px);
					}
				}
				@keyframes float-icon {
					0%,
					100% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-4px) rotate(5deg);
					}
				}
				.animate-shine {
					animation: shine 4s linear infinite;
				}
				.animate-float-particles {
					animation: float-particles linear infinite;
				}
				.animate-float-card {
					animation: float-card 8s ease-in-out infinite;
				}
				.animate-float-icon {
					animation: float-icon 6s ease-in-out infinite;
				}
				.bg-gradient-radial {
					background: radial-gradient(circle, var(--tw-gradient-stops));
				}
			`}</style>
		</section>
	)
}
