import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const StaggeredMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scrolling
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ]

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
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
            <Link to="/" className="flex items-center group touch-target">
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

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
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
                  className={`relative font-medium transition-colors duration-300 touch-target ${
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
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: 0.8
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="btn-primary btn-small"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => toggleOpen()}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 touch-target relative z-50"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 top-16 bg-white/95 backdrop-blur-md md:hidden overflow-y-auto z-40"
            >
              <motion.div
                variants={sideVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="py-8 px-6 space-y-4"
              >
                {navItems.map((item) => (
                  <motion.div variants={itemVariants} key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => toggleOpen()}
                      className={`block py-3 px-4 text-2xl font-semibold transition-colors duration-300 rounded-lg touch-target relative ${
                        location.pathname === item.path
                          ? 'text-black bg-gray-50'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-8">
                  <Link
                    to="/contact"
                    onClick={() => toggleOpen()}
                    className="btn-primary btn-large btn-full-mobile text-center touch-target"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default StaggeredMenu
