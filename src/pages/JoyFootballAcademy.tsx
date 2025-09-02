import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Palette, Eye, Download } from 'lucide-react'

const JoyFootballAcademy = () => {
  const techniques = [
    'React.js Development',
    'Responsive Web Design',
    'Modern UI/UX Design',
    'SEO Optimization',
    'Performance Optimization',
    'Cross-browser Compatibility'
  ]

  const colorPalette = [
    { name: 'White (Humility)', hex: '#FFFFFF', description: 'Clean backgrounds and text contrast' },
    { name: 'Light Blue (Education)', hex: '#A7D8F5', description: 'Accent elements and highlights' },
    { name: 'Red (Football/Fighters)', hex: '#D7263D', description: 'Primary brand color and CTAs' },
    { name: 'Yellow (Joy)', hex: '#FFD23F', description: 'Energy and positive messaging' },
    { name: 'Dark Navy (Neutral/Base)', hex: '#0B2239', description: 'Text and structural elements' }
  ]

  const logoVariations = [
    {
      name: 'Primary Logo',
      description: 'Main logo for digital and print applications',
      background: 'bg-white',
      textColor: 'text-[#0B2239]'
    },
    {
      name: 'Logo on Red',
      description: 'Logo displayed on football/fighters red background',
      background: 'bg-[#D7263D]',
      textColor: 'text-white'
    },
    {
      name: 'Logo on Navy',
      description: 'Logo on dark navy for contrast applications',
      background: 'bg-[#0B2239]',
      textColor: 'text-white'
    },
    {
      name: 'Logo on Yellow',
      description: 'Logo on joy yellow for energetic applications',
      background: 'bg-[#FFD23F]',
      textColor: 'text-[#0B2239]'
    },
    {
      name: 'Logo on Light Blue',
      description: 'Logo on education blue for academic contexts',
      background: 'bg-[#A7D8F5]',
      textColor: 'text-[#0B2239]'
    }
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#D7263D] to-[#FFD23F] rounded-full mx-auto mb-6 flex items-center justify-center">
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
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="body-lg text-gray-700 leading-relaxed">
                  [Project introduction placeholder - You can edit this text later with details about the Joy Football Academy project, 
                  including the client's requirements, goals, and the overall vision for the website.]
                </p>
              </div>
            </motion.div>

            {/* Logo Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-6">Logo Identity</h2>
              <p className="body-lg text-gray-600 mb-8 max-w-3xl">
                The Joy Football Academy logo represents the spirit of football, education, and joy. 
                Multiple variations ensure the logo works effectively across all applications and backgrounds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {logoVariations.map((variation, index) => (
                  <motion.div
                    key={variation.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="group"
                  >
                    <div className={`${variation.background} rounded-lg p-6 aspect-square flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#D7263D] to-[#FFD23F] rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white text-xl font-bold">JFA</span>
                        </div>
                        <p className={`text-sm font-medium ${variation.textColor}`}>Joy Football Academy</p>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold text-gray-800 mb-1">{variation.name}</h3>
                      <p className="text-sm text-gray-600">{variation.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Color Palette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-6">Color Palette</h2>
              <p className="body-lg text-gray-600 mb-8 max-w-3xl">
                A carefully crafted color system that reflects the academy's values: humility, education, 
                football spirit, joy, and professionalism.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorPalette.map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                      <div 
                        className="h-24 w-full"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1">{color.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{color.description}</p>
                        <div className="flex items-center justify-between">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hex}</code>
                          <button 
                            className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={() => navigator.clipboard.writeText(color.hex)}
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Techniques & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="heading-lg mb-6">Techniques & Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techniques.map((technique, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#D7263D] rounded-full mr-3"></div>
                    <span className="body-md text-gray-700">{technique}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
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
              transition={{ duration: 0.8, delay: 0.6 }}
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
