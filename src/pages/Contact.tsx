import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Upload, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB')
        e.target.value = ''
        return
      }
      setSelectedFile(file)
    }
  }

  const services = [
    'Web Development',
    'Mobile App Development',
    'E-commerce Solutions',
    'UI/UX Design',
    'Custom Software Development',
    'Website Maintenance',
    'SEO Services',
    'Other'
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
              Get In Touch
            </h1>
            <p className="body-lg text-gray-300">
              Ready to start your project? Contact us today and let's discuss how we can help bring your digital vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="section-padding dotted-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-8">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  action="https://formsubmit.co/info@brocodedevs.co.za"
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmitting(true)
                    
                    try {
                      const formData = new FormData(e.currentTarget)
                      
                      // Add formsubmit.co configuration
                      formData.append('_captcha', 'false')
                      formData.append('_template', 'table')
                      formData.append('_next', 'https://brocodedevs.co.za/thank-you.html')
                      
                      const response = await fetch('https://formsubmit.co/info@brocodedevs.co.za', {
                        method: 'POST',
                        body: formData
                      })
                      
                      if (response.ok) {
                        setIsSubmitted(true)
                        // Redirect to thank you page after 2 seconds
                        setTimeout(() => {
                          window.location.href = 'https://brocodedevs.co.za/thank-you.html'
                        }, 2000)
                      } else {
                        throw new Error('Submission failed')
                      }
                    } catch (error) {
                      alert('Failed to submit form. Please try again.')
                    } finally {
                      setIsSubmitting(false)
                    }
                  }}
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="+27 63 156 3253"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="form-label">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="form-label">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="form-select"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="form-label">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="file" className="form-label">
                      Attach Files (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="file"
                        name="attachment"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.pdf,.docx"
                      />
                      <label
                        htmlFor="file"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gray-400 transition-colors duration-300"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            {selectedFile ? selectedFile.name : 'Click to upload files (max 10MB)'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, Images, ZIP files accepted
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary btn-large w-full btn-full-mobile"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-lg mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:info@brocodedevs.co.za" 
                      className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      info@brocodedevs.co.za
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a 
                      href="tel:+27631563253" 
                      className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      +27 63 156 3253
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available during business hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office</h3>
                    <p className="text-gray-600">
                      Durban, South Africa
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We work with clients worldwide
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Why Choose BROCODEDEVS?</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-black mr-3" />
                    Fast response time (within 24 hours)
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-black mr-3" />
                    Free project consultation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-black mr-3" />
                    Transparent pricing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-black mr-3" />
                    Ongoing support after launch
                  </div>
                </div>
              </div>
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
              Let's discuss your ideas and create something amazing together. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@brocodedevs.co.za"
                className="btn-primary btn-large"
              >
                Send Email
                <Mail className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="tel:+27631563253"
                className="btn-secondary btn-large"
              >
                Call Us
                <Phone className="w-5 h-5 ml-2 inline" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 