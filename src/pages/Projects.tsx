import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

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
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
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
          <div className="flex justify-center">
            {/* Joy Football Academy Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer max-w-md w-full"
            >
                            <Link to="/projects/joy-football-academy" className="block">
                {/* Project Logo */}
                <div className="w-full aspect-[4/3] bg-[#0B2239] flex items-center justify-center mb-4">
                  <img 
                    src="/JF Academy/JFlogow.png" 
                    alt="Joy Football Academy Logo" 
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#D7263D] transition-colors duration-300">
                    Joy Football Academy
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Professional website design and development for a leading football academy
                  </p>
                  
                  <div className="flex items-center text-[#D7263D] font-medium group-hover:text-[#0B2239] transition-colors duration-300 text-sm">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
