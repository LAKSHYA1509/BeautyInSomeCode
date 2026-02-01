"use client"

import React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { User } from "lucide-react"

interface Comment {
  id: string
  name: string
  content: string
  date: Date
}

interface CommentsSectionProps {
  postSlug: string
}

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Sarah Chen",
      content: "Great article! The section on circuit breakers was particularly insightful. I've been implementing similar patterns in our microservices architecture.",
      date: new Date("2024-12-16"),
    },
    {
      id: "2",
      name: "Alex Kumar",
      content: "This is exactly what I needed. The code examples are clear and practical. Would love to see a follow-up on distributed tracing.",
      date: new Date("2024-12-17"),
    },
  ])

  const [formData, setFormData] = useState({
    name: "",
    content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.content.trim()) return

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      content: formData.content,
      date: new Date(),
    }

    setComments([newComment, ...comments])
    setFormData({ name: "", content: "" })
  }

  return (
    <section>
      <h3 className="text-2xl font-light text-[#E8E8E8] mb-8">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="comment-name" className="block text-sm text-[#888888] mb-2">
              Name
            </label>
            <input
              type="text"
              id="comment-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[#1A1A1A]/50 border border-[#1A1A1A] rounded-xl text-[#E8E8E8] placeholder-[#555555] focus:outline-none focus:border-[#8B7EC8]/50 transition-colors duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="comment-content" className="block text-sm text-[#888888] mb-2">
              Comment
            </label>
            <textarea
              id="comment-content"
              rows={4}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 bg-[#1A1A1A]/50 border border-[#1A1A1A] rounded-xl text-[#E8E8E8] placeholder-[#555555] focus:outline-none focus:border-[#8B7EC8]/50 transition-colors duration-300 resize-none"
              placeholder="Share your thoughts..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-[#E8E8E8] text-[#0D0D0D] font-medium rounded-xl hover:bg-[#C9A962] transition-colors duration-300"
          >
            Post Comment
          </motion.button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-[#1A1A1A]/30 border border-[#1A1A1A]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B7EC8]/30 to-[#4A6FA5]/30 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#888888]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-[#E8E8E8]">{comment.name}</span>
                  <span className="text-xs text-[#555555]">
                    {comment.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-[#AAAAAA] leading-relaxed">{comment.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
