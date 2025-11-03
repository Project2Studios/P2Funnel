'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      business: 'The Corner Café',
      location: 'Manchester, NH',
      text: 'Project 2 Studios doubled our Facebook followers and brought in new customers within 3 months! Our weekend traffic is up 25% since we started working with them.',
      rating: 5,
    },
    {
      name: 'Mike Davidson',
      business: 'Davidson Home Services',
      location: 'Nashua, NH',
      text: 'We didn\'t have time for marketing. Their team put us on the social media map and our phone hasn\'t stopped ringing. Best investment we\'ve made for our business.',
      rating: 5,
    },
    {
      name: 'Jennifer Chen',
      business: 'Bloom Boutique',
      location: 'Concord, NH',
      text: 'The paid ads campaign brought us a 5x return on our ad spend in the first month alone. They really understand how to target local customers effectively.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Local Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join dozens of Southern NH businesses that are winning more customers with our help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="card h-full relative overflow-hidden">
                <Quote className="absolute top-2 right-4 w-12 h-12 text-primary-100" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-primary-600">{testimonial.business}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
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
          <div className="inline-flex items-center justify-center space-x-8 p-6 bg-gray-50 rounded-xl">
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-primary-600">300%</div>
              <div className="text-sm text-gray-600">Avg. Follower Growth</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-primary-600">5x</div>
              <div className="text-sm text-gray-600">Avg. ROI on Ads</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
