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
  
  // Check if background-attachment: fixed is supported
  const supportsFixedAttachment = window.CSS && window.CSS.supports && 
    window.CSS.supports('background-attachment', 'fixed');
  
  // Force JavaScript parallax on mobile devices regardless of fixed attachment support
  if (isMobile || !supportsFixedAttachment) {
    let ticking = false;
    let lastScrollY = 0;
    
    // Ensure body has the correct background setup for JavaScript manipulation
    const body = document.body;
    body.style.backgroundAttachment = 'scroll';
    body.style.backgroundRepeat = 'repeat';
    
    function updateParallax() {
      const scrollY = window.scrollY;
      
      // Only update if scroll position actually changed
      if (Math.abs(scrollY - lastScrollY) > 0.5) {
        // Update background position to create parallax effect
        // The dots will move slower than the scroll, creating the parallax illusion
        const parallaxSpeed = 0.3; // Reduced speed for smoother effect
        const yPos = -(scrollY * parallaxSpeed);
        
        // Apply the parallax effect with more precise positioning
        body.style.backgroundPosition = `0px ${yPos}px, 10px ${yPos + 10}px`;
        
        lastScrollY = scrollY;
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
    if (isMobile) {
      console.log('Mobile parallax effect initialized for device:', navigator.userAgent);
    }
  }
}

// Initialize parallax when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallaxDots);
} else {
  initParallaxDots();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 