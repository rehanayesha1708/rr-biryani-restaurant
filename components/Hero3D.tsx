'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, AlertTriangle } from 'lucide-react'
import SceneLoader from './SceneLoader'
import { ErrorBoundary } from './ErrorBoundary'

function BiryaniBowl() {
  const groupRef = useRef<THREE.Group>(null)
  const riceRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f4d793" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4a853" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#f4d793"
        castShadow
      />

      <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 1.5, 1.5, 32]} />
        <meshStandardMaterial
          color="#8B4513"
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      <mesh ref={riceRef} position={[0, 0.3, 0]} castShadow>
        <sphereGeometry args={[1.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#f5e6d3"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2
        const radius = 1.2 + Math.random() * 0.4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <mesh key={i} position={[x, 0.5 + Math.random() * 0.3, z]} castShadow>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color={Math.random() > 0.5 ? '#d4a853' : '#8B4513'}
            />
          </mesh>
        )
      })}

      {[...Array(8)].map((_, i) => (
        <mesh
          key={`garnish-${i}`}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.3,
            0.8,
            Math.sin((i / 8) * Math.PI * 2) * 1.3,
          ]}
          castShadow
        >
          <boxGeometry args={[0.1, 0.3, 0.05]} />
          <meshStandardMaterial color="#90EE90" />
        </mesh>
      ))}

      <mesh position={[0.8, 0.6, 0.8]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FF4500" />
      </mesh>

      <mesh position={[-0.8, 0.6, -0.6]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#d4a853" transparent opacity={0.6} />
    </points>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <BiryaniBowl />
      <Particles />
    </>
  )
}

function SceneError() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-primary-dark">
      <div className="text-center px-4 max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="text-red-500" size={40} />
          </div>
        </div>
        <h3 className="text-xl font-playfair font-bold text-text-primary mb-2">
          3D Scene Failed to Load
        </h3>
        <p className="text-text-secondary mb-6">
          Sorry, we couldn&apos;t load the 3D experience. Please refresh the page to try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}

export default function Hero3D() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToMenu = () => {
    const menuSection = document.querySelector('#menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isClient) {
    return (
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-primary-dark via-secondary-dark to-primary-dark"
      >
        <SceneLoader message="Preparing your experience..." />
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-primary-dark via-secondary-dark to-primary-dark"
    >
      <div className="absolute inset-0 z-0">
        <ErrorBoundary fallback={<SceneError />}>
          <Canvas
            shadows
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={<SceneLoader />}>
              <Scene />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-accent-gold animate-pulse" size={32} />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-text-primary mb-4">
              Royal Biryani
              <span className="block text-accent-gold gold-gradient mt-2">
                Experience
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Indulge in authentic flavors crafted with tradition, served with love.
              Where every grain tells a story of excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={scrollToMenu} className="btn-primary">
                Explore Menu
              </button>
              <a href="tel:+1234567890" className="btn-secondary">
                Order Now
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-text-secondary">
              <div>
                <p className="text-3xl font-bold text-accent-gold">4.9</p>
                <p className="text-sm">Rating</p>
              </div>
              <div className="h-12 w-px bg-accent-gold/30"></div>
              <div>
                <p className="text-3xl font-bold text-accent-gold">10k+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div className="h-12 w-px bg-accent-gold/30"></div>
              <div>
                <p className="text-3xl font-bold text-accent-gold">15+</p>
                <p className="text-sm">Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToMenu}
          className="flex flex-col items-center text-accent-gold hover:text-accent-gold-light transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
