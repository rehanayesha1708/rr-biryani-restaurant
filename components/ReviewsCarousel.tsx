'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, NY',
    rating: 5,
    date: 'January 15, 2024',
    review:
      'Absolutely phenomenal! The Hyderabadi Dum Biryani is the best I&apos;ve had outside of India. The flavors are authentic, the portions are generous, and the service is impeccable. This is my go-to spot for special occasions.',
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    date: 'January 10, 2024',
    review:
      'I&apos;ve been coming here for 3 years and the quality never disappoints. The Butter Chicken is creamy and perfectly spiced. The ambiance is elegant yet comfortable. Highly recommend the chef&apos;s special!',
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Priya Patel',
    location: 'Chicago, IL',
    rating: 5,
    date: 'January 8, 2024',
    review:
      'As someone from India, I can confidently say this restaurant serves authentic dishes that remind me of home. The attention to detail in every dish is remarkable. The staff is warm and welcoming.',
    avatar: 'PP',
  },
  {
    id: 4,
    name: 'David Martinez',
    location: 'Los Angeles, CA',
    rating: 5,
    date: 'January 5, 2024',
    review:
      'Outstanding food and service! The Chicken Tandoori was perfectly charred and juicy. The naan bread was fresh and warm. This place has become a family favorite. We celebrate all our special moments here.',
    avatar: 'DM',
  },
  {
    id: 5,
    name: 'Emily Thompson',
    location: 'Boston, MA',
    rating: 5,
    date: 'January 3, 2024',
    review:
      'The best Indian restaurant in the area, hands down! The vegetable biryani is packed with flavor and the paneer tikka is divine. Great value for money and the portions are huge. Will definitely return!',
    avatar: 'ET',
  },
  {
    id: 6,
    name: 'Raj Sharma',
    location: 'Seattle, WA',
    rating: 5,
    date: 'December 28, 2023',
    review:
      'Exceptional quality and taste! The mutton biryani is cooked to perfection. The meat is tender and the rice is perfectly spiced. The ambiance and presentation make dining here a royal experience.',
    avatar: 'RS',
  },
]

export default function ReviewsCarousel() {
  const swiperRef = useRef<SwiperType>()
  const [isClient, setIsClient] = useState(false)
  const [swiperError, setSwiperError] = useState(false)

  useEffect(() => {
    try {
      setIsClient(true)
    } catch (error) {
      console.error('Failed to initialize Swiper:', error)
      setSwiperError(true)
    }
  }, [])

  return (
    <section id="reviews" className="section-padding bg-secondary-dark overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="text-accent-gold" size={40} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            What Our <span className="gold-gradient">Customers</span> Say
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from our satisfied customers who have
            experienced the royal treatment at RR Biryani.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {swiperError ? (
            <div className="text-center py-12">
              <AlertTriangle className="text-accent-gold mx-auto mb-4" size={48} />
              <p className="text-text-secondary mb-6">Reviews carousel temporarily unavailable</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.slice(0, 3).map((review) => (
                  <div key={review.id} className="bg-primary-dark rounded-2xl p-8 gold-border h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-accent-gold rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-dark">
                            {review.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {review.name}
                          </h4>
                          <p className="text-text-secondary text-sm">{review.location}</p>
                        </div>
                      </div>
                      <Quote className="text-accent-gold/30" size={32} />
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-accent-gold"
                          size={18}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4 flex-grow">
                      {review.review}
                    </p>

                    <p className="text-text-secondary text-sm">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : isClient ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-accent-gold/30',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-accent-gold',
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              className="pb-12"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-primary-dark rounded-2xl p-8 gold-border h-full flex flex-col hover:shadow-gold transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-accent-gold rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-dark">
                            {review.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {review.name}
                          </h4>
                          <p className="text-text-secondary text-sm">{review.location}</p>
                        </div>
                      </div>
                      <Quote className="text-accent-gold/30" size={32} />
                    </div>

                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-accent-gold"
                          size={18}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-4 flex-grow">
                      {review.review}
                    </p>

                    <p className="text-text-secondary text-sm">{review.date}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12">
              <div className="animate-pulse">
                <div className="h-48 bg-secondary-dark rounded-2xl mb-4"></div>
                <div className="h-8 bg-secondary-dark rounded w-1/4 mx-auto mb-4"></div>
                <div className="h-4 bg-secondary-dark rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          )}

          {isClient && !swiperError && (
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 bg-accent-gold/10 hover:bg-accent-gold hover:text-primary-dark text-accent-gold rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 bg-accent-gold/10 hover:bg-accent-gold hover:text-primary-dark text-accent-gold rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-primary-dark rounded-2xl p-8 gold-border">
            <div className="flex items-center justify-center space-x-8">
              <div>
                <p className="text-5xl font-bold text-accent-gold mb-2">10k+</p>
                <p className="text-text-secondary">Happy Customers</p>
              </div>
              <div className="h-16 w-px bg-accent-gold/30"></div>
              <div>
                <p className="text-5xl font-bold text-accent-gold mb-2">4.9</p>
                <p className="text-text-secondary">Average Rating</p>
              </div>
              <div className="h-16 w-px bg-accent-gold/30"></div>
              <div>
                <p className="text-5xl font-bold text-accent-gold mb-2">9k+</p>
                <p className="text-text-secondary">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
