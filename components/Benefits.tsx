'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, TrendingUp, DollarSign, Users, Target, Award } from 'lucide-react'

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'You have a business to run – we handle the social media hustle for you.',
    },
    {
      icon: Users,
      title: 'Reach More Customers',
      description: 'Tap into thousands of local customers on Facebook & Instagram who are looking for businesses like yours.',
    },
    {
      icon: DollarSign,
      title: 'Grow Revenue',
      description: 'Turn online engagement into real sales – our strategies focus on getting you a tangible return on investment.',
    },
    {
      icon: Target,
      title: 'Local Expertise',
      description: 'We understand the Southern NH market and what local customers respond to.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Data-driven strategies that have helped dozens of local businesses thrive online.',
    },
    {
      icon: Award,
      title: 'Full Service',
      description: 'From content creation to ad management, we\'re your complete social media team.',
    },
  ]

  const stats = [
    { number: '78%', label: 'of shoppers check social media before buying' },
    { number: '90%', label: 'of local businesses use social media marketing' },
    { number: '5x', label: 'average ROI on social media advertising' },
  ]

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Social Media Marketing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your customers are on social media. If you're not actively engaging them there, 
            your competitors are stealing the spotlight – and your potential customers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 p-8 bg-primary-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't Let Your Competition Win Online
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Every day without a strong social media presence is a day your competitors are winning customers that could be yours.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact-form')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Start Growing Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
