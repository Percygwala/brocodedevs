import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Service interface - Update this when adding new services
interface ScrollStackItem {
  title: string
  description: string
  price: string
  icon: React.ElementType
  link: string
}

interface ScrollStackProps {
  items: ScrollStackItem[]
  title: string
  subtitle: string
}

const ScrollStack = ({ items, title, subtitle }: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  
  // Scroll progress tracking for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"]
  })

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Scroll Stack Container */}
        <div className="relative min-h-[800px] sm:min-h-[1000px]">
          <div className="relative max-w-4xl mx-auto">
            {items.map((item, index) => {
              // Calculate scroll progress for each individual card
              const cardStart = index / items.length
              const cardEnd = (index + 1) / items.length
              
              // Card visibility and animation based on scroll progress
              const cardProgress = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [0, 1]
              )
              
              // Card positioning - starts below and moves up
              const cardY = useTransform(cardProgress, [0, 1], [200, 0])
              
              // Card opacity - fades in as it appears
              const cardOpacity = useTransform(cardProgress, [0, 0.1, 0.3, 1], [0, 0.3, 0.8, 1])
              
              // Card scale - grows as it appears
              const cardScale = useTransform(cardProgress, [0, 0.1, 0.3, 1], [0.8, 0.9, 0.95, 1])
              
              // Card rotation - slight rotation for visual interest
              const cardRotate = useTransform(cardProgress, [0, 1], [index % 2 === 0 ? -2 : 2, 0])
              
              // Determine if this card is currently active (top of stack)
              const isActive = useTransform(
                scrollYProgress,
                [cardStart, cardEnd],
                [0, 1]
              )

              return (
                <motion.div
                  key={item.title}
                  style={{
                    y: cardY,
                    opacity: cardOpacity,
                    scale: cardScale,
                    rotate: cardRotate,
                    zIndex: items.length - index, // Higher index = higher z-index
                  }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
                      isActive.get() > 0.5 ? 'cursor-pointer hover:shadow-2xl' : 'pointer-events-none'
                    }`}
                    whileHover={isActive.get() > 0.5 ? { 
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    } : {}}
                  >
                    {/* Card Content */}
                    <div className="p-6 sm:p-8">
                      {/* Header with Icon and Price */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <div className="text-lg sm:text-xl font-bold text-black">
                              {item.price}
                            </div>
                          </div>
                        </div>

                        {/* Stack Indicator */}
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-xs font-bold text-gray-500">
                              {index + 1}
                            </span>
                          </div>
                          <motion.div
                            className="text-xs text-gray-400 font-medium"
                            animate={isActive.get() > 0.5 ? { 
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.05, 1]
                            } : { opacity: 0.3 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {isActive.get() > 0.5 ? "Active" : "Scroll"}
                          </motion.div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>

                      {/* CTA Button - Only visible when card is active */}
                      <motion.div
                        animate={isActive.get() > 0.5 ? { 
                          opacity: 1, 
                          y: 0,
                          scale: 1
                        } : { 
                          opacity: 0, 
                          y: 10,
                          scale: 0.95
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isActive.get() > 0.5 && (
                          <Link
                            to={item.link}
                            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base"
                          >
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}
                      </motion.div>
                    </div>

                    {/* Gradient Overlay for non-active cards */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl pointer-events-none"
                      animate={isActive.get() > 0.5 ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-1 h-24 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-black rounded-full"
                  style={{
                    scaleY: scrollYProgress,
                    transformOrigin: "top"
                  }}
                />
              </div>
              <span className="text-xs text-gray-500 font-medium writing-mode-vertical">
                Scroll
              </span>
            </div>
          </motion.div>
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="btn-secondary btn-large"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrollStack
