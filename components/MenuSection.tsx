'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChefHat, Flame, Star } from 'lucide-react'

const categories = ['All', 'Biryani', 'Starters', 'Curries', 'Beverages']

const menuItems = [
  {
    id: 1,
    name: 'Hyderabadi Dum Biryani',
    category: 'Biryani',
    description: 'Aromatic basmati rice layered with tender meat, slow-cooked to perfection',
    price: '$15.99',
    isSpecial: true,
    spicyLevel: 3,
  },
  {
    id: 2,
    name: 'Chicken Tikka Biryani',
    category: 'Biryani',
    description: 'Marinated chicken tikka pieces with fragrant rice and exotic spices',
    price: '$14.99',
    isSpecial: false,
    spicyLevel: 2,
  },
  {
    id: 3,
    name: 'Vegetable Biryani',
    category: 'Biryani',
    description: 'Fresh seasonal vegetables cooked with aromatic basmati rice',
    price: '$12.99',
    isSpecial: false,
    spicyLevel: 2,
  },
  {
    id: 4,
    name: 'Mutton Biryani',
    category: 'Biryani',
    description: 'Succulent mutton pieces slow-cooked with premium basmati rice',
    price: '$17.99',
    isSpecial: true,
    spicyLevel: 3,
  },
  {
    id: 5,
    name: 'Chicken Tandoori',
    category: 'Starters',
    description: 'Clay oven roasted chicken marinated in yogurt and spices',
    price: '$11.99',
    isSpecial: false,
    spicyLevel: 3,
  },
  {
    id: 6,
    name: 'Paneer Tikka',
    category: 'Starters',
    description: 'Cottage cheese cubes grilled with peppers and onions',
    price: '$9.99',
    isSpecial: false,
    spicyLevel: 2,
  },
  {
    id: 7,
    name: 'Samosa',
    category: 'Starters',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    price: '$5.99',
    isSpecial: false,
    spicyLevel: 1,
  },
  {
    id: 8,
    name: 'Butter Chicken',
    category: 'Curries',
    description: 'Creamy tomato curry with tender chicken pieces',
    price: '$13.99',
    isSpecial: true,
    spicyLevel: 1,
  },
  {
    id: 9,
    name: 'Dal Makhani',
    category: 'Curries',
    description: 'Slow-cooked black lentils in creamy tomato gravy',
    price: '$10.99',
    isSpecial: false,
    spicyLevel: 1,
  },
  {
    id: 10,
    name: 'Masala Chai',
    category: 'Beverages',
    description: 'Traditional Indian spiced tea with aromatic herbs',
    price: '$3.99',
    isSpecial: false,
    spicyLevel: 0,
  },
  {
    id: 11,
    name: 'Mango Lassi',
    category: 'Beverages',
    description: 'Refreshing yogurt drink blended with ripe mangoes',
    price: '$4.99',
    isSpecial: false,
    spicyLevel: 0,
  },
  {
    id: 12,
    name: 'Sweet Lassi',
    category: 'Beverages',
    description: 'Traditional yogurt drink sweetened with sugar and cardamom',
    price: '$3.99',
    isSpecial: false,
    spicyLevel: 0,
  },
]

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="section-padding bg-secondary-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="text-accent-gold" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Our <span className="gold-gradient">Menu</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic dishes, prepared with
            the finest ingredients and traditional recipes passed down through generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-gold text-primary-dark shadow-gold'
                  : 'bg-primary-dark text-text-secondary hover:text-accent-gold border border-accent-gold/30 hover:border-accent-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-primary-dark rounded-2xl overflow-hidden gold-border group cursor-pointer"
            >
              {item.isSpecial && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-accent-gold text-primary-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={14} fill="currentColor" />
                    <span>Special</span>
                  </div>
                </div>
              )}

              <div className="relative h-48 bg-gradient-to-br from-accent-gold/20 to-accent-gold-light/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE2OCwgODMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <ChefHat size={80} className="text-accent-gold/40 group-hover:text-accent-gold/60 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-playfair font-bold text-text-primary group-hover:text-accent-gold transition-colors">
                    {item.name}
                  </h3>
                  {item.spicyLevel > 0 && (
                    <div className="flex space-x-1">
                      {[...Array(item.spicyLevel)].map((_, i) => (
                        <Flame key={i} size={14} className="text-red-500" fill="currentColor" />
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent-gold">{item.price}</span>
                  <button className="bg-accent-gold hover:bg-accent-gold-light text-primary-dark px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-gold">
                    Add
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-accent-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="tel:+1234567890" className="btn-primary inline-block">
            Order Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
