import { getAllBlogPosts, getBlogPost } from "@/lib/blog-data"
import { SITE } from "@/lib/site"
import type { Metadata } from "next"
import { BlogPostClient } from "./blog-post-client"

// Every post previously inherited the homepage's title and description, so all
// three shared one set of tags and none could rank on their own terms.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: `Post not found | ${SITE.name}` }
  }

  const url = `${SITE.url}/blogs/${slug}`

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: SITE.name, url: SITE.url }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: SITE.name,
      publishedTime: new Date(post.date).toISOString(),
      authors: [SITE.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const post = getBlogPost(resolvedParams.slug)

  return (
    <>
      {/* Article schema so the post can carry author attribution and a date
          in search results rather than appearing as an anonymous page. */}
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: new Date(post.date).toISOString(),
              keywords: post.tags.join(", "),
              inLanguage: "en",
              mainEntityOfPage: `${SITE.url}/blogs/${post.slug}`,
              author: { "@id": `${SITE.url}/#person` },
              publisher: { "@id": `${SITE.url}/#person` },
            }),
          }}
        />
      )}
      <BlogPostClient slug={resolvedParams.slug} />
    </>
  )
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
