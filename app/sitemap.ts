import { getAllBlogPosts } from "@/lib/blog-data"
import { SITE } from "@/lib/site"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts()

  // Newest post date stands in as the "last meaningful change" for the index
  // and blog listing, so those don't advertise a stale lastModified.
  const latestPost = posts
    .map((post) => new Date(post.date))
    .sort((a, b) => b.getTime() - a.getTime())[0]

  return [
    {
      url: SITE.url,
      lastModified: latestPost ?? new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/blogs`,
      lastModified: latestPost ?? new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE.url}/blogs/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
