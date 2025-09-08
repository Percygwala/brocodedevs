import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Smartphone, ShoppingCart, Palette, ArrowRight } from 'lucide-react'
import LazyImage from '../components/LazyImage'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'design', name: 'UI/UX Design' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      description: 'A modern e-commerce platform with advanced features including payment processing, inventory management, and analytics dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Payment Processing', 'Inventory Management', 'Analytics Dashboard', 'Mobile Responsive'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/ecommerce',
      icon: ShoppingCart
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'A secure and user-friendly mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
      features: ['Biometric Authentication', 'Real-time Transactions', 'Push Notifications', 'Offline Support'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/banking-app',
      icon: Smartphone
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'web',
      description: 'A professional corporate website with content management system, blog functionality, and lead generation tools.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
      features: ['Content Management', 'Blog System', 'Contact Forms', 'SEO Optimized'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/corporate-website',
      icon: Code
    },
    {
      id: 4,
      title: 'Design System',
      category: 'design',
      description: 'A comprehensive design system with reusable components, documentation, and design tokens for consistent branding.',
      image: '/api/placeholder/600/400',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      features: ['Component Library', 'Design Tokens', 'Documentation', 'Accessibility'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/design-system',
      icon: Palette
    },
    {
      id: 5,
      title: 'Restaurant Management',
      category: 'web',
      description: 'A complete restaurant management system with order processing, inventory tracking, and customer management.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebSocket'],
      features: ['Order Management', 'Inventory Tracking', 'Customer Database', 'Real-time Updates'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/restaurant-app',
      icon: Code
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Google Fit API', 'Cloud Functions'],
      features: ['Workout Plans', 'Progress Tracking', 'Social Features', 'Health Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/brocodedevs/fitness-app',
      icon: Smartphone
    }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  )

  return (
    <div className="min-h-screen pt-16 sm:pt-18 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl mb-4 sm:mb-6">
              Our Portfolio
            </h1>
            <p className="body-lg text-gray-600">
              Explore our latest projects and see how we've helped businesses achieve their digital goals with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 touch-target ${
                  activeFilter === filter.id
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid-responsive"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card card-hover group"
                >
                  {/* Project Image */}
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-lg">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="h-48 sm:h-56 w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 touch-target"
                        >
                          <ExternalLink className="w-4 h-4 text-black" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 touch-target"
                        >
                          <Github className="w-4 h-4 text-black" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center mb-3">
                    <project.icon className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="heading-sm mb-2 sm:mb-3">{project.title}</h3>
                  <p className="body-md text-gray-600 mb-4 sm:mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-overflow-safe">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-small btn-full-mobile text-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary btn-small btn-full-mobile text-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">30+</div>
              <div className="text-sm sm:text-base text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">99%</div>
              <div className="text-sm sm:text-base text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="body-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary btn-large btn-full-mobile"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="btn-secondary btn-large btn-full-mobile"
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio 