import { motion } from 'framer-motion'
import { Users, Award, Target, Heart, ArrowRight, Star, CheckCircle } from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: 'Percival Gwala',
      role: 'Founder',
      description: 'Expert in AI, coding, design, web & app development, and Shopify stores. Leading the technical vision and innovation at BROCODEDEVS.',
      skills: ['AI Development', 'Web Development', 'App Development', 'Shopify Stores', 'Design']
    },
    {
      name: 'Xolani Mweli',
      role: 'Co-Founder',
      description: 'Specializes in admin & registrations, domains, payment methods, and company setup. Managing business operations and client services.',
      skills: ['Company Registration', 'Domain Management', 'Payment Methods', 'Business Setup', 'Admin']
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our passion for technology and innovation drives us to create exceptional digital experiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with clients to achieve shared goals.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and integrity in all our business relationships.'
    }
  ]

  const achievements = [
    '50+ Successful Projects',
    '100% Client Satisfaction',
    '24/7 Support Available',
    'Fastest Growing Tech Company'
  ]

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black rounded-full text-lg font-bold mb-6 shadow-lg">
                <Award className="w-5 h-5 mr-2" />
                100% Black Owned
              </div>
              <h1 className="heading-xl mb-6">
                About BROCODEDEVS
              </h1>
              <p className="body-lg text-gray-300 mb-8">
                We are a 100% Black-owned digital agency providing complete business solutions from company registration to digital marketing. Our passionate team of developers, designers, and business strategists is dedicated to helping South African businesses grow and succeed in the digital world.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  5-Star Rated
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  50+ Projects
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Users className="w-4 h-4 text-blue-400 mr-2" />
                  2 Team Members
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg font-medium">
                    Team Photo
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Percival & Xolani
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Award className="w-4 h-4 inline mr-1" />
                100% Black Owned
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-6">Our Story</h2>
            <p className="body-lg text-gray-600">
              BROCODEDEVS was founded by two passionate individuals who shared a common vision: to create exceptional digital solutions while representing and empowering the Black tech community. What started as a small team has grown into a respected digital agency known for quality, innovation, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Black Owned Badge */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-lg font-semibold mb-6">
              <Award className="w-6 h-6 mr-3" />
              100% Black Owned & Operated
            </div>
            <h2 className="heading-lg mb-6">Proudly Black Owned</h2>
            <p className="body-lg text-gray-600 mb-8">
              As a 100% Black-owned company, we're committed to breaking barriers in the tech industry and creating opportunities for underrepresented communities. Our diverse team brings unique perspectives and innovative solutions to every project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-6">Our Values</h2>
            <p className="body-lg text-gray-600">
              These core values guide everything we do and shape the way we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="body-lg text-gray-600 mb-6">
                To empower businesses with innovative digital solutions while creating opportunities for underrepresented communities in the tech industry. We believe technology should be accessible to everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Deliver exceptional digital experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Foster diversity in the tech industry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Build lasting client relationships</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-lg mb-6">Our Vision</h2>
              <p className="body-lg text-gray-600 mb-6">
                To become the leading Black-owned digital agency in South Africa, known for innovation, quality, and commitment to community development. We envision a future where diversity in tech is the norm, not the exception.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Lead innovation in digital solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Inspire the next generation of developers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Create positive social impact</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-6">
              Let's Build Something Together
            </h2>
            <p className="body-lg text-gray-300 mb-8">
              Ready to bring your digital vision to life? Our team is here to help you create something amazing. Get in touch with us today and let's start building the future together.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="btn-primary btn-large"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 