// components/ui/code-block.tsx
"use client"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodeBlock = ({ language, value }: { language: string; value: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#0A0A0A] my-8 shadow-2xl">
      {/* Mac-like Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-[#222]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-xs text-[#666] font-mono uppercase">{language || "text"}</span>
        <button
          onClick={handleCopy}
          className="text-[#666] hover:text-[#E8E8E8] transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Code Content */}
      <div className="p-0 text-sm">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: "1.5rem", background: "transparent", fontSize: "0.9rem" }}
          showLineNumbers={true}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}