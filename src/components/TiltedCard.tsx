import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface TiltedCardProps {
  title: string
  description: string
  price: string
  icon: React.ElementType
  link: string
  delay?: number
}

const TiltedCard = ({ title, description, price, icon: Icon, link, delay = 0 }: TiltedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30
  })
  
  // Scale effect on hover
  const scale = useSpring(1, {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = (event.clientX - centerX) / (rect.width / 2)
    const distanceY = (event.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(distanceX)
    mouseY.set(distanceY)
    scale.set(1.05)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer"
    >
      <Link to={link} className="block">
        <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Card Content */}
          <div className="p-6 sm:p-8">
            {/* Header with Icon and Price */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {title}
                  </h3>
                  <div className="text-lg sm:text-xl font-bold text-black">
                    {price}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              {description}
            </p>

            {/* CTA Button */}
            <div className="flex items-center text-black font-medium group-hover:text-gray-600 transition-colors duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          {/* Gradient Overlay for 3D Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-black/5 rounded-2xl pointer-events-none" />
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  )
}

export default TiltedCard
