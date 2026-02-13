import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rrbiryani.com'),
  title: 'RR Biryani & Family Restaurant - Authentic Indian Cuisine',
  description: 'Experience the finest authentic Indian biryani and family dishes. Premium dining with traditional flavors and modern ambiance. Order online or visit us today!',
  keywords: 'biryani, Indian restaurant, family restaurant, authentic cuisine, hyderabadi biryani, Indian food, order online, best biryani',
  authors: [{ name: 'RR Biryani Restaurant' }],
  openGraph: {
    title: 'RR Biryani & Family Restaurant - Authentic Indian Cuisine',
    description: 'Experience the finest authentic Indian biryani and family dishes. Premium dining with traditional flavors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RR Biryani Restaurant',
    url: 'https://rrbiryani.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RR Biryani & Family Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RR Biryani & Family Restaurant',
    description: 'Experience the finest authentic Indian biryani and family dishes.',
    images: ['/og-image.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rrbiryani.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4a853',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'RR Biryani & Family Restaurant',
              image: '/og-image.jpg',
              '@id': '',
              url: '',
              telephone: '+1234567890',
              priceRange: '$$',
              servesCuisine: 'Indian',
              acceptsReservations: 'true',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Main Street',
                addressLocality: 'City',
                addressRegion: 'State',
                postalCode: '12345',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.7128,
                longitude: -74.0060,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                  opens: '11:00',
                  closes: '22:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
