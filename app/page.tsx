import Navigation from '@/components/Navigation'
import Hero3D from '@/components/Hero3D'
import MenuSection from '@/components/MenuSection'
import AboutSection from '@/components/AboutSection'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark">
      <Navigation />
      <Hero3D />
      <MenuSection />
      <AboutSection />
      <ReviewsCarousel />
      <LocationSection />
      <Footer />
    </main>
  )
}
