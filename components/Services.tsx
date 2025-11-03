'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Megaphone, Rocket, Check } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Calendar,
      title: 'Organic Social Growth',
      price: 'Starting at $600/mo',
      description: 'Build your brand\'s following naturally with consistent, engaging content.',
      features: [
        'Content strategy & planning',
        '3-5 posts per week on key platforms',
        'Community management & engagement',
        'Monthly growth analytics',
      ],
      color: 'primary',
    },
    {
      icon: Megaphone,
      title: 'Paid Ads Campaign',
      price: 'From $500/mo (+ ad spend)',
      description: 'Get instant visibility and leads with targeted social media ads.',
      features: [
        'Facebook & Instagram ad campaigns',
        'Custom audience targeting',
        'Weekly optimization',
        'Performance tracking & ROI reports',
      ],
      color: 'accent',
    },
    {
      icon: Rocket,
      title: 'Super Package',
      price: 'Starting at $1,000/mo',
      description: 'Maximize your growth with a full-spectrum approach.',
      features: [
        'Everything in Organic + Ads',
        'Unified marketing strategy',
        'Priority support',
        'Quarterly strategy sessions',
      ],
      color: 'gradient',
      popular: true,
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three powerful ways to dominate social media and win more customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    BEST VALUE
                  </span>
                </div>
              )}
              
              <div className={`card h-full ${service.popular ? 'ring-2 ring-accent-400 shadow-2xl' : ''}`}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-lg mb-4 ${
                      service.color === 'gradient' 
                        ? 'bg-gradient-to-r from-primary-100 to-accent-100'
                        : service.color === 'accent'
                        ? 'bg-accent-100'
                        : 'bg-primary-100'
                    }`}>
                      <service.icon className={`w-8 h-8 ${
                        service.color === 'gradient'
                          ? 'text-accent-600'
                          : service.color === 'accent'
                          ? 'text-accent-600'
                          : 'text-primary-600'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-lg font-semibold text-primary-600 mb-3">{service.price}</p>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact-form')
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full ${
                      service.popular 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            <strong>All packages are flexible and customizable.</strong> No long-term contracts – 
            cancel anytime. Custom packages available on request.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
