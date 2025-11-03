'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, X } from 'lucide-react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const packages = [
    {
      name: 'Organic Growth',
      price: '$600',
      period: '/month',
      description: 'Perfect for businesses wanting to build authentic engagement',
      features: [
        { text: 'Custom content strategy & calendar', included: true },
        { text: '3-5 posts per week on 2 platforms', included: true },
        { text: 'Community management & engagement', included: true },
        { text: 'Monthly analytics & growth report', included: true },
        { text: 'Facebook & Instagram ad campaigns', included: false },
        { text: 'Ad spend budget management', included: false },
        { text: 'Quarterly strategy sessions', included: false },
      ],
      cta: 'Start Growing',
      highlighted: false,
    },
    {
      name: 'Super Package',
      price: '$1,000',
      period: '/month',
      description: 'Complete social media domination for serious growth',
      features: [
        { text: 'Custom content strategy & calendar', included: true },
        { text: '3-5 posts per week on 2 platforms', included: true },
        { text: 'Community management & engagement', included: true },
        { text: 'Monthly analytics & growth report', included: true },
        { text: 'Facebook & Instagram ad campaigns', included: true },
        { text: 'Ad spend budget management', included: true },
        { text: 'Quarterly strategy sessions', included: true },
        { text: 'Priority support & dedicated manager', included: true },
      ],
      cta: 'Get Everything',
      highlighted: true,
    },
    {
      name: 'Paid Ads Only',
      price: '$500',
      period: '/month',
      subtext: '+ ad spend',
      description: 'Quick wins with targeted advertising campaigns',
      features: [
        { text: 'Custom content strategy & calendar', included: false },
        { text: '3-5 posts per week on 2 platforms', included: false },
        { text: 'Community management & engagement', included: false },
        { text: 'Monthly analytics & growth report', included: true },
        { text: 'Facebook & Instagram ad campaigns', included: true },
        { text: 'Ad spend budget management', included: true },
        { text: 'Weekly campaign optimization', included: true },
      ],
      cta: 'Start Advertising',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most small businesses spend $500-$2,500 per month on social media marketing. 
            Our packages are designed to maximize impact for every dollar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${pkg.highlighted ? 'transform lg:-translate-y-4' : ''}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-5 left-0 right-0 text-center">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold inline-block shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`card h-full ${pkg.highlighted ? 'ring-2 ring-accent-400 shadow-2xl' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                  {pkg.subtext && (
                    <span className="text-sm text-gray-500">{pkg.subtext}</span>
                  )}
                  <p className="text-gray-600 mt-3">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.getElementById('contact-form')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`w-full ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-primary-50 rounded-xl text-center"
        >
          <p className="text-gray-700">
            <strong>Need a custom package?</strong> We can tailor our services to your specific needs and budget. 
            All packages include month-to-month contracts with no long-term commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
