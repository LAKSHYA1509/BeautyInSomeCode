"use client"

import { getAllBlogPosts } from "@/lib/blog-data"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function BlogSection() {
    const posts = getAllBlogPosts().slice(0, 3)

    return (
        <section id="blog" className="py-32 relative overflow-hidden bg-[#0D0D0D]">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <span className="inline-block text-sm text-[#C9A962] tracking-[0.2em] uppercase mb-4">
                            Writings
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8E8E8] tracking-tight">
                            Latest <span className="text-[#C9A962] italic">Insights</span>
                        </h2>
                    </div>

                    <Link
                        href="/blogs"
                        className="group flex items-center gap-2 text-[#888888] hover:text-[#E8E8E8] transition-colors duration-300 text-sm tracking-widest uppercase"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/blogs/${post.slug}`} className="group block h-full">
                                <div className="relative p-8 rounded-2xl border border-[#1A1A1A] hover:border-[#2A2A2A] bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40 transition-all duration-500 h-full flex flex-col">
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B7EC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 space-y-4 flex-grow">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-[10px] text-[#888888] bg-[#1A1A1A] rounded-full border border-[#2A2A2A] uppercase tracking-wider"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-medium text-[#E8E8E8] group-hover:text-[#C9A962] transition-colors duration-300 leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-[#888888] text-sm leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-8 mt-auto flex items-center gap-6 text-xs text-[#555555]">
                                        <span className="flex items-center gap-2 font-mono">
                                            <Calendar className="w-3 h-3 text-[#C9A962]" />
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                            })}
                                        </span>
                                        <span className="flex items-center gap-2 font-mono">
                                            <Clock className="w-3 h-3 text-[#C9A962]" />
                                            {post.readingTime}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B7EC8]/3 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C9A962]/3 rounded-full blur-[120px] -z-10" />
        </section>
    )
}
