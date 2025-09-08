import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ScrollStackItem {
  title: string
  description: string
  price: string
  icon: React.ComponentType<{ className?: string }>
  link: string
}

interface ScrollStackProps {
  items: ScrollStackItem[]
  title: string
  subtitle: string
}

const ScrollStack = ({ items, title, subtitle }: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-custom">
        <motion.div
          style={{ opacity }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Stack Container */}
          <div className="relative max-w-4xl mx-auto">
            {items.map((item, index) => {
              const isEven = index % 2 === 0
              const stackY = useTransform(scrollYProgress, [0, 1], [index * 20, (index * 20) - 100])
              const stackOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
              const stackScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])
              const stackRotate = useTransform(scrollYProgress, [0, 1], [isEven ? -2 : 2, isEven ? 2 : -2])

              return (
                <motion.div
                  key={item.title}
                  style={{
                    y: stackY,
                    opacity: stackOpacity,
                    scale: stackScale,
                    rotate: stackRotate,
                    zIndex: items.length - index,
                  }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                      index === 0 ? 'cursor-pointer' : 'pointer-events-none'
                    }`}
                    whileHover={index === 0 ? { scale: 1.02 } : {}}
                  >
                    {/* Card Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <div className="text-lg font-bold text-black">
                              {item.price}
                            </div>
                          </div>
                        </div>
                        
                        {index === 0 && (
                          <motion.div
                            className="text-gray-400 text-sm font-medium"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Click to explore
                          </motion.div>
                        )}
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {index === 0 && (
                        <Link
                          to={item.link}
                          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      )}
                    </div>

                    {/* Stack Indicator */}
                    {index > 0 && (
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-500">
                          {index + 1}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for stacked cards */}
                    {index > 0 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl" />
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{ y }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-1 h-20 bg-gray-200 rounded-full overflow-hidden">
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
          style={{ opacity }}
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
