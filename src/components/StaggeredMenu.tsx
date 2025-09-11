import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const StaggeredMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
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

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [location.pathname])


  // Prevent body scroll when mobile menu is open and preserve page state
  useEffect(() => {
    if (isOpen) {
      // Store comprehensive page state
      const pageState = {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
        bodyOverflow: document.body.style.overflow,
        bodyPosition: document.body.style.position,
        bodyTop: document.body.style.top,
        bodyWidth: document.body.style.width,
        // Store any form data that might be in progress
        formData: new Map()
      }
      
      // Store form data to preserve user input
      const forms = document.querySelectorAll('form')
      forms.forEach((form, index) => {
        const formData = new FormData(form)
        const formObject = {}
        for (let [key, value] of formData.entries()) {
          formObject[key] = value
        }
        pageState.formData.set(index, formObject)
      })
      
      // Store the state in a way that persists
      sessionStorage.setItem('menuPageState', JSON.stringify({
        scrollY: pageState.scrollY,
        scrollX: pageState.scrollX,
        timestamp: Date.now()
      }))
      
      // Prevent scrolling and preserve visual state
      document.body.style.position = 'fixed'
      document.body.style.top = `-${pageState.scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      // Prevent any potential page refresh
      const preventRefresh = (e) => {
        e.preventDefault()
        e.returnValue = ''
      }
      window.addEventListener('beforeunload', preventRefresh)
      
      return () => {
        // Restore scrolling and page state
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        
        // Remove refresh prevention
        window.removeEventListener('beforeunload', preventRefresh)
        
        // Restore scroll position immediately and persistently
        const restoreScrollPosition = () => {
          const savedState = sessionStorage.getItem('menuPageState')
          if (savedState) {
            try {
              const state = JSON.parse(savedState)
              if (state.scrollY !== undefined) {
                window.scrollTo(state.scrollX || 0, state.scrollY)
              }
            } catch (error) {
              console.warn('Failed to restore scroll position:', error)
            }
          }
        }
        
        // Restore immediately
        restoreScrollPosition()
        
        // Restore again after a short delay to ensure it sticks
        setTimeout(restoreScrollPosition, 50)
        
        // Restore again after DOM updates
        requestAnimationFrame(() => {
          restoreScrollPosition()
        })
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

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => toggleOpen()}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 touch-target relative z-[70] bg-white/30 backdrop-blur-sm border border-gray-200"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu - Simple Implementation */}
        {isOpen && (
          <div className="fixed inset-0 top-20 bg-white md:hidden z-50 overflow-y-auto">
            <div className="p-6 space-y-4">
              <div className="text-center text-gray-500 text-sm mb-6">
                Navigation Menu
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => toggleOpen()}
                  className={`block py-4 px-4 text-xl font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'text-black bg-gray-100'
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => toggleOpen()}
                  className="block w-full py-4 px-4 text-center bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default StaggeredMenu
