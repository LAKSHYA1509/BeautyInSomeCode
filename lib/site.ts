/**
 * Single source of truth for identity + contact details.
 *
 * These were previously scattered as literals across components, which is how
 * `hello@example.com` and `hello@lakshya.dev` (a domain that isn't owned) both
 * ended up shipped in the footer.
 */
export const SITE = {
  name: "Lakshya Bhardwaj",
  email: "lakshyabhardwaj200315@gmail.com",
  phone: "+91 9319704071",
  location: "India",
  github: "https://github.com/LAKSHYA1509",
  linkedin: "https://www.linkedin.com/in/lakshyabhardwaj1509/",
  /**
   * Base for absolute canonical / OG / sitemap URLs.
   *
   * The default is the real domain, not a preview URL. This matters more than
   * it looks: the same site is also reachable on two vercel.app hostnames, and
   * while this fell back to one of those, every canonical tag was telling
   * Google that the throwaway URL was the authoritative copy and
   * lakshyabhardwaj.com was the duplicate — exactly backwards.
   *
   * NEXT_PUBLIC_SITE_URL still overrides, which is what preview deployments
   * would want.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://lakshyabhardwaj.com",
  jobTitle: "Backend & Platform Engineer",
  book: {
    title: "Fcuk Around and Find Out",
    isbn: "978-93-6554-497-8",
    publisher: "OrangeBooks Publication",
    url: "https://www.amazon.in/dp/9365544971",
  },
  worksFor: "Abacus",
  alumniOf: "J.C. Bose University of Science and Technology, YMCA",
} as const

export const EMAIL = SITE.email
