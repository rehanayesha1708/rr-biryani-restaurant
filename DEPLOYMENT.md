# Deployment Guide - RR Biryani Restaurant Website

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel is the easiest option for Next.js deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel:
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Deploy automatically on every push

**Environment Variables**: Set these in Vercel Dashboard → Settings → Environment Variables (if needed)

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

Build settings in Netlify:
- Build command: `npm run build`
- Publish directory: `.next`

### 3. AWS Amplify

1. Go to AWS Amplify Console
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
4. Deploy

### 4. Traditional Hosting (VPS, Shared Hosting)

For traditional servers:

```bash
# Build the project
npm run build

# Start production server
npm start
```

Or use PM2 for process management:

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "rr-biryani" -- start

# Auto-restart on server reboot
pm2 startup
pm2 save
```

## Customization Guide

### 1. Update Contact Information

**File: `app/layout.tsx`**
```typescript
// Update phone number
telephone: '+1234567890',

// Update address
address: {
  streetAddress: '123 Main Street',
  addressLocality: 'City',
  addressRegion: 'State',
  postalCode: '12345',
  addressCountry: 'US',
},

// Update coordinates
geo: {
  latitude: 40.7128,
  longitude: -74.0060,
},
```

**File: `components/LocationSection.tsx`**
```typescript
const contactInfo = [
  {
    title: 'Phone',
    detail: '+1 (234) 567-8900',
    link: 'tel:+12345678900',
  },
  // Update WhatsApp, Email, Address...
]
```

**File: `components/Map.tsx`**
```typescript
// Update map coordinates
const position: [number, number] = [40.7128, -74.0060]
```

### 2. Update Menu Items

**File: `components/MenuSection.tsx`**

Add or modify menu items:
```typescript
const menuItems = [
  {
    id: 1,
    name: 'Your Dish Name',
    category: 'Biryani', // or 'Starters', 'Curries', 'Beverages'
    description: 'Detailed description of the dish',
    price: '$15.99',
    isSpecial: true, // Shows "Special" badge
    spicyLevel: 3, // 0-3 (0 = no spice indicator)
  },
  // Add more items...
]
```

To add a new category:
```typescript
const categories = ['All', 'Biryani', 'Starters', 'Curries', 'Beverages', 'Your New Category']
```

### 3. Update Reviews

**File: `components/ReviewsCarousel.tsx`**

Add or edit customer reviews:
```typescript
const reviews = [
  {
    id: 1,
    name: 'Customer Name',
    location: 'City, State',
    rating: 5,
    date: 'Month Day, Year',
    review: 'Customer review text here...',
    avatar: 'CN', // Initials for avatar
  },
  // Add more reviews...
]
```

### 4. Customize Colors

**File: `tailwind.config.js`**
```javascript
colors: {
  'primary-dark': '#0a0a0a',      // Main dark background
  'secondary-dark': '#1a1a1a',    // Secondary dark background
  'accent-gold': '#d4a853',       // Main golden accent
  'accent-gold-light': '#f4d793', // Light golden accent
  'text-primary': '#ffffff',      // Main text color
  'text-secondary': '#a3a3a3',    // Secondary text color
}
```

### 5. Update Social Media Links

**File: `components/Footer.tsx`**
```typescript
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/your-page', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/your-account', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/your-account', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/your-channel', label: 'Youtube' },
]
```

### 6. Update Restaurant Information

**File: `components/AboutSection.tsx`**

Update story, achievements, and ratings:
```typescript
const achievements = [
  {
    icon: Award,
    title: 'Your Achievement',
    description: 'Achievement description',
  },
  // Modify or add more...
]

const ratings = [
  { platform: 'Google', rating: 4.9, reviews: 2450 },
  // Update with your actual ratings...
]
```

### 7. Update Opening Hours

**File: `components/LocationSection.tsx`**
```typescript
const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
  { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 10:00 PM' },
]
```

### 8. SEO Optimization

**File: `app/layout.tsx`**

Update meta tags for better SEO:
```typescript
export const metadata: Metadata = {
  title: 'Your Restaurant Name - Tagline',
  description: 'Your restaurant description...',
  keywords: 'your, relevant, keywords',
  // Update other meta tags...
}
```

### 9. Add Custom Domain

**Vercel:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### 10. Performance Optimization

The website is already optimized with:
- ✅ Code splitting and lazy loading
- ✅ Image optimization (Next.js Image component)
- ✅ Font optimization
- ✅ CSS purging (Tailwind)
- ✅ Server-side rendering

For further optimization:
- Use a CDN for static assets
- Enable Gzip/Brotli compression on your server
- Implement caching headers
- Monitor with Lighthouse/PageSpeed Insights

## Environment Variables (Optional)

Create `.env.local` for sensitive data:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Maps API (if using Google Maps instead of Leaflet)
NEXT_PUBLIC_GOOGLE_MAPS_API=your-api-key

# Contact form API (if adding contact form)
CONTACT_API_ENDPOINT=your-endpoint
```

## SSL Certificate

Most hosting providers (Vercel, Netlify, AWS) provide free SSL certificates automatically.

For custom servers:
- Use Let's Encrypt (free)
- Install using Certbot: https://certbot.eff.org/

## Monitoring & Analytics

Add Google Analytics in `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## Troubleshooting

### Build Errors

**Issue**: Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Build timeout on hosting platform
- Increase build timeout in platform settings
- Optimize build by removing unused dependencies

### Performance Issues

**Issue**: Slow 3D rendering
- The 3D bowl uses procedural generation (no external model needed)
- Reduce particle count in `Hero3D.tsx` if needed

**Issue**: Large bundle size
- Check bundle analyzer: `npm run build && npm run analyze`
- Remove unused imports
- Consider dynamic imports for heavy components

## Support

For issues or questions:
- Check documentation: README.md
- Review component files for inline comments
- Contact: info@rrbiryani.com

---

**Last Updated**: February 2024
