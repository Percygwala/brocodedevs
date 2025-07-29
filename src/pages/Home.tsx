import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Globe, Smartphone, Database, Mail, Phone, MapPin, Clock, CheckCircle, Users, Target, Award } from 'lucide-react'

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: Globe,
      link: '/services'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      link: '/services'
    },
    {
      title: 'E-commerce',
      description: 'Online stores and shopping platforms with secure payment integration',
      icon: Database,
      link: '/services'
    }
  ]

  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with payment processing and inventory management',
      image: '/api/placeholder/400/300',
      link: '/portfolio'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking application with biometric authentication',
      image: '/api/placeholder/400/300',
      link: '/portfolio'
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional business website with content management system',
      image: '/api/placeholder/400/300',
      link: '/portfolio'
    }
  ]

  const packages = [
    {
      name: 'Starter',
      price: 'R15,000',
      description: 'Perfect for small businesses and startups',
      features: ['5 Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO']
    },
    {
      name: 'Professional',
      price: 'R25,000',
      description: 'Ideal for growing businesses',
      features: ['10 Pages', 'CMS Integration', 'Advanced SEO', 'Analytics']
    },
    {
      name: 'Enterprise',
      price: 'R45,000',
      description: 'Complete solution for large organizations',
      features: ['Unlimited Pages', 'Custom Features', 'Priority Support', 'Performance Optimization']
    }
  ]

  return (
    <div className="min-h-screen pt-16 sm:pt-18 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl mb-4 sm:mb-6">
              BROCODEDEVS
            </h1>
            <p className="body-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We create exceptional digital experiences that drive business growth and user engagement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary btn-large btn-full-mobile"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-secondary btn-large btn-full-mobile"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid-responsive-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-3 sm:mb-4">{service.title}</h3>
                <p className="body-md text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <Link to={service.link} className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Featured Work
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects that showcase our expertise and creativity
            </p>
          </motion.div>

          <div className="grid-responsive">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover group"
              >
                <div className="bg-gray-200 rounded-lg h-40 sm:h-48 mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400" />
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{project.category}</div>
                <h3 className="heading-sm mb-2 sm:mb-3">{project.title}</h3>
                <p className="body-md text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                <Link to={project.link} className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
                  View Project →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Packages Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Business Packages
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your business needs, from startup to enterprise solutions
            </p>
          </motion.div>

          <div className="grid-responsive">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="heading-sm mb-2">{pkg.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-black mb-2">{pkg.price}</div>
                <p className="body-md text-gray-600 mb-4 sm:mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-black mr-2 flex-shrink-0" />
                      <span className="text-overflow-safe">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/packages" className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link
              to="/packages"
              className="btn-primary btn-large"
            >
              View All Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Work with us
            </h2>
            <p className="body-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Ready to bring your digital vision to life? Let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="btn-secondary btn-large btn-full-mobile"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="section-padding-compact bg-gray-50">
        <div className="container-custom">
          <div className="grid-responsive-2 gap-responsive-lg">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-8 h-8 text-black" />
                <span className="text-xl font-bold text-black">BROCODEDEVS</span>
              </div>
              <p className="body-md text-gray-600 mb-6">
                Creating exceptional digital experiences that drive business growth and user engagement.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                  <Users className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                  <Target className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                  <Award className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <a href="mailto:info@brocodedevs.co.za" className="body-md text-gray-600 hover:text-black transition-colors duration-300">
                  info@brocodedevs.co.za
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <a href="tel:+27123456789" className="body-md text-gray-600 hover:text-black transition-colors duration-300">
                  +27 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="body-md text-gray-600">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="body-md text-gray-600">Mon - Fri: 9AM - 6PM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 