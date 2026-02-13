# RR Biryani & Family Restaurant Website

A premium 3D animated website for RR Biryani & Family Restaurant featuring dark theme, golden accents, interactive 3D elements, and modern design.

## Features

- ✨ **3D Animated Hero Section** - Interactive 3D biryani bowl with floating particles and smooth animations
- 🍽️ **Interactive Menu Cards** - Filterable menu with hover effects and golden glow accents
- ⭐ **Customer Ratings Display** - Showcase ratings from multiple platforms
- 💬 **Reviews Carousel** - Auto-playing testimonials carousel with manual controls
- 📍 **Location with Interactive Map** - Leaflet map integration with contact buttons
- 📱 **Mobile Optimized** - Fully responsive design for all devices
- 🎨 **Dark Theme with Golden Accents** - Premium color scheme
- ⚡ **Performance Optimized** - Fast loading with lazy loading and code splitting
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Carousel**: Swiper.js
- **Maps**: React Leaflet
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and SEO
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and animations
│   └── swiper-custom.css   # Custom carousel styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero3D.tsx          # 3D animated hero section
│   ├── MenuSection.tsx     # Interactive menu with filters
│   ├── AboutSection.tsx    # About with ratings display
│   ├── ReviewsCarousel.tsx # Customer reviews carousel
│   ├── LocationSection.tsx # Location with map and contact
│   ├── Map.tsx             # Leaflet map component
│   └── Footer.tsx          # Footer with links and info
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## Customization

### Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  'primary-dark': '#0a0a0a',      // Main background
  'secondary-dark': '#1a1a1a',    // Secondary background
  'accent-gold': '#d4a853',       // Primary accent
  'accent-gold-light': '#f4d793', // Light accent
  'text-primary': '#ffffff',      // Main text
  'text-secondary': '#a3a3a3',    // Secondary text
}
```

### Contact Information

Update contact details in:
- `components/LocationSection.tsx` - Phone, email, address
- `components/Footer.tsx` - Footer contact info
- `app/layout.tsx` - Structured data for SEO

### Menu Items

Edit menu items in `components/MenuSection.tsx`:

```typescript
const menuItems = [
  {
    id: 1,
    name: 'Your Dish Name',
    category: 'Category',
    description: 'Description',
    price: '$XX.XX',
    isSpecial: true/false,
    spicyLevel: 0-3,
  },
  // Add more items...
]
```

### Location & Map

Update coordinates in `components/Map.tsx`:

```typescript
const position: [number, number] = [latitude, longitude]
```

## Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Dynamic imports for heavy components (3D, Map)
- **Image Optimization**: Next.js Image component with AVIF/WebP
- **Font Optimization**: Google Fonts with display=swap
- **CSS Optimization**: Tailwind CSS purging unused styles

## SEO Features

- **Meta Tags**: Comprehensive metadata for social sharing
- **Open Graph**: OG tags for Facebook, Twitter
- **Structured Data**: JSON-LD for restaurant information
- **Semantic HTML**: Proper heading hierarchy
- **Responsive Images**: Alt text and optimized formats

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## License

Copyright © 2024 RR Biryani & Family Restaurant. All rights reserved.

## Support

For support, email info@rrbiryani.com or call +1 (234) 567-8900.
