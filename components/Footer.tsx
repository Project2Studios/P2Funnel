'use client'

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-width-container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Project 2 Studios</h3>
            <p className="text-gray-400 mb-4">
              Your local social media marketing partner, helping Southern NH businesses grow online.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:603-555-0123"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                603-555-0123
              </a>
              <a
                href="mailto:info@project2studios.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@project2studios.com
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                <span>
                  123 Elm Street<br />
                  Manchester, NH 03101
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#contact-form"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Project 2 Studios. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            {' • '}
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
