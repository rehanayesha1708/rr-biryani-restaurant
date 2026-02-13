'use client'

import { motion } from 'framer-motion'
import { ChefHat } from 'lucide-react'

interface SceneLoaderProps {
  message?: string
}

export default function SceneLoader({ message = 'Loading 3D Experience...' }: SceneLoaderProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-primary-dark">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="flex items-center justify-center mb-6"
        >
          <div className="w-20 h-20 bg-accent-gold/10 rounded-full flex items-center justify-center">
            <ChefHat className="text-accent-gold" size={40} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-text-secondary text-lg"
        >
          {message}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="mt-6 h-1 bg-secondary-dark rounded-full overflow-hidden max-w-[200px] mx-auto"
        >
          <div className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-light" />
        </motion.div>
      </motion.div>
    </div>
  )
}
