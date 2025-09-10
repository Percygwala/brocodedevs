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
  // Check if we should use JavaScript parallax (mobile or devices that don't support fixed attachment well)
  const isMobile = window.innerWidth < 768;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  
  // Only use JavaScript parallax on mobile or devices without hover capability
  if (isMobile || !hasHover) {
    let ticking = false;
    
    function updateParallax() {
      const scrollY = window.scrollY;
      const body = document.body;
      
      // Update background position to create parallax effect
      // The dots will move slower than the scroll, creating the parallax illusion
      const parallaxSpeed = 0.5; // Adjust this value to control parallax intensity
      const yPos = -(scrollY * parallaxSpeed);
      
      body.style.backgroundPosition = `0 ${yPos}px, 10px ${yPos + 10}px`;
      
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
    
    // Also handle resize events to ensure proper positioning
    window.addEventListener('resize', requestTick, { passive: true });
    
    // Initial call to set correct position
    updateParallax();
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