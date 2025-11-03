'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import Analytics from '@/components/Analytics'

export default function LandingPage() {
  return (
    <>
      <Analytics />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <Pricing />
        <About />
        <FinalCTA />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  )
}
