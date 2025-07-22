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
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 0, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            this.navbar.style.boxShadow = 'none';
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

 

// Service data object
const serviceData = {
    'company-registration': {
        icon: '🏢',
        title: 'Company Registrations',
        description: 'Start your business the right way with BROCODEDEVS\' Company Registration service.<br><br>We handle the full process through CIPC, so you can focus on your vision — not the paperwork. Our service includes:<br>• Company name reservation<br>• CIPC company registration<br>• Memorandum of Incorporation (MOI)<br>• Beneficial Ownership (BO) update<br><br>Whether you\'re a solo founder or a growing team, we ensure your business is fully compliant, registered fast, and ready to operate in South Africa.<br><br>📌 Need a domain or email setup too? We can handle that — just ask.<br><br>Get started today and become a registered business in no time.'
    },
    'logo-design': {
        icon: '🎨',
        title: 'Logo Design',
        description: 'Your logo is the face of your brand — make it unforgettable.<br><br>At BROCODEDEVS, we design bold, clean, and professional logos tailored to your business identity. Using industry-standard tools like Adobe Illustrator and Photoshop, we craft original logos that work across all platforms — websites, packaging, social media, and more.<br><br>✔️ Custom concept development<br>✔️ 2–3 initial design options<br>✔️ Revisions until you\'re happy<br>✔️ Final files in all formats (PNG, SVG, PDF, etc.)<br><br>Whether you\'re starting from scratch or refreshing your current look, we\'ll help you bring your brand to life with visuals that speak.<br><br>🧠 Need business cards or social media kits too? Let\'s bundle it up.<br><br>Book your logo design today — and show the world who you are.'
    },
    'trademark-service': {
        icon: '®️',
        title: 'Trademarks',
        description: 'Own your brand. Protect your logo.<br><br>At BROCODEDEVS, we help you legally protect your brand by registering your trademark in South Africa. Whether we designed your logo or you already have one, we\'ll guide you through the full trademark application process — so your brand is safe from copycats.<br><br>Our service includes:<br>• Logo file prep (if needed)<br>• Thorough trademark search (to avoid conflicts)<br>• Application submission to the CIPC\'s IP Office<br>• Ongoing updates until final approval<br><br>A registered trademark gives you the exclusive right to use your logo — a major step in building a serious, trustworthy business.<br><br>💡 Tip: Pair this with our Logo Design or Company Registration services for a full brand protection setup.<br><br>Lock in your brand identity today — we\'ll handle the paperwork.'
    },
    'small-apps': {
        icon: '📱',
        title: 'Small Apps',
        description: 'Turn your idea into a working app — without the tech stress.<br><br>BROCODEDEVS creates clean, functional mobile and web apps — perfect for startups, creators, small businesses, or personal projects. We specialize in lightweight apps (2 to 10 pages) that deliver real value without unnecessary complexity.<br><br>We design, develop, and deploy apps for:<br>• Android (via Google Play Store)<br>• iOS (via Apple App Store)<br>• Web-based apps (with domain + hosting setup)<br><br>Our service includes:<br>✔️ App design & development<br>✔️ Domain name and hosting setup (for web apps)<br>✔️ Google Play Store & Apple App Store account creation<br>✔️ App publishing with all necessary assets<br><br>Whether it\'s a booking tool, profile-based app, simple platform, or a creative tool — we\'ll guide you through it step-by-step, using smart tech (including AI) to move fast and build affordably.<br><br>🧩 Already have a design or idea? Let\'s bring it to life. Need help planning? We got you.<br><br>Start building your app today — and take it live with BROCODEDEVS.'
    },
    'landing-page-websites': {
        icon: '🌐',
        title: 'Landing Page Websites',
        description: 'First impressions matter — make yours count.<br><br>At BROCODEDEVS, we build clean, modern landing page websites that instantly give your business or brand a professional online presence. Perfect for startups, service providers, freelancers, and new businesses looking to launch fast and look legit.<br><br>Our websites are:<br>• Fast, mobile-friendly & responsive<br>• Custom-branded to match your logo/colors<br>• Designed with clear call-to-actions (e.g., contact, WhatsApp, bookings)<br><br>What\'s included:<br>✔️ 1–3 page website (Home, About, Contact or Services)<br>✔️ Custom domain registration (.co.za, .com, etc.)<br>✔️ Hosting setup & launch<br>✔️ Basic SEO (Google-friendly)<br><br>Want to grow later? We can upgrade your landing page into a full website or online store when you\'re ready.<br><br>🚀 Launch your business online the smart way — with a BROCODEDEVS landing page that speaks for your brand.'
    },
    'shopify-stores': {
        icon: '🛒',
        title: 'Shopify Stores',
        description: 'Ready to sell online? We\'ll build your full Shopify store — fast, clean, and fully functional.<br><br>At BROCODEDEVS, we specialize in creating complete Shopify stores for small businesses, dropshippers, and entrepreneurs. Whether you\'re selling clothing, tech, homeware, or digital products — we\'ll set up everything you need to start making sales.<br><br>Our Shopify Store Setup includes:<br>✔️ Full store design & layout (customized to your brand)<br>✔️ Product uploads (with images, descriptions, and categories)<br>✔️ Payment method integration (Visa, MasterCard, Apple Pay, Zapper, etc.)<br>✔️ Custom domain registration (.com, .co.za, etc.)<br>✔️ Mobile-optimized design<br>✔️ Checkout & shipping setup<br><br>Optional Add-ons:<br>• Logo & branding kit<br>• Email newsletter setup<br>• WhatsApp or Messenger integration<br><br>Whether you\'re launching a brand or moving from another platform, BROCODEDEVS makes the process simple, fast, and professional.<br><br>💼 Already have products? Great. Need help sourcing or writing descriptions? We\'ve got you.<br><br>Let\'s get your store online and start selling with style.'
    },
    'digital-ads': {
        icon: '📢',
        title: 'Digital Advertising',
        description: 'Let your brand be seen — we create and run powerful digital ads that convert.<br><br>At BROCODEDEVS, we offer end-to-end digital advertising for businesses, brands, and creators who want to grow their reach and get real results. From concept to launch, we create stunning image or video ads and promote them across major platforms.<br><br>Platforms we work with:<br>• Facebook & Instagram Ads<br>• TikTok Ads<br>• YouTube Video Ads<br><br>Our service includes:<br>✔️ Custom ad graphics or videos<br>✔️ Target audience research<br>✔️ Campaign setup & optimization<br>✔️ Ad copywriting & captions<br>✔️ Performance tracking and reporting<br><br>Whether you\'re promoting a product, service, event, or your brand — we help you reach the right people with the right message.<br><br>📊 We don\'t just post — we strategize. Every ad is backed by audience targeting and platform best practices to maximize ROI.<br><br>💥 Want to go viral or just drive steady sales? Let\'s create a campaign tailored to your goals.<br><br>Launch your first ad with BROCODEDEVS and grow your brand the smart way.'
    },
    'business-email': {
        icon: '📧',
        title: 'Business Emails',
        description: 'Look professional, build trust — with a business email that matches your brand.<br><br>At BROCODEDEVS, we set up custom business emails using Gmail (Google Workspace), so you can communicate with clients professionally and securely. Instead of using @gmail.com, you\'ll get an email like info@yourcompany.co.za — branded and legit.<br><br>Our service includes:<br>✔️ Gmail business email setup via Google Workspace<br>✔️ Domain connection and verification<br>✔️ Email account creation (1 or more addresses)<br>✔️ Admin access and management support<br>✔️ Quick setup — ready in 24–48 hours<br><br>Whether you\'re a solo founder or a growing team, we help you set up business emails that make your company look polished and trustworthy.<br><br>💼 Already have a domain? We\'ll connect it. Need one? We\'ll register it for you.<br><br>Start sending emails like a pro — with BROCODEDEVS business email setup.'
    },
    'domain-registration': {
        icon: '🌍',
        title: 'Domain Registration',
        description: 'Your domain is your digital address — let\'s lock it down before someone else does.<br><br>BROCODEDEVS offers fast and reliable domain registration services for businesses, startups, and brands. We register your domain using Google Domains or Google Workspace, so your brand is instantly connected with trusted hosting and professional tools.<br><br>We help you secure domains like:<br>• yourcompany.co.za<br>• yourbrand.com<br>• Other options: .org, .online, .store, etc.<br><br>What\'s included:<br>✔️ Domain name search & availability check<br>✔️ Full domain registration<br>✔️ DNS & email configuration (if needed)<br>✔️ Ownership transfer to your business<br>✔️ Google account linking for easy access<br><br>Whether you\'re preparing for a website, email, or app — your domain is step one. Let us take care of the technical side so you can focus on growing your business.<br><br>💡 Need a full setup? Pair your domain with a website, email, or Shopify store — we\'ve got bundle deals.<br><br>Claim your brand name online — with BROCODEDEVS domain registration.'
    },
    'payment-methods': {
        icon: '💳',
        title: 'Payment Methods',
        description: 'Ready to start making money online? We\'ll set up your payment systems — fast and secure.<br><br>At BROCODEDEVS, we help you accept payments on your website, Shopify store, or mobile app by setting up trusted, reliable payment gateways. Whether you\'re based in South Africa or selling internationally, we make sure your checkout process runs smoothly.<br><br>We integrate:<br>• Payfast (popular in SA for EFT, card & more)<br>• PayPal (international payments)<br>• Yoco (card payments + POS)<br><br>Our service includes:<br>✔️ Payment gateway account setup (Payfast, PayPal, or Yoco)<br>✔️ Full integration into your Shopify, web app, or mobile app<br>✔️ Test payments to ensure everything works<br>✔️ Support with KYC/verification if needed<br>✔️ Secure and mobile-optimized configuration<br><br>Whether you\'re launching a new store, a booking app, or a digital service — we make it easy to get paid directly into your account.<br><br>💡 Combine this with our Shopify Store or Web App services for a full e-commerce setup.<br><br>Start accepting payments online today — with BROCODEDEVS payment integration.'
    }
};

// Modal functionality
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const service = serviceData[serviceId];
    
    if (service) {
        document.querySelector('.modal-icon').innerHTML = service.icon;
        document.querySelector('.modal-title').textContent = service.title;
        document.querySelector('.modal-description').innerHTML = service.description;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for service accordion
document.addEventListener('DOMContentLoaded', () => {
    // Service accordion functionality
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        const header = item.querySelector('.service-header');
        header.addEventListener('click', () => {
            // Close all other items
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Modal close button (keep for any remaining modal functionality)
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }
    
    // Close modal when clicking backdrop
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                closeServiceModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
}); 