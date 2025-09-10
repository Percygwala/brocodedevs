import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enable browser's automatic scroll restoration for normal behavior
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto'
}

// Mobile-compatible parallax effect for dotted background
function initParallaxDots() {
  // More robust mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                   window.innerWidth < 768 || 
                   'ontouchstart' in window;
  
  console.log('Device detection:', {
    isMobile,
    userAgent: navigator.userAgent,
    screenWidth: window.innerWidth,
    hasTouch: 'ontouchstart' in window
  });
  
  // Always use JavaScript parallax on mobile devices for better control
  if (isMobile) {
    let ticking = false;
    let lastScrollY = 0;
    let isInitialized = false;
    
    // Ensure body has the correct background setup for JavaScript manipulation
    const body = document.body;
    body.style.backgroundAttachment = 'scroll';
    body.style.backgroundRepeat = 'repeat';
    body.style.backgroundSize = '20px 20px';
    
    function updateParallax() {
      const scrollY = window.scrollY;
      
      // Always update on mobile for more responsive effect
      if (Math.abs(scrollY - lastScrollY) > 0.1 || !isInitialized) {
        // Update background position to create parallax effect
        // The dots will move slower than the scroll, creating the parallax illusion
        const parallaxSpeed = 0.5; // Increased speed for more visible effect
        const yPos = -(scrollY * parallaxSpeed);
        
        // Apply the parallax effect with more precise positioning
        body.style.backgroundPosition = `0px ${yPos}px, 10px ${yPos + 10}px`;
        
        lastScrollY = scrollY;
        isInitialized = true;
      }
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    // Use passive event listener for better performance
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Handle resize events to ensure proper positioning
    window.addEventListener('resize', () => {
      lastScrollY = window.scrollY;
      updateParallax();
    }, { passive: true });
    
    // Initial call to set correct position
    updateParallax();
    
    // Debug log for mobile devices
    console.log('Mobile parallax effect initialized for device:', navigator.userAgent);
    
    // Also try to initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
      updateParallax();
      console.log('Mobile parallax effect re-initialized after delay');
    }, 100);
  }
}

// Initialize parallax multiple times to ensure it works on mobile
function initParallaxWithRetry() {
  initParallaxDots();
  
  // Try again after DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallaxDots);
  }
  
  // Try again after window load
  window.addEventListener('load', initParallaxDots);
  
  // Try again after a short delay for React hydration
  setTimeout(initParallaxDots, 500);
}

// Start initialization immediately
initParallaxWithRetry();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 