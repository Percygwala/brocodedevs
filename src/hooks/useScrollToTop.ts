import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top on route change with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [pathname])

  // Additional effect to handle beforeunload and page load
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    const handlePageLoad = () => {
      window.scrollTo(0, 0)
    }

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('load', handlePageLoad)

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])
} 