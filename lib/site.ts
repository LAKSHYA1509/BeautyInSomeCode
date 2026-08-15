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
  /** Used for absolute OG/canonical URLs. Update when the custom domain lands. */
  url: "https://beauty-in-some-code-dr7y.vercel.app",
} as const

export const EMAIL = SITE.email
