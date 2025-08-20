import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const { pathname } = useLocation()
  const visitedPages = useRef<Set<string>>(new Set())
  const isFirstVisit = useRef<boolean>(true)

  useEffect(() => {
    // Check if this is a new page we haven't visited before
    const isNewPage = !visitedPages.current.has(pathname)
    
    if (isNewPage) {
      // For new pages, scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      
      // Mark this page as visited
      visitedPages.current.add(pathname)
    } else {
      // For previously visited pages, let the browser handle scroll restoration
      // This preserves the user's scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
    
    // Reset scroll restoration to manual after a brief delay
    // This ensures the browser doesn't interfere with our logic
    const timer = setTimeout(() => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  // Handle initial page load
  useEffect(() => {
    if (isFirstVisit.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
      isFirstVisit.current = false
    }
  }, [])
} 