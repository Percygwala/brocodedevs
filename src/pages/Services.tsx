import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Globe, Smartphone, Database, Palette, Zap, Users, Shield, CheckCircle, Clock, Target } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      price: 'From R15,000',
      shortDescription: 'Custom websites and web applications',
      longDescription: 'We build modern, responsive websites and web applications using cutting-edge technologies. From simple landing pages to complex web applications, we deliver solutions that drive business growth and provide exceptional user experiences.',
      icon: Globe,
      features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Performance Optimization', 'Security Implementation', 'Ongoing Support']
    },
    {
      title: 'Mobile App Development',
      price: 'From R25,000',
      shortDescription: 'Native and cross-platform mobile applications',
      longDescription: 'Create powerful mobile applications for iOS and Android platforms. We develop both native and cross-platform solutions using React Native and Flutter, ensuring your app works seamlessly across all devices.',
      icon: Smartphone,
      features: ['iOS & Android', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Testing']
    },
    {
      title: 'E-commerce Solutions',
      price: 'From R20,000',
      shortDescription: 'Complete online store platforms',
      longDescription: 'Build your online business with our comprehensive e-commerce solutions. We create secure, scalable online stores with payment processing, inventory management, and customer relationship tools.',
      icon: Database,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Accounts', 'Analytics Dashboard', 'Multi-language Support']
    },
    {
      title: 'UI/UX Design',
      price: 'From R8,000',
      shortDescription: 'User-centered design solutions',
      longDescription: 'Create intuitive and beautiful user interfaces that enhance user experience and drive engagement. Our design process focuses on user research, wireframing, prototyping, and usability testing.',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Interactive Prototypes']
    },
    {
      title: 'Custom Software Development',
      price: 'From R35,000',
      shortDescription: 'Tailored business software solutions',
      longDescription: 'Develop custom software solutions that streamline your business operations. We create enterprise-grade applications, APIs, and integrations that solve specific business challenges and improve efficiency.',
      icon: Code,
      features: ['Custom APIs', 'Database Design', 'System Integration', 'Cloud Deployment', 'Scalability Planning', 'Technical Documentation']
    },
    {
      title: 'Website Maintenance',
      price: 'From R2,500/month',
      shortDescription: 'Ongoing support and updates',
      longDescription: 'Keep your website running smoothly with our comprehensive maintenance services. We handle updates, security patches, performance optimization, and provide ongoing technical support.',
      icon: Shield,
      features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Backup Management', 'Technical Support', 'Content Updates']
    }
  ]

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-xl mb-6">
              Our Services
            </h1>
            <p className="body-lg text-gray-300">
              Comprehensive web development solutions tailored to your business needs. From simple websites to complex applications, we deliver results that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 && index !== services.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                } ${
                  index < services.length - 2 ? 'border-b border-gray-200' : ''
                } ${
                  index === services.length - 2 && services.length % 2 === 0 ? 'lg:border-b-0' : ''
                }`}
              >
                <div className="p-8 lg:p-12">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="heading-md">{service.title}</h2>
                        <p className="text-gray-500 text-sm">{service.shortDescription}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black">{service.price}</div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="mb-8">
                    <p className="body-md text-gray-600 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>

                  {/* Service Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-black mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-start">
                    <Link 
                      to="/contact" 
                      className="btn-primary"
                      state={{ service: service.title }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-6">
                Why Choose BROCODEDEVS?
              </h2>
              <p className="body-lg text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with creative design to deliver solutions that not only work flawlessly but also look amazing and drive results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">We deliver projects on time without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our experienced developers and designers ensure top-quality results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing and quality checks before delivery.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Code className="w-32 h-32 text-gray-400" />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 bg-black text-white p-4 rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-6 h-6" />
              </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="body-lg text-gray-300 mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary btn-large">
                Start Your Project
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

export default Services 