# 📊 Visitor Tracking Options

This document outlines three simple methods to add visitor tracking to your website.

---

## ✅ **Option 1: Google Analytics (Most Popular)**

**Pros:** Free, comprehensive analytics, industry standard  
**Setup Time:** 5 minutes  
**Privacy:** Good (GDPR compliant with cookie consent)

### Setup Steps:

1. **Go to [Google Analytics](https://analytics.google.com/)**
2. **Create a property** for your website
3. **Get your Measurement ID** (looks like `G-XXXXXXXXXX`)
4. **Install the package:**
   ```bash
   npm install @next/third-parties
   ```
5. **Add to your root layout** (`app/layout.tsx`):
   ```tsx
   import { GoogleAnalytics } from '@next/third-parties/google'

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

---

## ✅ **Option 2: Vercel Analytics (Easiest)**

**Pros:** Zero config, privacy-friendly, no cookie banners needed  
**Setup Time:** 2 minutes  
**Privacy:** Excellent (GDPR compliant by default)

### Setup Steps:

**You already have this installed!** Just enable it:

1. **In your `app/layout.tsx`, you'll see:**
   ```tsx
   import { Analytics } from "@vercel/analytics/react"
   ```

2. **Make sure it's in your component:**
   ```tsx
   <Analytics />
   ```

3. **Deploy to Vercel** - Analytics will automatically appear in your Vercel dashboard!

**That's it!** No configuration needed. Vercel Analytics tracks:
- Page views
- Unique visitors
- Top pages
- Referrer sources
- Geographic data

---

## ✅ **Option 3: Plausible Analytics (Privacy-First)**

**Pros:** Open source, privacy-focused, no cookies, beautiful UI  
**Setup Time:** 5 minutes  
**Privacy:** Best (GDPR, CCPA compliant out of the box)  
**Cost:** $9/month (self-hosted version is free)

### Setup Steps:

1. **Sign up at [Plausible.io](https://plausible.io/)**
2. **Add your domain**
3. **Install the script:**
   ```tsx
   // app/layout.tsx
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <script 
             defer 
             data-domain="yourdomain.com" 
             src="https://plausible.io/js/script.js"
           />
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

---

## 🎯 **My Recommendation**

**For your use case, I recommend:**

### **Start with Vercel Analytics** (you already have it!)
- It's already installed
- Zero configuration
- Privacy-friendly
- Perfect for getting started

### **Add Google Analytics later if you need:**
- More detailed user behavior tracking
- Conversion tracking
- Event tracking
- Integration with Google Ads

---

## 📈 **Custom Visitor Counter (Optional)**

If you want a visible visitor counter on your site, you can add:

### **Simple Page View Counter**

```tsx
// components/page-view-counter.tsx
"use client"

import { useEffect, useState } from "react"

export function PageViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    // Increment view count
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then(() => fetch(`/api/views/${slug}`))
      .then(res => res.json())
      .then(data => setViews(data.views))
  }, [slug])

  if (!views) return null

  return (
    <div className="flex items-center gap-2 text-sm text-[#666]">
      <Eye className="w-4 h-4" />
      <span>{views.toLocaleString()} views</span>
    </div>
  )
}
```

This would require a simple API route with a database (Redis, Vercel KV, or Supabase).

---

## 🚀 **Quick Win: Enable Vercel Analytics Now**

Since you already have `@vercel/analytics` installed, just make sure your layout includes it and you're done!
