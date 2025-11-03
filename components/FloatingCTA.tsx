'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Only show on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null
  }

  return (
    <>
      {/* Floating phone button for mobile */}
      <a
        href="tel:603-555-0123"
        className={`md:hidden fixed bottom-20 right-4 z-40 bg-accent-500 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Floating consultation button */}
      <button
        onClick={() => {
          const element = document.getElementById('contact-form')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
        className={`fixed bottom-4 right-4 z-40 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-primary-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <span className="hidden md:inline">Get Free Consultation</span>
        <span className="md:hidden">Free Consultation</span>
      </button>
    </>
  )
}

export default FloatingCTA
