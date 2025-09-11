import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, Globe, Smartphone, Database, Palette, Code } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      name: 'Starter',
      price: 'R6,000',
      period: 'one-time',
      description: 'Perfect for new businesses and startups',
      recommended: false,
      features: [
        'Company Registration',
        'Logo Design',
        'Domain Registration',
        'Business Email Setup',
        'Basic SEO Setup',
        'Mobile Responsive Design',
        'Contact Form Integration',
        '1 Month Support'
      ],
      icon: Globe
    },
    {
      name: 'Growth',
      price: 'R12,000',
      period: 'one-time',
      description: 'Ideal for growing businesses',
      recommended: true,
      features: [
        'All Starter Package Features',
        'Landing Page Website or Shopify Store',
        'Payment Gateway Setup',
        'Basic Digital Advertising',
        'Advanced SEO Optimization',
        'Social Media Integration',
        'Analytics Dashboard',
        '3 Months Support',
        'Performance Optimization'
      ],
      icon: Zap
    },
    {
      name: 'Premium',
      price: 'R20,000',
      period: 'one-time',
      description: 'Complete business solution',
      recommended: false,
      features: [
        'All Growth Package Features',
        'Small Apps (Web/Android/iOS)',
        'Trademark Registration',
        'Advanced Digital Advertising',
        'Priority Support (6 months)',
        'Custom Functionality',
        'Advanced Analytics',
        'Security Implementation',
        'Training & Documentation'
      ],
      icon: Star
    }
  ]

  const additionalServices = [
    {
      name: 'Company Registration',
      price: 'R550',
      description: 'CIPC registration, name reservation, MOI, BO update'
    },
    {
      name: 'Logo Design',
      price: 'R750',
      description: 'Professional logo design with Illustrator/Photoshop'
    },
    {
      name: 'Trademark Registration',
      price: 'R1,500',
      description: 'Trademark registration for new or existing business logos'
    },
    {
      name: 'Small App Development',
      price: 'R2,000',
      description: '2-10 page Android, iOS, or web apps with store setup'
    }
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-0">
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
              Business Packages
            </h1>
            <p className="body-lg text-gray-300">
              Choose the perfect package for your business needs. From startup to enterprise, we have solutions that scale with your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Choose Your Package
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              All packages include hosting, domain registration, SSL certificate, and ongoing support for the specified period.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-4">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${
                  pkg.recommended 
                    ? 'border-2 border-black shadow-xl scale-105' 
                    : 'border border-gray-200'
                } bg-white rounded-2xl`}
              >
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Recommended
                    </div>
                  </div>
                )}

                <div className={`p-8 ${pkg.recommended ? 'pt-12' : ''}`}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="heading-md mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-black">{pkg.price}</span>
                      <span className="text-gray-500 ml-2">/{pkg.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Link 
                      to="/contact" 
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base ${
                        pkg.recommended
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
                      }`}
                      state={{ package: pkg.name }}
                    >
                      Request {pkg.name} Package
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Additional Services
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your package with these additional services to meet your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="heading-sm mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-black mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg mb-6">
              Frequently Asked Questions
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our packages and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What's included in the packages?</h3>
                <p className="text-gray-600">All packages include hosting, domain registration, SSL certificate, and ongoing support for the specified period.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I upgrade my package later?</h3>
                <p className="text-gray-600">Yes, you can upgrade your package at any time. We'll prorate the difference and migrate your existing content.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">Yes, all packages include support for the specified period. We also offer maintenance plans for ongoing support.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How long does development take?</h3>
                <p className="text-gray-600">Development time varies by package complexity. Starter packages typically take 2-3 weeks, while Premium packages can take 6-8 weeks.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I request custom features?</h3>
                <p className="text-gray-600">Absolutely! We can customize any package to include additional features that meet your specific business needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment terms do you offer?</h3>
                <p className="text-gray-600">We require a 50% deposit to start work, with the remaining balance due upon project completion.</p>
              </div>
            </div>
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
              Contact us to discuss your project requirements and get a custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary btn-large">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/faq" className="btn-secondary btn-large">
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Packages 