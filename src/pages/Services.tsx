import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Globe, Smartphone, Database, Palette, Zap, Users, Shield, CheckCircle, Clock, Target } from 'lucide-react'
import TiltedCard from '../components/TiltedCard'

const Services = () => {
  // Function to get the form path for each service
  const getServiceFormPath = (serviceTitle: string) => {
    const formPaths: Record<string, string> = {
      'Company Registration': '/forms/company-registration',
      'Logo Design': '/forms/logo-design',
      'Trademark': '/forms/trademark',
      'Small Apps': '/forms/small-apps',
      'Landing Page Websites': '/forms/landing-page',
      'Shopify Stores': '/forms/shopify',
      'Digital Advertising': '/forms/digital-advertising',
      'Business Emails': '/forms/business-emails',
      'Domain Registration': '/forms/domain-registration',
      'Payment Methods': '/forms/payment-methods'
    }
    return formPaths[serviceTitle] || '/contact'
  }

  const services = [
    {
      title: 'Company Registration',
      price: 'From R550',
      shortDescription: 'CIPC registration and business setup',
      longDescription: 'Complete company registration service including CIPC registration, name reservation, Memorandum of Incorporation (MOI), and Business Owner (BO) updates. Get your business legally registered and ready to operate.',
      icon: Shield,
      features: ['CIPC Registration', 'Name Reservation', 'MOI Preparation', 'BO Update', 'Legal Compliance', 'Business Setup Support']
    },
    {
      title: 'Logo Design',
      price: 'From R750',
      shortDescription: 'Professional logo design services',
      longDescription: 'Create a memorable brand identity with our professional logo design service. We use Adobe Illustrator and Photoshop to create high-quality, scalable logos that represent your business perfectly.',
      icon: Palette,
      features: ['Professional Design', 'Adobe Illustrator/Photoshop', 'Multiple Concepts', 'Scalable Formats', 'Brand Guidelines', 'Revisions Included']
    },
    {
      title: 'Trademark',
      price: 'From R1,500',
      shortDescription: 'Trademark registration for your brand',
      longDescription: 'Protect your brand with trademark registration for new or existing business logos. Our service ensures your intellectual property is legally protected and your brand identity is secure.',
      icon: Shield,
      features: ['Trademark Search', 'Application Filing', 'Legal Protection', 'Brand Security', 'Renewal Reminders', 'Legal Support']
    },
    {
      title: 'Small Apps',
      price: 'From R2,000',
      shortDescription: 'Mobile and web applications',
      longDescription: 'Develop custom applications for Android, iOS, or web platforms. Includes 2-10 page apps, Play Store/App Store account setup, and domain configuration. Perfect for startups and small businesses.',
      icon: Smartphone,
      features: ['Android & iOS Apps', 'Web Applications', 'Play Store Setup', 'App Store Setup', 'Domain Configuration', '2-10 Pages Included']
    },
    {
      title: 'Landing Page Websites',
      price: 'From R1,200',
      shortDescription: 'Professional business websites',
      longDescription: 'Create stunning business websites with custom domains. Our landing page websites are designed to convert visitors into customers with modern design and optimized user experience.',
      icon: Globe,
      features: ['Custom Domain', 'Responsive Design', 'SEO Optimization', 'Contact Forms', 'Analytics Setup', 'Mobile Optimized']
    },
    {
      title: 'Shopify Stores',
      price: 'From R2,500',
      shortDescription: 'Complete e-commerce solutions',
      longDescription: 'Launch your online business with a fully functional Shopify store. Includes payment method integration, custom domain setup, and complete e-commerce functionality to start selling online.',
      icon: Database,
      features: ['Full Store Setup', 'Payment Methods', 'Custom Domain', 'Product Management', 'Order Processing', 'Analytics Dashboard']
    },
    {
      title: 'Digital Advertising',
      price: 'From R800',
      shortDescription: 'Social media and digital marketing',
      longDescription: 'Reach your target audience with strategic digital advertising campaigns on Facebook, Instagram, TikTok, and YouTube. Drive traffic, increase brand awareness, and generate leads.',
      icon: Target,
      features: ['Facebook Ads', 'Instagram Ads', 'TikTok Ads', 'YouTube Ads', 'Campaign Management', 'Performance Analytics']
    },
    {
      title: 'Business Emails',
      price: 'From R350',
      shortDescription: 'Professional Gmail business emails',
      longDescription: 'Set up professional business email addresses using Gmail for Business. Create a professional image with custom domain email addresses that match your brand.',
      icon: Users,
      features: ['Gmail Business Setup', 'Custom Domain Emails', 'Professional Branding', 'Email Management', 'Security Features', 'Technical Support']
    },
    {
      title: 'Domain Registration',
      price: 'From R250',
      shortDescription: 'Google domain registration service',
      longDescription: 'Secure your online presence with Google domain registration. Get the perfect domain name for your business with reliable hosting and management services.',
      icon: Globe,
      features: ['Google Domains', 'Domain Search', 'Registration Service', 'DNS Management', 'Privacy Protection', 'Renewal Services']
    },
    {
      title: 'Payment Methods',
      price: 'From R450',
      shortDescription: 'Payment gateway integration',
      longDescription: 'Accept online payments with integrated payment gateways including PayFast, PayPal, and Yoco. Set up secure payment processing for your business website or e-commerce store.',
      icon: Zap,
      features: ['PayFast Integration', 'PayPal Setup', 'Yoco Integration', 'Secure Processing', 'Transaction Management', 'Payment Analytics']
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
              Our Services
            </h1>
            <p className="body-lg text-gray-300">
              Complete business solutions from company registration to digital marketing. We help you establish and grow your business with professional services at competitive prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <TiltedCard
                key={service.title}
                title={service.title}
                description={service.longDescription}
                price={service.price}
                icon={service.icon}
                link={getServiceFormPath(service.title)}
                delay={index * 0.1}
              />
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
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <img 
                  src="/image.png" 
                  alt="BROCODEDEVS Digital Solutions Portfolio - Web Development and Design Projects" 
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
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