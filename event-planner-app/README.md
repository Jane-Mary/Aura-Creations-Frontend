# EventPro - Event Planning Website

A modern, responsive event planning website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with beautiful UI components
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Interactive Components**: 
  - Sticky navigation with mobile menu
  - Hero section with full-screen background
  - Interactive carousel for featured planners
  - Hover effects and smooth transitions
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Fast**: Built with Vite for lightning-fast development and builds

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component with mobile menu
│   ├── HeroSection.jsx     # Hero section with CTA
│   ├── FeaturedPlanners.jsx # Carousel/grid of event planners
│   └── Footer.jsx          # Footer with links and contact info
├── App.jsx                 # Main app component
├── index.css              # Tailwind CSS imports and custom styles
└── main.jsx               # React app entry point
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Components Overview

### Navbar
- Responsive navigation with logo
- Desktop and mobile menu versions
- Smooth hover transitions
- Sticky positioning

### Hero Section
- Full-screen background image with overlay
- Compelling call-to-action text
- Primary CTA button
- Animated scroll indicator

### Featured Planners
- Grid layout on desktop (3 columns)
- Carousel on mobile/tablet
- Interactive planner cards with:
  - Professional photos
  - Star ratings
  - Event counts
  - Hover effects

### Footer
- Company information
- Quick links
- Contact information with icons
- Social media links
- Legal links

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: Pink/rose theme
- Secondary: Blue theme

### Typography
- Font: Inter (loaded from Google Fonts)
- Responsive text sizing
- Proper line heights and spacing

### Images
Currently using Unsplash images for:
- Hero background (event/party scene)
- Planner profile photos

Replace with your own images by updating the image URLs in the components.

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
