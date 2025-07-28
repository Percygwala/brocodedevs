// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Enhanced Navbar with auto-hide functionality
class NavbarController {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.scrollThreshold = 10; // Minimum scroll distance to trigger hide/show
        this.hideThreshold = 100; // Scroll distance before hiding
        this.isHidden = false;
        this.isScrolling = false;
        
        this.init();
    }
    
    init() {
        // Add transition for smooth hide/show
        this.navbar.style.transition = 'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease';
        
        // Throttled scroll event for better performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Show navbar when scrolling to top
        window.addEventListener('scroll', () => {
            if (window.scrollY < 50) {
                this.showNavbar();
            }
        });
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - this.lastScrollY;
        
        // Update background based on scroll position
        if (currentScrollY > this.hideThreshold) {
            this.navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 0, 0.15)';
        } else {
            this.navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 0, 0.05)';
        }
        
        // Auto-hide/show logic
        if (Math.abs(scrollDelta) > this.scrollThreshold) {
            if (scrollDelta > 0 && currentScrollY > this.hideThreshold) {
                // Scrolling down - hide navbar
                this.hideNavbar();
            } else if (scrollDelta < 0) {
                // Scrolling up - show navbar
                this.showNavbar();
            }
        }
        
        this.lastScrollY = currentScrollY;
    }
    
    hideNavbar() {
        if (!this.isHidden) {
            this.navbar.style.transform = 'translateY(-100%)';
            this.isHidden = true;
        }
    }
    
    showNavbar() {
        if (this.isHidden) {
            this.navbar.style.transform = 'translateY(0)';
            this.isHidden = false;
        }
    }
}

// Initialize navbar controller
document.addEventListener('DOMContentLoaded', () => {
    new NavbarController();
    
    // Initialize collapsible service cards
    initializeServiceCards();
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections and elements that should animate
    document.querySelectorAll('section, .service-item, .bundle-card, .process-step, .faq-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }
        
        // Update button text and disable it
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Let the form submit to FormSubmit.co
        // The form will redirect to thank-you.html after successful submission
    });
}

// Enhanced Scroll Animations with Intersection Observer
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.animationTypes = {
            'fade-up': {
                initial: { opacity: 0, transform: 'translateY(40px)' },
                final: { opacity: 1, transform: 'translateY(0)' }
            },
            'fade-left': {
                initial: { opacity: 0, transform: 'translateX(-40px)' },
                final: { opacity: 1, transform: 'translateX(0)' }
            },
            'fade-right': {
                initial: { opacity: 0, transform: 'translateX(40px)' },
                final: { opacity: 1, transform: 'translateX(0)' }
            },
            'scale-up': {
                initial: { opacity: 0, transform: 'scale(0.8)' },
                final: { opacity: 1, transform: 'scale(1)' }
            },
            'slide-up': {
                initial: { opacity: 0, transform: 'translateY(60px)' },
                final: { opacity: 1, transform: 'translateY(0)' }
            }
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);
        
        this.setupAnimations();
    }
    
    setupAnimations() {
        // Section headers
        document.querySelectorAll('.section-header').forEach(el => {
            this.addAnimation(el, 'fade-up', 0);
        });
        
        // Hero section elements
        document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-buttons, .hero-features, .hero-cards').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.2);
        });
        
        // Services accordion items
        document.querySelectorAll('.service-item').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.1);
        });
        
        // Bundle cards
        document.querySelectorAll('.bundle-card').forEach((el, index) => {
            this.addAnimation(el, 'scale-up', index * 0.2);
        });
        
        // Process steps
        document.querySelectorAll('.process-step').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.15);
        });
        
        // Team members
        document.querySelectorAll('.team-member').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.2);
        });
        
        // Portfolio cards
        document.querySelectorAll('.portfolio-card').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.2);
        });
        
        // FAQ items
        document.querySelectorAll('.faq-item').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.1);
        });
        
        // Contact form elements
        document.querySelectorAll('.contact-info, .contact-form').forEach((el, index) => {
            this.addAnimation(el, index === 0 ? 'fade-left' : 'fade-right', 0);
        });
        
        // Footer elements
        document.querySelectorAll('.footer-brand, .footer-links').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.1);
        });
        
        // About section
        document.querySelectorAll('.about-text, .about-stats, .about-placeholder').forEach((el, index) => {
            this.addAnimation(el, 'fade-up', index * 0.2);
        });
    }
    
    addAnimation(element, type, delay = 0) {
        const animation = this.animationTypes[type];
        if (!animation) return;
        
        // Set initial state
        Object.assign(element.style, {
            opacity: animation.initial.opacity,
            transform: animation.initial.transform,
            transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
        });
        
        // Add data attribute for tracking
        element.setAttribute('data-animation', type);
        element.setAttribute('data-animation-delay', delay);
        
        // Observe the element
        this.observer.observe(element);
    }
    
    animateElement(element) {
        const type = element.getAttribute('data-animation');
        const animation = this.animationTypes[type];
        
        if (animation) {
            Object.assign(element.style, {
                opacity: animation.final.opacity,
                transform: animation.final.transform
            });
            
            // Remove from observer after animation
            setTimeout(() => {
                this.observer.unobserve(element);
            }, 1000);
        }
    }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});

// Enhanced page loading with animation preparation
window.addEventListener('load', () => {
    // Add loading class to body
    document.body.classList.add('page-loaded');
    
    // Initialize animations after a short delay to ensure smooth transitions
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.visibility = 'visible';
    }, 50);
});

// Prevent flash of unstyled content
document.addEventListener('DOMContentLoaded', () => {
    // Hide body initially to prevent FOUC
    document.body.style.opacity = '0';
    document.body.style.visibility = 'hidden';
});

// Typing animation for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing animation
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00ff00, #00cc00);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// Bundle offers functionality - Now handled by direct links to form pages
// The bundle buttons are now <a> tags that link directly to the form pages
// No JavaScript needed for WhatsApp functionality

 



// Service data for modals
const serviceData = {
    'company-registration': {
        title: 'Company Registration',
        price: 'From R650',
        description: 'Register your business fast with CIPC — name, documents & ownership updates included.',
        features: [
            'Company name reservation',
            'CIPC company registration',
            'Memorandum of Incorporation (MOI)',
            'Beneficial Ownership (BO) update'
        ],
        formLink: 'company-registration-form.html'
    },
    'logo-design': {
        title: 'Logo Design',
        price: 'From R500',
        description: 'Stand out with a custom business logo designed in Adobe Illustrator & Photoshop.',
        features: [
            'Custom concept development',
            '2–3 initial design options',
            'Revisions until you\'re happy',
            'Final files in all formats'
        ],
        formLink: 'logo-design-form.html'
    },
    'trademark-service': {
        title: 'Trademark Registration',
        price: 'From R1,800',
        description: 'Protect your logo — we handle the full trademark registration process.',
        features: [
            'Logo file prep (if needed)',
            'Thorough trademark search',
            'Application submission to CIPC',
            'Ongoing updates until approval'
        ],
        formLink: 'trademark-form.html'
    },
    'small-apps': {
        title: 'Small Apps',
        price: 'From R3,500',
        description: 'We build sleek mobile & web apps — plus setup your Play Store & App Store.',
        features: [
            'App design & development',
            'Domain name and hosting setup',
            'Google Play Store & Apple App Store account creation',
            'App publishing with all necessary assets'
        ],
        formLink: 'app-development-form.html'
    },
    'landing-page-websites': {
        title: 'Landing Page Websites',
        price: 'From R2,500',
        description: 'Professional business websites — 1 to 3-page landing sites with domain setup.',
        features: [
            '1–3 page website (Home, About, Contact or Services)',
            'Custom domain registration (.co.za, .com, etc.)',
            'Hosting setup & launch',
            'Basic SEO (Google-friendly)'
        ],
        formLink: 'landing-page-form.html'
    },
    'shopify-stores': {
        title: 'Shopify Stores',
        price: 'From R4,500',
        description: 'Launch your online store with Shopify — payments & domain included.',
        features: [
            'Full store design & layout',
            'Product uploads with images and descriptions',
            'Payment method integration',
            'Custom domain registration'
        ],
        formLink: 'shopify-store-form.html'
    },
    'digital-ads': {
        title: 'Digital Advertising',
        price: 'From R1,200',
        description: 'We design & run ads on Facebook, TikTok, Instagram, and YouTube.',
        features: [
            'Custom ad graphics or videos',
            'Target audience research',
            'Campaign setup & optimization',
            'Performance tracking and reporting'
        ],
        formLink: 'digital-ads-form.html'
    },
    'business-email': {
        title: 'Business Email',
        price: 'From R300',
        description: 'Get a professional Gmail business email like you@yourcompany.co.za.',
        features: [
            'Gmail business email setup via Google Workspace',
            'Domain connection and verification',
            'Email account creation (1 or more addresses)',
            'Admin access and management support'
        ],
        formLink: 'business-email-form.html'
    },
    'domain-registration': {
        title: 'Domain Registration',
        price: 'From R200',
        description: 'We register your business domain using Google — fast & professional.',
        features: [
            'Domain name search & availability check',
            'Full domain registration',
            'DNS & email configuration (if needed)',
            'Ownership transfer to your business'
        ],
        formLink: 'domain-registration-form.html'
    },
    'payment-methods': {
        title: 'Payment Methods',
        price: 'From R800',
        description: 'We set up Payfast, PayPal & Yoco for your website, app, or Shopify store.',
        features: [
            'Payment gateway account setup',
            'Full integration into your platform',
            'Test payments to ensure everything works',
            'Secure and mobile-optimized configuration'
        ],
        formLink: 'payment-method-form.html'
    }
};

// Initialize service card modals
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const header = card.querySelector('.service-card-header');
        const serviceId = card.getAttribute('data-service-id');
        
        if (header && serviceId) {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openServiceModal(serviceId);
            });
        }
    });
}

// Open service modal
function openServiceModal(serviceId) {
    const service = serviceData[serviceId];
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Update modal content
    modal.querySelector('.modal-title').textContent = service.title;
    modal.querySelector('.modal-price').textContent = service.price;
    modal.querySelector('.modal-description').textContent = service.description;
    
    // Update features list
    const featuresList = modal.querySelector('.modal-features');
    featuresList.innerHTML = '';
    service.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = `• ${feature}`;
        featuresList.appendChild(li);
    });
    
    // Update form link
    const getStartedBtn = modal.querySelector('.modal-cta');
    getStartedBtn.href = service.formLink;
    
    // Add click event listener to Get Started button
    getStartedBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Get Started button clicked, navigating to:', service.formLink);
        window.location.href = service.formLink;
    };
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        modalContent.classList.add('modal-animate');
    }, 10);
}

// Close service modal
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Remove animation class
    modalContent.classList.remove('modal-animate');
    
    // Hide modal
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Initialize modal event listeners
function initializeModalEvents() {
    // Close button
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }
    
    // Close when clicking backdrop
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                closeServiceModal();
            }
        });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeServiceCards();
    initializeModalEvents();
});