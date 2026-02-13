'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation as NavigationIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-secondary-dark rounded-2xl flex items-center justify-center gold-border">
      <div className="text-center">
        <MapPin className="text-accent-gold mx-auto mb-2 animate-pulse" size={32} />
        <p className="text-text-secondary">Loading map...</p>
      </div>
    </div>
  ),
})

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+1 (234) 567-8900',
    link: 'tel:+12345678900',
    action: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+1 (234) 567-8900',
    link: 'https://wa.me/12345678900',
    action: 'Chat Now',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@rrbiryani.com',
    link: 'mailto:info@rrbiryani.com',
    action: 'Email Us',
  },
  {
    icon: MapPin,
    title: 'Address',
    detail: '123 Main Street, City, State 12345',
    link: 'https://maps.google.com/?q=123+Main+Street+City+State',
    action: 'Get Directions',
  },
]

const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
  { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 10:00 PM' },
]

export default function LocationSection() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      const minute = now.getMinutes()
      const currentTime = hour * 60 + minute

      if (day === 0) {
        setIsOpen(currentTime >= 720 && currentTime < 1320)
      } else if (day >= 1 && day <= 4) {
        setIsOpen(currentTime >= 660 && currentTime < 1320)
      } else {
        setIsOpen(currentTime >= 660 && currentTime < 1380)
      }
    }

    checkIfOpen()
    const interval = setInterval(checkIfOpen, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="location" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-accent-gold" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Visit <span className="gold-gradient">Us Today</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Find us at our location or get in touch with us. We&apos;re here to serve you the
            finest culinary experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-secondary-dark rounded-2xl p-8 gold-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-playfair font-bold">
                  <span className="gold-gradient">Opening Hours</span>
                </h3>
                <div
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    isOpen
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {isOpen ? 'Open Now' : 'Closed'}
                </div>
              </div>

              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-accent-gold/20 last:border-0"
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="text-accent-gold" size={20} />
                      <span className="text-text-primary font-medium">{item.day}</span>
                    </div>
                    <span className="text-accent-gold font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={item.title === 'WhatsApp' || item.title === 'Address' ? '_blank' : undefined}
                    rel={item.title === 'WhatsApp' || item.title === 'Address' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-secondary-dark p-6 rounded-xl gold-border hover:shadow-gold transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors">
                        <Icon className="text-accent-gold" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-text-secondary text-sm break-words">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-accent-gold font-semibold text-sm group-hover:text-accent-gold-light transition-colors">
                      <span>{item.action}</span>
                      <NavigationIcon size={16} />
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-2xl p-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">
                Special Offer!
              </h3>
              <p className="text-primary-dark mb-6">
                Order now and get <strong>20% OFF</strong> on your first order. Use code:{' '}
                <strong className="text-xl">WELCOME20</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+12345678900"
                  className="bg-primary-dark text-accent-gold px-6 py-3 rounded-full font-semibold text-center hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Call to Order</span>
                </a>
                <a
                  href="https://wa.me/12345678900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-dark text-accent-gold px-6 py-3 rounded-full font-semibold text-center hover:bg-secondary-dark transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-dark rounded-2xl p-4 gold-border h-full">
              <MapWithNoSSR />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
