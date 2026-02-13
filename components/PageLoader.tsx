'use client'

import { motion } from 'framer-motion'
import { ChefHat } from 'lucide-react'

interface PageLoaderProps {
  isLoading: boolean
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-primary-dark flex items-center justify-center"
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
        className="text-center"
      >
        <div className="w-24 h-24 bg-accent-gold/10 rounded-full flex items-center justify-center mb-4">
          <ChefHat className="text-accent-gold" size={48} />
        </div>
        <p className="text-text-secondary text-lg">Loading...</p>
      </motion.div>
    </motion.div>
  )
}
