import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const Projects = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-18 md:pt-20">
      {/* Header */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="heading-xl mb-4 sm:mb-6">
              Our Projects
            </h1>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing our work and the digital solutions we've created for our clients
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid-responsive-2 gap-8 sm:gap-12">
            {/* Joy Football Academy Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <Link to="/projects/joy-football-academy" className="block">
                <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-600 text-2xl font-bold">JFA</span>
                      </div>
                      <p className="text-gray-500 text-sm">Joy Football Academy Logo</p>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="heading-md mb-2 group-hover:text-black transition-colors duration-300">
                      Joy Football Academy
                    </h3>
                    <p className="body-md text-gray-600 mb-4">
                      Professional website design and development for a leading football academy
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:text-gray-600 transition-colors duration-300">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
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
              <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-dashed border-gray-300">
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
        </div>
      </section>
    </div>
  )
}

export default Projects
