'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-dark border-t border-accent-gold/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-dark">RR</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-accent-gold">
                  RR Biryani
                </h3>
                <p className="text-xs text-text-secondary">Family Restaurant</p>
              </div>
            </div>
            <p className="text-text-secondary mb-6">
              Serving authentic Indian cuisine with love and tradition since 2009. Experience
              the royal taste in every bite.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent-gold/10 rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark text-accent-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-playfair font-bold text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-playfair font-bold text-text-primary mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <span className="text-accent-gold font-semibold">Mon - Thu:</span> 11:00 AM
                - 10:00 PM
              </li>
              <li>
                <span className="text-accent-gold font-semibold">Fri - Sat:</span> 11:00 AM
                - 11:00 PM
              </li>
              <li>
                <span className="text-accent-gold font-semibold">Sunday:</span> 12:00 PM -
                10:00 PM
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-playfair font-bold text-text-primary mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12345678900"
                  className="flex items-start space-x-3 text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>+1 (234) 567-8900</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rrbiryani.com"
                  className="flex items-start space-x-3 text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span>info@rrbiryani.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=123+Main+Street+City+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>123 Main Street, City, State 12345</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-accent-gold/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} RR Biryani & Family Restaurant. All rights
              reserved.
            </p>
            <p className="text-text-secondary text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-accent-gold" fill="currentColor" /> for food lovers
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
