import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Mail, Phone, Clock, MapPin } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What services does BROCODEDEVS offer?',
          answer: 'We offer comprehensive web development services including custom website development, mobile app development, e-commerce solutions, UI/UX design, custom software development, and website maintenance. Our services are tailored to meet the specific needs of businesses of all sizes.'
        },
        {
          question: 'How long does a typical project take to complete?',
          answer: 'Project timelines vary depending on complexity. Our Starter package typically takes 2-3 weeks, Growth package takes 4-6 weeks, and Premium package takes 6-8 weeks. We always provide detailed timelines during the planning phase and keep you updated throughout the process.'
        },
        {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, all our packages include support for the specified period. We also offer ongoing maintenance plans starting from R2,500/month that include regular updates, security monitoring, performance optimization, and technical support.'
        },
        {
          question: 'Can you work with my existing website or system?',
          answer: 'Absolutely! We can work with your existing website, integrate with your current systems, or completely rebuild from scratch. We\'ll assess your current setup and recommend the best approach for your needs and budget.'
        }
      ]
    },
    {
      title: 'Pricing & Packages',
      items: [
        {
          question: 'What are your package prices?',
          answer: 'Our packages start from R6,000 for the Starter package, R12,000 for the Growth package, and R20,000 for the Premium package. All packages include hosting, domain registration, SSL certificate, and ongoing support. We also offer additional services like maintenance (R2,500/month), SEO services (R5,000/month), and content creation (R3,000/page).'
        },
        {
          question: 'Can I customize a package to fit my specific needs?',
          answer: 'Yes, we can customize any package to include additional features or services that meet your specific business requirements. We\'ll work with you to create a tailored solution that fits your budget and timeline.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We require a 50% deposit to start work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers and major credit cards.'
        },
        {
          question: 'What\'s included in each package?',
          answer: '• Starter Package – From R6,000: Includes Company Registration, Logo Design, Domain Registration, Business Email. • Growth Package – From R12,000: Includes Starter + Landing Page Website or Shopify Store, Payment Gateway Setup, Basic Digital Advertising. • Premium Package – From R20,000: Includes Growth + Small Apps (Web/Android/iOS), Trademark Registration, Advanced Digital Advertising, Ongoing Support.'
        },
        {
          question: 'Do you offer maintenance plans?',
          answer: 'Yes, we offer comprehensive maintenance plans starting from R2,500/month. These include regular updates, security monitoring, performance optimization, backup management, technical support, and content updates.'
        }
      ]
    },
    {
      title: 'Technical Questions',
      items: [
        {
          question: 'What technologies do you use?',
          answer: 'We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, Python, PHP, Laravel, WordPress, Shopify, Flutter, React Native, MongoDB, PostgreSQL, AWS, Docker, and Git. We choose the best technology stack for each project based on requirements.'
        },
        {
          question: 'Will my website be mobile-friendly?',
          answer: 'Yes, all our websites are built with responsive design and are fully optimized for mobile devices. We ensure your website looks and functions perfectly on smartphones, tablets, and desktop computers.'
        },
        {
          question: 'Do you provide SEO optimization?',
          answer: 'Yes, all our packages include basic SEO setup. Our Growth and Premium packages include advanced SEO optimization. We also offer dedicated SEO services starting from R5,000/month for ongoing optimization and content strategy.'
        },
        {
          question: 'How do you ensure website security?',
          answer: 'We implement comprehensive security measures including SSL certificates, secure coding practices, regular security updates, malware scanning, and backup systems. Our Premium package includes advanced security features and monitoring.'
        }
      ]
    },
    {
      title: 'Project Process',
      items: [
        {
          question: 'What is your development process?',
          answer: 'Our process includes: 1) Discovery & Planning - understanding your requirements, 2) Design & Prototyping - creating wireframes and mockups, 3) Development - building your project, 4) Testing & Quality Assurance - thorough testing across devices, 5) Launch & Support - deployment and ongoing assistance.'
        },
        {
          question: 'How do you handle project communication?',
          answer: 'We maintain regular communication throughout the project via email, phone calls, and video meetings. You\'ll have a dedicated project manager who keeps you updated on progress and is available to answer questions. We also provide project management tools for tracking progress.'
        },
        {
          question: 'Can I make changes during development?',
          answer: 'Yes, we accommodate reasonable changes during development. Minor changes are included in the project scope. For major changes, we\'ll discuss the impact on timeline and budget. We always aim to be flexible while maintaining project quality.'
        },
        {
          question: 'What happens after the project is launched?',
          answer: 'After launch, we provide training on how to use your new website or application, documentation, and ongoing support for the specified period. We also offer maintenance plans for continued support and updates.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl mb-6 text-white">
              Frequently Asked Questions
            </h1>
            <p className="body-lg text-gray-300">
              Find answers to common questions about our services, pricing, and process. Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding dotted-bg">
        <div className="container-custom max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-8 text-center">{category.title}</h2>
              
              <div className="space-y-0">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems.includes(itemIndex + categoryIndex * 100)
                  return (
                    <div key={itemIndex} className="border-b border-gray-200 last:border-b-0">
                      <button
                        onClick={() => toggleItem(itemIndex + categoryIndex * 100)}
                        className="w-full py-6 px-0 text-left focus:outline-none focus:ring-0"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-black pr-8">
                            {item.question}
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6">
                              <p className="text-gray-600 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-6">
              Still Have Questions?
            </h2>
            <p className="body-lg text-gray-600 mb-8">
              Can't find the answer you're looking for? Our team is here to help. Contact us directly and we'll get back to you within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-black mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a 
                  href="mailto:info@brocodedevs.co.za" 
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  info@brocodedevs.co.za
                </a>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-black mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a 
                  href="tel:+27631563253" 
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  +27 63 156 3253
                </a>
              </div>
            </div>

            <Link to="/contact" className="btn-primary btn-large">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Quick Links
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Explore our services and learn more about what we offer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="heading-sm mb-4">Our Services</h3>
              <p className="text-gray-600 mb-6">Learn about our comprehensive web development services</p>
              <Link to="/services" className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
                View Services →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="heading-sm mb-4">Pricing & Packages</h3>
              <p className="text-gray-600 mb-6">Explore our pricing options and package details</p>
              <Link to="/packages" className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
                View Packages →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="heading-sm mb-4">Our Portfolio</h3>
              <p className="text-gray-600 mb-6">See examples of our work and client projects</p>
              <a 
                href="https://pin.it/2gKss3B41" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-black font-medium hover:text-gray-600 transition-colors duration-300"
              >
                View Portfolio →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="body-lg text-gray-300 mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary btn-large">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/packages" className="btn-secondary btn-large">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ 