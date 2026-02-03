"use client"

import { BLOG_POSTS } from "@/lib/content"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function InsightsBlog() {
    return (
        <section id="blog" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6"
                >
                    <div>
                        <span className="inline-block text-xs sm:text-sm text-accent tracking-[0.2em] uppercase mb-3 sm:mb-4">
                            Thought Leadership
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                            Industry <span className="text-accent italic">Insights</span>
                        </h2>
                    </div>

                    <Link
                        href="#"
                        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-xs sm:text-sm tracking-widest uppercase"
                    >
                        View all articles
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href="#" className="group block h-full">
                                <div className="relative p-6 rounded-2xl border border-border hover:border-accent/40 bg-card hover:bg-accent/5 transition-all duration-500 h-full flex flex-col overflow-hidden">

                                    <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                                    </div>

                                    <div className="relative z-10 space-y-3 flex-grow">
                                        <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-6 mt-auto flex items-center gap-4 text-xs text-muted-foreground/80">
                                        <span className="flex items-center gap-1.5 font-mono">
                                            <Calendar className="w-3 h-3 text-accent" />
                                            <span>
                                                {post.date}
                                            </span>
                                        </span>
                                        <span className="flex items-center gap-1.5 font-mono">
                                            <Clock className="w-3 h-3 text-accent" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
