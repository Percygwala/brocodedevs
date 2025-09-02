import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Globe, Smartphone, Database, Mail, Phone, MapPin, Clock, CheckCircle, Users, Target, Award, Shield, Palette } from 'lucide-react'

const Home = () => {
  const services = [
    {
      title: 'Company Registration',
      description: 'CIPC registration, name reservation, MOI, and BO updates',
      price: 'From R550',
      icon: Shield,
      link: '/forms/company-registration'
    },
    {
      title: 'Logo Design',
      description: 'Professional logo design with Illustrator and Photoshop',
      price: 'From R750',
      icon: Palette,
      link: '/forms/logo-design'
    },
    {
      title: 'Landing Page Websites',
      description: 'Business websites with custom domains and SEO optimization',
      price: 'From R1,200',
      icon: Globe,
      link: '/forms/landing-page'
    },
    {
      title: 'Shopify Stores',
      description: 'Complete e-commerce solutions with payment integration',
      price: 'From R2,500',
      icon: Database,
      link: '/forms/shopify'
    },
    {
      title: 'Digital Advertising',
      description: 'Social media and digital marketing campaigns',
      price: 'From R800',
      icon: Target,
      link: '/forms/digital-advertising'
    },
    {
      title: 'Business Emails',
      description: 'Professional Gmail business email setup',
      price: 'From R350',
      icon: Mail,
      link: '/forms/business-emails'
    }
  ]



  const packages = [
    {
      name: 'Starter',
      price: 'R6,000',
      description: 'Perfect for new businesses and startups',
      features: ['Company Registration', 'Logo Design', 'Domain Registration', 'Business Email']
    },
    {
      name: 'Growth',
      price: 'R12,000',
      description: 'Ideal for growing businesses',
      features: ['All Starter Features', 'Landing Page Website or Shopify Store', 'Payment Gateway Setup', 'Basic Digital Advertising']
    },
    {
      name: 'Premium',
      price: 'R20,000',
      description: 'Complete business solution',
      features: ['All Growth Features', 'Small Apps (Web/Android/iOS)', 'Trademark Registration', 'Advanced Digital Advertising']
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
              Digital agency providing complete business solutions from company registration to digital marketing
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
                to="/services"
                className="btn-secondary btn-large btn-full-mobile"
              >
                View Services
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
              Complete business solutions from company registration to digital marketing at competitive prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <div className="text-lg font-bold text-black mb-3">{service.price}</div>
                <p className="body-md text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="btn-primary btn-full-mobile w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* Projects Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Our Projects
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our work and the digital solutions we've created for our clients
            </p>
          </motion.div>

          <div className="grid-responsive-2 gap-8 sm:gap-12">
            {/* Joy Football Academy Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/projects/joy-football-academy" className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#D7263D] to-[#FFD23F] flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-2xl font-bold">JFA</span>
                      </div>
                      <p className="text-white text-sm font-medium">Joy Football Academy</p>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="heading-md mb-2 group-hover:text-[#D7263D] transition-colors duration-300">
                      Joy Football Academy
                    </h3>
                    <p className="body-md text-gray-600 mb-4">
                      Professional website design and development for a leading football academy
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:text-gray-600 transition-colors duration-300">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Future Project Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer opacity-60"
            >
              <div className="bg-white rounded-lg overflow-hidden border-2 border-dashed border-gray-300 shadow-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-600 text-2xl font-bold">+</span>
                    </div>
                    <p className="text-gray-500 text-sm">More Projects Coming Soon</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="heading-md mb-2 text-gray-400">
                    Future Project
                  </h3>
                  <p className="body-md text-gray-400 mb-4">
                    Stay tuned for more amazing projects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16"
          >
            <Link
              to="/projects"
              className="btn-secondary btn-large"
            >
              View All Projects
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


    </div>
  )
}

export default Home 