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
  title: 'Lakshya Bhardwaj | Full Stack Developer',
  description: 'Building systems that scale. Ideas that last. Java Full Stack Developer specializing in backend architecture & scalable systems.',
  keywords: ['Full Stack Developer', 'Java Developer', 'Backend Architecture', 'Scalable Systems', 'Software Engineer'],
  authors: [{ name: 'Lakshya Bhardwaj' }],
  openGraph: {
    title: 'Lakshya Bhardwaj | Full Stack Developer',
    description: 'Building systems that scale. Ideas that last.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
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
      <body className={`${inter.variable} ${geistMono.variable} ${notoSansDevanagari.variable} font-sans antialiased bg-[#0D0D0D] dark:bg-[#0D0D0D] text-[#E8E8E8] transition-colors duration-500 overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

