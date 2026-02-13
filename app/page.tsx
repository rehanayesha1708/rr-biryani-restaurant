import Navigation from '@/components/Navigation'
import Hero3D from '@/components/Hero3D'
import MenuSection from '@/components/MenuSection'
import AboutSection from '@/components/AboutSection'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-primary-dark">
        <Navigation />
        <ErrorBoundary fallback={
          <section className="h-screen flex items-center justify-center bg-primary-dark">
            <p className="text-text-secondary">Hero section temporarily unavailable</p>
          </section>
        }>
          <Hero3D />
        </ErrorBoundary>
        <MenuSection />
        <AboutSection />
        <ReviewsCarousel />
        <LocationSection />
        <Footer />
      </main>
    </ErrorBoundary>
  )
}
