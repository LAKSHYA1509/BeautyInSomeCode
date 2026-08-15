import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Noto_Sans_Devanagari } from 'next/font/google'
import React from "react"
import { SITE } from '@/lib/site'
import { StructuredData } from '@/components/structured-data'
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
  metadataBase: new URL(SITE.url),
  title: 'Lakshya Bhardwaj | Backend & Platform Engineer',
  description:
    'Backend and platform engineer. I own a multi-tenant loyalty platform in production — NestJS, Postgres, Redis, and the CI that ships it.',
  keywords: [
    'Backend Engineer',
    'Platform Engineer',
    'Multi-tenant SaaS',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'React Native',
    'Docker',
    'CI/CD',
    'Spring Boot',
    'Software Engineer',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lakshya Bhardwaj | Backend & Platform Engineer',
    description: 'Systems that ship. Pipelines that hold.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshya Bhardwaj | Backend & Platform Engineer',
    description: 'Systems that ship. Pipelines that hold.',
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
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}

