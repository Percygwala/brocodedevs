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
    let parallaxActive = true;
    
    // Ensure body has the correct background setup for JavaScript manipulation
    const body = document.body;
    
    // Add mobile parallax class for CSS control
    body.classList.add('mobile-parallax-active');
    
    // Force the background setup with multiple approaches
    body.style.setProperty('background-attachment', 'scroll', 'important');
    body.style.setProperty('background-repeat', 'repeat', 'important');
    body.style.setProperty('background-size', '20px 20px', 'important');
    
    function updateParallax() {
      if (!parallaxActive) return;
      
      const scrollY = window.scrollY;
      
      // Always update on mobile for more responsive effect
      if (Math.abs(scrollY - lastScrollY) > 0.1 || !isInitialized) {
        // Update background position to create parallax effect
        // The dots will move slower than the scroll, creating the parallax illusion
        const parallaxSpeed = 0.5; // Increased speed for more visible effect
        const yPos = -(scrollY * parallaxSpeed);
        
        // Apply the parallax effect with more precise positioning
        const newPosition = `0px ${yPos}px, 10px ${yPos + 10}px`;
        body.style.setProperty('background-position', newPosition, 'important');
        
        lastScrollY = scrollY;
        isInitialized = true;
        
        // Debug log every 50px of scroll for better visibility
        if (Math.floor(scrollY / 50) !== Math.floor((lastScrollY - 0.1) / 50)) {
          console.log('Parallax updated:', { 
            scrollY, 
            yPos, 
            parallaxSpeed,
            newPosition,
            currentPosition: body.style.backgroundPosition,
            bodyClasses: body.className
          });
        }
      }
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking && parallaxActive) {
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
    console.log('Body background styles:', {
      backgroundAttachment: body.style.backgroundAttachment,
      backgroundRepeat: body.style.backgroundRepeat,
      backgroundSize: body.style.backgroundSize,
      backgroundPosition: body.style.backgroundPosition
    });
    
    // Also try to initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
      updateParallax();
      console.log('Mobile parallax effect re-initialized after delay');
    }, 100);
    
    // Try again after a longer delay to ensure everything is loaded
    setTimeout(() => {
      updateParallax();
      console.log('Mobile parallax effect final initialization');
    }, 1000);
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