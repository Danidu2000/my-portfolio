"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface CustomCursorProps {
  className?: string
}

export default function CustomCursor({ className = "" }: CustomCursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [rotation, setRotation] = useState(0)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Ultra smooth spring animations for cursor position
  const springX = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.5 })
  const springY = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.5 })
  
  const rotationRef = useRef(0)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Calculate smooth rotation based on mouse movement
      const deltaX = clientX - lastMousePos.current.x
      const deltaY = clientY - lastMousePos.current.y
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      
      // Continuous smooth rotation
      rotationRef.current += velocity * 0.3
      
      lastMousePos.current = { x: clientX, y: clientY }
      
      // Update cursor position with ultra smooth interpolation
      cursorX.set(clientX)
      cursorY.set(clientY)
      
      setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = target.matches('button, a, [data-magnetic], input, textarea, select') ||
                          target.closest('button, a, [data-magnetic], input, textarea, select')
      
      if (isClickable) {
        setIsHovering(true)
        
        // Add magnetic attraction to the element
        const element = target.closest('button, a, [data-magnetic], input, textarea, select') as HTMLElement
        if (element) {
          element.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
          
          const rect = element.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          
          const deltaX = (e.clientX - centerX) * 0.08
          const deltaY = (e.clientY - centerY) * 0.08
          
          element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`
        }
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = target.matches('button, a, [data-magnetic], input, textarea, select') ||
                          target.closest('button, a, [data-magnetic], input, textarea, select')
      
      if (isClickable) {
        setIsHovering(false)
        
        // Reset magnetic attraction
        const element = target.closest('button, a, [data-magnetic], input, textarea, select') as HTMLElement
        if (element) {
          element.style.transform = 'translate(0px, 0px) scale(1)'
        }
      }
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    // Smooth rotation animation loop
    const animateRotation = () => {
      setRotation(rotationRef.current)
      animationRef.current = requestAnimationFrame(animateRotation)
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)
    document.addEventListener('mouseleave', handleMouseOut)
    
    animateRotation()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.removeEventListener('mouseleave', handleMouseOut)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Main crosshair cursor - bigger size */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[10000] ${className}`}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: rotation,
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{
          rotate: { type: "tween", duration: 0.1 },
          scale: { type: "spring", damping: 25, stiffness: 400 }
        }}
      >
        {/* Container for positioning - bigger dimensions */}
        <div className="relative w-16 h-16">
          
          {/* Corner brackets - top-left */}
          <div className="absolute top-0 left-0">
            <div className={`
              absolute w-4 h-0.5 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
            <div className={`
              absolute w-0.5 h-4 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
          </div>

          {/* Corner brackets - top-right */}
          <div className="absolute top-0 right-0">
            <div className={`
              absolute -right-0 w-4 h-0.5 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
            <div className={`
              absolute -right-0 w-0.5 h-4 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
          </div>

          {/* Corner brackets - bottom-left */}
          <div className="absolute bottom-0 left-0">
            <div className={`
              absolute -bottom-0 w-4 h-0.5 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
            <div className={`
              absolute -bottom-0 w-0.5 h-4 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
          </div>

          {/* Corner brackets - bottom-right */}
          <div className="absolute bottom-0 right-0">
            <div className={`
              absolute -bottom-0 -right-0 w-4 h-0.5 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
            <div className={`
              absolute -bottom-0 -right-0 w-0.5 h-4 bg-white rounded-full
              ${isHovering ? 'shadow-[0_0_10px_#3b82f6,0_0_20px_#8b5cf6]' : 'shadow-[0_0_6px_#3b82f6]'}
              transition-all duration-300
            `} />
          </div>

          {/* Center dot - perfectly centered at cursor point */}
          <div className={`
            absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2
            bg-white rounded-full
            ${isHovering ? 'shadow-[0_0_8px_#8b5cf6,0_0_16px_#ec4899]' : 'shadow-[0_0_4px_#3b82f6]'}
            transition-all duration-300
          `} />
        </div>
      </motion.div>

      {/* Animated glow effect for hover - bigger glow */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-24 h-24">
            {/* Outer pulsing glow */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/15 to-transparent rounded-full blur-xl animate-pulse" />
            {/* Inner rotating glow */}
            <motion.div 
              className="absolute inset-4 bg-gradient-radial from-violet-400/30 via-pink-400/20 to-transparent rounded-full blur-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Center intense glow */}
            <div className="absolute inset-8 bg-gradient-radial from-cyan-400/40 via-blue-400/25 to-transparent rounded-full blur-md" />
          </div>
        </motion.div>
      )}
    </>
  )
}
