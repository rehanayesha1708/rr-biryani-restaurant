'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Star, Users, Clock, Shield } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Best Indian Restaurant 2023',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Traditional Family Recipes',
  },
  {
    icon: Users,
    title: '10k+ Customers',
    description: 'Serving Since 2009',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Fresh Ingredients Daily',
  },
]

const ratings = [
  { platform: 'Google', rating: 4.9, reviews: 2450 },
  { platform: 'Yelp', rating: 4.8, reviews: 1820 },
  { platform: 'TripAdvisor', rating: 4.9, reviews: 1560 },
  { platform: 'Zomato', rating: 4.7, reviews: 3200 },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-primary-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mt-2 mb-6">
                Crafting <span className="gold-gradient">Memories</span>
                <br />
                Since 2009
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                At RR Biryani & Family Restaurant, we believe in the power of authentic
                flavors and traditional cooking methods. Our journey began 15 years ago
                with a simple vision: to bring the royal taste of Hyderabadi biryani to
                food lovers everywhere.
              </p>
              <p>
                Every dish we serve is prepared with premium ingredients, aromatic spices,
                and recipes that have been perfected over generations. Our chefs are
                masters of their craft, ensuring each meal is a celebration of India&apos;s
                rich culinary heritage.
              </p>
              <p>
                From family gatherings to special celebrations, we&apos;ve been honored to be
                part of countless cherished moments. Join us in experiencing food that&apos;s
                not just cooked, but crafted with passion and served with pride.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-6 bg-secondary-dark rounded-2xl gold-border"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center">
                  <Clock className="text-accent-gold" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-text-primary">
                    Chef&apos;s Special Note
                  </h3>
                  <p className="text-accent-gold text-sm">- Master Chef Ravi Kumar</p>
                </div>
              </div>
              <p className="text-text-secondary italic">
                &quot;The secret to great biryani lies not just in the spices, but in the
                patience and love with which it&apos;s prepared. Every dish that leaves our
                kitchen carries a piece of our heritage.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-secondary-dark rounded-2xl p-8 gold-border">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-center">
                Customer <span className="gold-gradient">Ratings</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {ratings.map((item, index) => (
                  <motion.div
                    key={item.platform}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center p-4 bg-primary-dark rounded-xl hover:shadow-gold transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Star className="text-accent-gold" size={24} fill="currentColor" />
                      <span className="text-3xl font-bold text-accent-gold ml-2">
                        {item.rating}
                      </span>
                    </div>
                    <p className="text-text-primary font-semibold mb-1">{item.platform}</p>
                    <p className="text-text-secondary text-sm">
                      {item.reviews.toLocaleString()} reviews
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-accent-gold/20">
                <div className="text-center">
                  <p className="text-5xl font-bold text-accent-gold mb-2">4.8</p>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-accent-gold"
                        size={20}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm">
                    Average rating from 9,030 reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-secondary-dark p-6 rounded-xl gold-border hover:shadow-gold transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-accent-gold/20 transition-colors">
                      <Icon className="text-accent-gold" size={24} />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
