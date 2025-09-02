import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const JoyFootballAcademy = () => {
  const techniques = [
    'React.js Development',
    'Responsive Web Design',
    'Modern UI/UX Design',
    'SEO Optimization',
    'Performance Optimization',
    'Cross-browser Compatibility'
  ]

  return (
    <div className="min-h-screen pt-16 sm:pt-18 md:pt-20">
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            {/* Project Logo */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl sm:text-4xl font-bold">JFA</span>
              </div>
              <h1 className="heading-xl mb-4">
                Joy Football Academy
              </h1>
              <p className="body-lg text-gray-600 max-w-2xl mx-auto">
                Professional website design and development for a leading football academy
              </p>
            </div>
          </motion.div>

          {/* Project Content */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="heading-lg mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="body-lg text-gray-700 leading-relaxed">
                  [Project introduction placeholder - You can edit this text later with details about the Joy Football Academy project, 
                  including the client's requirements, goals, and the overall vision for the website.]
                </p>
              </div>
            </motion.div>

            {/* Techniques & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="heading-lg mb-6">Techniques & Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techniques.map((technique, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span className="body-md text-gray-700">{technique}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="heading-lg mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Screenshot Placeholders */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-600 text-lg">📱</span>
                    </div>
                    <p className="text-gray-500 text-sm">Mobile View</p>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-600 text-lg">💻</span>
                    </div>
                    <p className="text-gray-500 text-sm">Desktop View</p>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-600 text-lg">🎨</span>
                    </div>
                    <p className="text-gray-500 text-sm">Design Elements</p>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-gray-600 text-lg">⚡</span>
                    </div>
                    <p className="text-gray-500 text-sm">Performance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="btn-primary btn-large inline-flex items-center"
              >
                Start Your Project
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JoyFootballAcademy
