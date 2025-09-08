import { motion } from 'framer-motion'
import { useState } from 'react'
import { Linkedin, Mail, User } from 'lucide-react'

interface ProfileCardProps {
  name: string
  role: string
  description: string
  skills: string[]
  socialLinks?: {
    linkedin?: string
    email?: string
  }
  delay?: number
}

const ProfileCard = ({ 
  name, 
  role, 
  description, 
  skills, 
  socialLinks,
  delay = 0 
}: ProfileCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        rotateX: 0,
        translateY: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { type: "spring", stiffness: 200, damping: 15 }
      }}
      className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Avatar */}
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700 shadow-lg">
            {initials}
          </div>
          
          {/* Status Dot */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
            animate={{
              scale: isHovered ? 1.2 : 1,
              boxShadow: isHovered ? "0 0 20px rgba(34, 197, 94, 0.5)" : "0 0 0px rgba(34, 197, 94, 0)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Name and Role */}
        <motion.div
          className="text-center mb-6"
          animate={{
            y: isHovered ? -5 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 font-medium">{role}</p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-center mb-6 leading-relaxed text-sm"
          animate={{
            y: isHovered ? -3 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {/* Skills */}
        <motion.div
          className="mb-6"
          animate={{
            y: isHovered ? -3 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        {socialLinks && (
          <motion.div
            className="flex justify-center space-x-3"
            animate={{
              y: isHovered ? -3 : 0,
              opacity: isHovered ? 1 : 0.8
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
          >
            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            )}
            {socialLinks.email && (
              <motion.a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            )}
          </motion.div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
        }}
      />
    </motion.div>
  )
}

export default ProfileCard