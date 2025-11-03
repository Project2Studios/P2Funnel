# Project 2 Studios - Social Media Marketing Landing Page

A high-converting sales funnel landing page for Project 2 Studios, a social media marketing agency serving Southern New Hampshire businesses.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Optimized for Conversions**: Single-page funnel design with multiple CTAs
- **Performance Optimized**: Fast loading times with optimized images and code
- **SEO Ready**: Meta tags and structured content for search engines
- **Analytics Ready**: Pre-configured for Google Analytics and Facebook Pixel

## 📦 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/project2studios-landing.git
cd project2studios-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to link to your Vercel account

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## ⚙️ Configuration

### Analytics Setup

1. **Google Analytics**: 
   - Get your GA4 Measurement ID from Google Analytics
   - Replace `GA_MEASUREMENT_ID` in `/components/Analytics.tsx`

2. **Facebook Pixel**:
   - Get your Pixel ID from Facebook Business Manager
   - Replace `YOUR_FACEBOOK_PIXEL_ID` in `/components/Analytics.tsx`

### Contact Form Setup

The contact form currently logs submissions to console. To make it functional:

#### Option 1: Email Service (Recommended for Quick Setup)
Use a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com):

1. Sign up for an account
2. Create a form endpoint
3. Update the form submission in `/components/FinalCTA.tsx`:

```typescript
const response = await fetch('YOUR_FORM_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

#### Option 2: API Route (For Custom Backend)
Create an API route in `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Add your email sending logic here
  // (e.g., using SendGrid, Mailgun, or Nodemailer)
  
  return NextResponse.json({ success: true })
}
```

### Customization

#### Update Business Information:
- Phone number: Search for `603-555-0123` and replace
- Email: Search for `info@project2studios.com` and replace
- Address: Update in `/components/Footer.tsx`
- Social media links: Update in `/components/Footer.tsx`

#### Update Colors:
Edit the color scheme in `tailwind.config.ts`:
- `primary`: Main brand color (currently blue)
- `accent`: Call-to-action color (currently amber/orange)

#### Update Content:
- Service packages: Edit `/components/Services.tsx` and `/components/Pricing.tsx`
- Testimonials: Update in `/components/Testimonials.tsx`
- Company description: Edit `/components/About.tsx`

## 📁 Project Structure

```
project2studios-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with main CTA
│   ├── Services.tsx        # Service offerings overview
│   ├── Benefits.tsx        # Value propositions
│   ├── Testimonials.tsx    # Client success stories
│   ├── Pricing.tsx         # Detailed pricing tables
│   ├── About.tsx           # Company information
│   ├── FinalCTA.tsx        # Contact form section
│   ├── Footer.tsx          # Footer with contact info
│   ├── FloatingCTA.tsx     # Mobile floating buttons
│   └── Analytics.tsx       # Tracking scripts
├── public/                 # Static assets (add images here)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.js         # Next.js config
└── README.md             # This file
```

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradients for visual appeal
- **Animated Elements**: Smooth Framer Motion animations
- **Card-Based Layout**: Clean, organized content sections
- **Mobile-First**: Optimized for mobile conversions
- **Accessibility**: Semantic HTML and ARIA labels

## 🔧 Technologies Used

- **[Next.js 14](https://nextjs.org/)**: React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)**: Animation library
- **[React Hook Form](https://react-hook-form.com/)**: Form validation
- **[Lucide Icons](https://lucide.dev/)**: Modern icon library

## 📈 Performance Optimization

- Lazy loading for below-the-fold content
- Optimized images with Next.js Image component
- Minified CSS and JavaScript in production
- Server-side rendering for fast initial load

## 🤝 Support

For questions or issues:
- Email: info@project2studios.com
- Phone: 603-555-0123

## 📄 License

© 2025 Project 2 Studios. All rights reserved.

---

Built with ❤️ for Southern New Hampshire businesses
