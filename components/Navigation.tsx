'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary-dark/95 backdrop-blur-custom shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-dark">RR</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-playfair font-bold text-accent-gold">
                RR Biryani
              </h1>
              <p className="text-xs text-text-secondary hidden md:block">
                Family Restaurant
              </p>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-text-primary hover:text-accent-gold transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="tel:+1234567890"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Order Now</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-accent-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary-dark/98 backdrop-blur-custom"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-text-primary hover:text-accent-gold transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+1234567890"
                className="btn-primary flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={18} />
                <span>Order Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
