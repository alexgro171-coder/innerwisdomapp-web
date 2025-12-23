# Inner Wisdom - Marketing Website

Marketing website for the Inner Wisdom mobile app (iOS/Android). Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Static Export**: Can be deployed to any static hosting (Vercel, Netlify, GitHub Pages)
- **SEO Optimized**: Proper metadata, Open Graph, semantic HTML
- **Mobile-First**: Responsive design that works on all devices
- **Fast**: No client-side JavaScript required for most pages
- **Accessible**: Semantic HTML structure

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Main marketing page with all sections |
| Privacy Policy | `/privacy` | Full privacy policy for App Store compliance |
| Terms of Service | `/terms` | Terms of service for App Store compliance |
| Support | `/support` | Contact info, FAQ, and help resources |

## 🎨 Design System

Colors are based on the mobile app's theme (`app_theme.dart`):

- **Primary (Cosmic)**: `#1a1a2e` - Deep cosmic purple/blue
- **Accent (Gold)**: `#d4af37` - Celestial gold
- **Secondary (Mystic)**: `#6c5ce7` - Mystic purple
- **Background**: `#0a0a14` - Deep space black
- **Text Primary**: `#F5F5F5` - Light gray

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# The static files will be in the `out` folder
```

### Local Production Preview

```bash
# After building, you can preview with any static server
npx serve out
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Landing page
│   ├── privacy/
│   │   └── page.tsx       # Privacy Policy
│   ├── terms/
│   │   └── page.tsx       # Terms of Service
│   └── support/
│       └── page.tsx       # Support/Contact
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Section.tsx        # Section wrapper components
│   ├── PricingCards.tsx   # Pricing comparison cards
│   ├── FAQ.tsx            # FAQ accordion
│   └── index.ts           # Component exports
```

## 🔧 Configuration

### Tailwind (`tailwind.config.ts`)

Custom colors, fonts, and animations are defined to match the mobile app's design system.

### Next.js (`next.config.ts`)

Configured for static export with `output: "export"`.

## 📱 App Store Requirements

This website satisfies Apple's App Store requirements for:

- ✅ Privacy Policy (accessible URL)
- ✅ Terms of Service
- ✅ Support/Contact page with email
- ✅ App description and features

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Hosting (Netlify, GitHub Pages, etc.)

1. Run `npm run build`
2. Upload the `out` folder to your hosting provider

### Custom Domain

Update the URLs in:
- `src/app/layout.tsx` (metadata URLs)
- Individual page metadata

## 📝 Customization

### Update Company Info

Search for "Your Company Name" and "support@innerwisdomapp.com" to replace with your actual company details.

### Update Pricing

Edit `src/components/PricingCards.tsx` to change pricing tiers.

### Update Content

All page content is directly in the page files for easy editing.

## 📄 License

Private - All rights reserved.

---

Built with ❤️ for Inner Wisdom App
