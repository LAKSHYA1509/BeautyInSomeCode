import { getAllBlogPosts } from "@/lib/blog-data"
import { BlogPostClient } from "./blog-post-client"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  return <BlogPostClient slug={resolvedParams.slug} />
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
