import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const StaggeredMenu = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Restore page state on component mount
  useEffect(() => {
    const savedState = sessionStorage.getItem('menuPageState')
    if (savedState) {
      try {
        const state = JSON.parse(savedState)
        // Only restore if the state is recent (within 5 minutes)
        if (Date.now() - state.timestamp < 300000) {
          // Use multiple attempts to restore scroll position
          const restoreScroll = () => {
            window.scrollTo(state.scrollX || 0, state.scrollY || 0)
          }
          
          // Try immediate restoration
          restoreScroll()
          
          // Try again after a short delay to ensure it sticks
          setTimeout(restoreScroll, 100)
          
          // Try again after DOM is fully ready
          setTimeout(restoreScroll, 500)
        }
        // Clean up old state
        sessionStorage.removeItem('menuPageState')
      } catch (error) {
        console.warn('Failed to restore page state:', error)
        sessionStorage.removeItem('menuPageState')
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])




  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ]


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-2xl border-b border-white/20' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-white/10'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: 0.1
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            <Link to="/" className="flex items-center group touch-target mr-4">
              <div className="relative">
                <img
                  src="/logowt.png"
                  alt="BROCODEDEVS Logo"
                  className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
                <motion.div
                  className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Spacer to push buttons to the right */}
          <div className="flex-1 min-w-8"></div>

          {/* Desktop Navigation and CTA Button Container */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {/* Desktop Navigation */}
            <motion.div
              className="flex items-center space-x-4"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                      scale: 0.8,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`relative text-sm font-medium transition-colors duration-300 touch-target ${
                      location.pathname === item.path
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <motion.span
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {item.name}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                    delay: 0.8
                  }
                }
              }}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="btn-primary text-xs px-3 py-1.5 min-h-0"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </motion.nav>
  )
}

export default StaggeredMenu
