import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Media Marketing for NH Businesses | Project 2 Studios',
  description: 'Affordable social media management and advertising packages for Southern NH small businesses. Grow your audience and get more customers with Project 2 Studios.',
  keywords: 'social media marketing, NH business, Manchester social media, local marketing, Facebook ads, Instagram marketing',
  openGraph: {
    title: 'Grow Your Business with Social Media | Project 2 Studios',
    description: 'Proven social media strategies for Southern NH businesses. Organic growth, paid ads, or both - we handle it all.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Project 2 Studios',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
