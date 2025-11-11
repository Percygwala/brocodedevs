import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Palette, Eye, Download, X, Maximize2 } from 'lucide-react'
import { useState } from 'react'

const JoyFootballAcademy = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null)

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
      textColor: 'text-[#0B2239]',
      logo: `${import.meta.env.BASE_URL}JF%20Academy/JFlogob.png`
    },
    {
      name: 'Logo on Red',
      description: 'Logo displayed on football/fighters red background',
      background: 'bg-[#D7263D]',
      textColor: 'text-white',
      logo: `${import.meta.env.BASE_URL}JF%20Academy/JFlogow.png`
    },
    {
      name: 'Logo on Navy',
      description: 'Logo on dark navy for contrast applications',
      background: 'bg-[#0B2239]',
      textColor: 'text-white',
      logo: `${import.meta.env.BASE_URL}JF%20Academy/JFlogow.png`
    },
    {
      name: 'Logo on Yellow',
      description: 'Logo on joy yellow for energetic applications',
      background: 'bg-[#FFD23F]',
      textColor: 'text-[#0B2239]',
      logo: `${import.meta.env.BASE_URL}JF%20Academy/JFlogob.png`
    },
    {
      name: 'Logo on Light Blue',
      description: 'Logo on education blue for academic contexts',
      background: 'bg-[#A7D8F5]',
      textColor: 'text-[#0B2239]',
      logo: `${import.meta.env.BASE_URL}JF%20Academy/JFlogob.png`
    }
  ]

  return (
    <div className="min-h-screen pt-20 md:pt-0">
      {/* Header */}
      <section className="section-padding dotted-bg">
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
            
            {/* Project Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="heading-xl mb-4">
                Joy Football Academy
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional website design and development for a leading football academy
              </p>
            </div>

                  {/* Huge Logo Display */}
      <div className="mb-16">
        <div className="w-full h-[32rem] bg-[#0B2239] rounded-lg flex items-center justify-center p-8">
          <img
            src={`${import.meta.env.BASE_URL}JF%20Academy/JFlogow.png`}
            alt="Joy Football Academy Logo"
            className="w-[72%] h-[72%] object-contain"
          />
        </div>
      </div>

      {/* Logo Inspiration - Soccer Ball & JF Monogram */}
      <div className="mb-16">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Logo Inspiration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Soccer Ball Inspiration */}
            <div className="text-center">
              <img
                src={`${import.meta.env.BASE_URL}JF%20Academy/56209-O8I7TZ-289.png`}
                alt="Soccer Ball Design Inspiration"
                className="w-full h-auto max-w-md mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Soccer Ball Pattern</h3>
              <p className="text-gray-600">
                The geometric shapes and sharp angles of traditional soccer balls inspired the logo's design language
              </p>
            </div>
            
            {/* JF Monogram */}
            <div className="text-center">
              <img
                src={`${import.meta.env.BASE_URL}JF%20Academy/sign%20b.png`}
                alt="JF Monogram Logo"
                className="w-full h-auto max-w-md mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">JF Monogram</h3>
              <p className="text-gray-600">
                The stylized "JF" monogram incorporates the geometric precision and angular design inspired by soccer ball patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Design Concept */}
      <div className="mb-16">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Logo Design Concept</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
            <p className="mb-6">
              The Joy Football Academy logo was designed with inspiration drawn directly from the game itself. The sharp, geometric lines are modeled after the classic shapes found in a traditional soccer ball, creating a strong visual link to football.
            </p>
            <p className="mb-6">
              The bold, angular style gives the logo a modern and professional look, while also symbolizing structure, teamwork, and precision—the core values of the academy. The interlocking shapes represent connection and unity, reflecting how the academy brings players together to grow, learn, and thrive.
            </p>
            <p>
              By keeping the design minimal and striking, the logo works seamlessly across digital platforms, merchandise, and print while remaining instantly recognizable.
            </p>
          </div>
        </div>
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
                <p className="body-lg text-gray-700 leading-relaxed mb-6">
                  Joy Football Academy approached us to create a digital presence that reflects their commitment to developing young talent both on and off the field. We designed and built a modern website that highlights the academy's values, programs, and community spirit while making it easy for parents and players to access important information.
                </p>
                <p className="body-lg text-gray-700 leading-relaxed">
                  The project included designing a bold new logo inspired by the geometric shapes of a soccer ball, symbolizing unity, structure, and the energy of the sport. Combined with a clean, responsive website layout, the brand now has a professional and engaging platform that supports their mission of nurturing future football stars.
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
                      <img
                        src={variation.logo}
                        alt="Joy Football Academy Logo"
                        className="w-96 h-96 object-contain"
                      />
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Screenshot 1 - Home Page */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative cursor-pointer" onClick={() => setSelectedScreenshot(`${import.meta.env.BASE_URL}JF%20Academy/Screenshot%201.png`)}>
                      <img
                        src={`${import.meta.env.BASE_URL}JF%20Academy/Screenshot%201.png`}
                        alt="Joy Football Academy Home Page - Mission, Vision, and Core Values"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Home Page</h3>
                      <p className="text-sm text-gray-600">
                        Mission, Vision, and Core Values showcase with dynamic hero section and 5 pillars
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Screenshot 2 - Programs Page */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative cursor-pointer" onClick={() => setSelectedScreenshot(`${import.meta.env.BASE_URL}JF%20Academy/Screenshot%202.png`)}>
                      <img
                        src={`${import.meta.env.BASE_URL}JF%20Academy/Screenshot%202.png`}
                        alt="Joy Football Academy Programs & Fees Page"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">Programs & Fees</h3>
                      <p className="text-sm text-gray-600">
                        Age-group training programs with pricing and detailed descriptions
                      </p>
                    </div>
                  </div>
                </motion.div>
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

      {/* Full Screen Screenshot Modal */}
      {selectedScreenshot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedScreenshot(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedScreenshot}
              alt="Full Screen Screenshot"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default JoyFootballAcademy
