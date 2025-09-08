import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY
        
        setMousePosition({ x: distanceX, y: distanceY })
        mouseX.set(distanceX)
        mouseY.set(distanceY)
      }
    }

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered, mouseX, mouseY])

  const letters = text.split('')

  return (
    <div
      ref={textRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      {letters.map((letter, index) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x, 2) + Math.pow(mousePosition.y, 2)
        )
        const maxDistance = 150
        const pressure = Math.max(0, 1 - distance / maxDistance)
        
        const letterX = useTransform(x, [-200, 200], [-5 * pressure, 5 * pressure])
        const letterY = useTransform(y, [-200, 200], [-5 * pressure, 5 * pressure])
        const letterScale = useTransform(x, [-200, 200], [1 - 0.05 * pressure, 1 + 0.05 * pressure])
        const letterRotate = useTransform(x, [-200, 200], [-1 * pressure, 1 * pressure])

        return (
          <motion.span
            key={index}
            className="inline-block origin-center"
            initial={{ 
              opacity: 0, 
              y: 20,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.4,
              delay: delay + index * 0.02,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            style={{
              x: isHovered ? letterX : 0,
              y: isHovered ? letterY : 0,
              scale: isHovered ? letterScale : 1,
              rotate: isHovered ? letterRotate : 0,
              fontWeight: isHovered ? 900 : 300,
              transition: 'font-weight 0.3s ease'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )
      })}
    </div>
  )
}

export default TextPressure