'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Award, Users, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: MapPin,
      title: 'Local Market Experts',
      description: 'Based in Manchester, NH, we understand the Southern NH business landscape',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Social media specialists who live and breathe digital marketing',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '5+ years helping NH businesses grow their online presence',
    },
    {
      icon: Zap,
      title: 'Data-Driven',
      description: 'Every strategy backed by analytics and real performance metrics',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-width-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Project 2 Studios?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Project 2 Studios is a Manchester, NH-based social media marketing agency dedicated to 
              helping local businesses thrive online. We're not just marketers – we're your neighbors, 
              committed to your success.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Our team understands the unique challenges Southern NH businesses face. We combine 
              big agency expertise with the personal touch and local knowledge that only a 
              hometown partner can provide. When you work with us, you get a dedicated team 
              that cares about your growth as much as you do.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <feature.icon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to You
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>No long-term contracts</strong> – We earn your trust every month
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Transparent reporting</strong> – Know exactly what we're doing and why
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Personal attention</strong> – You're not just another account number
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>ROI focused</strong> – Every strategy aimed at growing your bottom line
                  </span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-center text-gray-700">
                  <span className="block text-2xl font-bold text-primary-600 mb-1">
                    603-555-0123
                  </span>
                  <span className="text-sm">Call us for a free consultation</span>
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-300 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Need to import Check
import { Check } from 'lucide-react'

export default About
