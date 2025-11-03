'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  business: string
  service: string
  message?: string
}

const FinalCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    // In production, you'd send this to your backend or email service
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', data)
    
    // Track conversion in analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD'
      })
    }

    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact-form" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Skyrocket Your Social Media?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Take the first step toward a stronger online presence and more customers. 
            Get your free consultation now – no obligation, just results-focused advice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free Consultation Call</h4>
                    <p className="text-primary-100">We'll discuss your business goals and current social media presence</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Strategy Proposal</h4>
                    <p className="text-primary-100">We'll create a tailored plan to achieve your specific objectives</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Start Growing</h4>
                    <p className="text-primary-100">Launch your campaign and watch your business thrive online</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm mb-2">Prefer to call directly?</p>
                <a href="tel:603-555-0123" className="flex items-center justify-center space-x-2 text-lg font-semibold hover:text-accent-300 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>603-555-0123</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your information and will be in touch within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@business.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(603) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold mb-2">
                      Business Name *
                    </label>
                    <input
                      {...register('business', { required: 'Business name is required' })}
                      type="text"
                      id="business"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="ABC Company"
                    />
                    {errors.business && (
                      <p className="text-red-500 text-sm mt-1">{errors.business.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold mb-2">
                      I'm interested in...
                    </label>
                    <select
                      {...register('service')}
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="organic">Organic Social Media Growth</option>
                      <option value="ads">Paid Advertising Campaigns</option>
                      <option value="super">Super Package (Both)</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Tell us about your goals (optional)
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What are you hoping to achieve with social media marketing?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Get My Free Consultation
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Your information will only be used to contact you about your inquiry. 
                    No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
