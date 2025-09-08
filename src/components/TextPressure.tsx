import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface TextPressureProps {
  text: string
  className?: string
  delay?: number
}

const TextPressure = ({ text, className = '', delay = 0 }: TextPressureProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setMousePosition({ x, y })
      }
    }

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  const letters = text.split('')

  return (
    <div
      ref={textRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
    >
      {letters.map((letter, index) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x, 2) + Math.pow(mousePosition.y, 2)
        )
        const maxDistance = 200
        const pressure = Math.max(0, 1 - distance / maxDistance)
        
        const letterX = (mousePosition.x / maxDistance) * 20 * pressure
        const letterY = (mousePosition.y / maxDistance) * 20 * pressure
        const letterScale = 1 + pressure * 0.3
        const letterRotate = (mousePosition.x / maxDistance) * 5 * pressure

        return (
          <motion.span
            key={index}
            className="inline-block origin-center"
            initial={{ 
              opacity: 0, 
              y: 50,
              scale: 0.8,
              rotateX: -90
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              rotateX: 0,
              x: isHovered ? letterX : 0,
              y: isHovered ? letterY : 0,
              scale: isHovered ? letterScale : 1,
              rotate: isHovered ? letterRotate : 0
            }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            style={{
              transformStyle: 'preserve-3d',
              textShadow: isHovered 
                ? `0 0 ${20 * pressure}px rgba(0, 0, 0, ${0.3 * pressure})`
                : 'none'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )
      })}
      
      {/* Pressure Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 100}px ${mousePosition.y + 100}px, rgba(0, 0, 0, 0.1) 0%, transparent 50%)`,
          filter: 'blur(20px)'
        }}
      />
    </div>
  )
}

export default TextPressure
