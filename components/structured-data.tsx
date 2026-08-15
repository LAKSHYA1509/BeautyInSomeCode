import { SITE } from "@/lib/site"

/**
 * JSON-LD structured data.
 *
 * This is the part of SEO that plain meta tags can't do: it tells Google that
 * a specific *person* exists, what they do, where else they are on the web,
 * and that they wrote a specific book with a specific ISBN. It's what makes
 * entity-level results (knowledge panels, author attribution, book cards)
 * possible rather than just a blue link.
 *
 * Server component — this renders into the initial HTML, which is the only
 * place crawlers reliably read it.
 */

const person = {
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: SITE.jobTitle,
  // sameAs is how Google reconciles these profiles into one entity.
  sameAs: [SITE.github, SITE.linkedin, SITE.book.url],
  worksFor: {
    "@type": "Organization",
    name: SITE.worksFor,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: SITE.alumniOf,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Backend Engineering",
    "Multi-tenant SaaS",
    "NestJS",
    "PostgreSQL",
    "Distributed Systems",
    "React Native",
    "CI/CD",
    "Spring Boot",
  ],
}

const book = {
  "@type": "Book",
  "@id": `${SITE.url}/#book`,
  name: SITE.book.title,
  author: { "@id": `${SITE.url}/#person` },
  isbn: SITE.book.isbn,
  bookFormat: "https://schema.org/Paperback",
  inLanguage: "en",
  url: SITE.book.url,
  publisher: {
    "@type": "Organization",
    name: SITE.book.publisher,
  },
}

const website = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: `${SITE.name} — ${SITE.jobTitle}`,
  inLanguage: "en",
  publisher: { "@id": `${SITE.url}/#person` },
}

const graph = {
  "@context": "https://schema.org",
  "@graph": [person, book, website],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Content is a static literal defined above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
