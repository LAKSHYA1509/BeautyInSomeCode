import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Noto_Sans_Devanagari } from 'next/font/google'
import React from "react"
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
});
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: '--font-devanagari',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Mohan Kumar Bhardwaj | Procurement Leader',
  description: 'GM / DGM – Purchase & Strategic Sourcing with 30+ years of experience in Procurement, Supply Chain, and Vendor Development.',
  keywords: ['Procurement', 'Supply Chain', 'Strategic Sourcing', 'Vendor Development', 'Purchase Manager', 'Mohan Kumar Bhardwaj'],
  authors: [{ name: 'Mohan Kumar Bhardwaj' }],
  openGraph: {
    title: 'Mohan Kumar Bhardwaj | Procurement Leader',
    description: 'GM / DGM – Purchase & Strategic Sourcing with 30+ years of experience.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} ${notoSansDevanagari.variable} font-sans antialiased bg-background text-foreground transition-colors duration-500 overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
