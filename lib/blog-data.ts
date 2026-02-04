export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-strategic-sourcing-india",
    title: "The Future of Strategic Sourcing in Indian Manufacturing",
    excerpt: "As Industry 4.0 transforms manufacturing, procurement strategies must evolve. Exploring how AI, automation, and data analytics are reshaping strategic sourcing practices.",
    content: `
# The Future of Strategic Sourcing in Indian Manufacturing

As Industry 4.0 revolutionizes the manufacturing landscape, procurement professionals must adapt their strategies to remain competitive. This transformation is not just about technology—it's about fundamentally reimagining how we approach supplier relationships, cost optimization, and value creation.

## The Digital Transformation Wave

The Indian manufacturing sector is undergoing a massive digital transformation. From automotive to electrical switchgear, companies are investing heavily in automation, IoT, and data analytics.

### Key Drivers of Change

1. **AI-Powered Supplier Selection**: Machine learning algorithms analyze supplier performance data to predict risks and opportunities
2. **Real-Time Market Intelligence**: Digital platforms provide instant visibility into global commodity prices and market trends
3. **Blockchain for Transparency**: Ensuring traceability and authenticity in complex supply chains
4. **Predictive Analytics**: Forecasting demand and supply disruptions before they impact operations

## Strategic Sourcing 2.0

Traditional procurement focused on three pillars: cost, quality, and delivery. The future demands a more holistic approach.

## Conclusion

The future of strategic sourcing is not about replacing human expertise with technology—it's about augmenting our capabilities. Successful procurement leaders will be those who can combine deep industry knowledge with digital tools to create sustainable competitive advantages.
    `,
    date: "2026-01-15",
    readingTime: "8 min read",
    tags: ["Strategic Sourcing", "Industry 4.0", "Digital Transformation", "Supply Chain"]
  },
  {
    slug: "vendor-development-partnerships",
    title: "Vendor Development: Building Long-term Strategic Partnerships",
    excerpt: "In 30 years of procurement, I've learned that the best suppliers are partners, not vendors. Discover strategies for developing world-class supplier relationships.",
    content: `
# Vendor Development: Building Long-term Strategic Partnerships

The most valuable lesson from three decades in procurement is simple yet profound: your suppliers can be your greatest competitive advantage—or your biggest liability. The difference lies in how you develop and nurture these relationships.

## The Paradigm Shift

Traditional procurement often treated vendors as adversaries in a zero-sum game. Modern strategic sourcing recognizes that both parties can win through collaboration and shared value creation.

## Real-World Success Story

One of my most successful vendor development initiatives involved a critical hardware supplier that achieved 99.5% quality through structured development programs, training, and partnership approach.

## Conclusion

Vendor development is not a one-time activity—it's a continuous journey. The suppliers who grow with you become invaluable assets, contributing not just products but ideas, innovations, and competitive advantages.
    `,
    date: "2025-12-10",
    readingTime: "10 min read",
    tags: ["Vendor Development", "Strategic Partnerships", "Supplier Management", "Quality"]
  },
  {
    slug: "cost-optimization-quality",
    title: "Cost Optimization Without Compromising Quality",
    excerpt: "Clean sheet costing and VA/VE methodologies have revolutionized how we approach cost reduction. Learn proven strategies for sustainable savings.",
    content: `
# Cost Optimization Without Compromising Quality

The eternal dilemma in procurement: How do you reduce costs without sacrificing quality? After managing cost optimization initiatives across ₹500+ Cr portfolios, I've learned that the answer lies not in choosing between cost and quality, but in redesigning the equation entirely.

## Clean Sheet Costing: The Foundation

Clean sheet costing is my go-to methodology for understanding true product costs, enabling data-driven negotiations that benefit both parties.

## Value Analysis / Value Engineering (VA/VE)

VA/VE is about questioning every feature, specification, and design choice to eliminate waste while maintaining or improving functionality.

## Conclusion

Cost optimization is both science and art. True cost optimization delivers sustainable savings while maintaining or improving quality, service, and innovation.
    `,
    date: "2025-11-20",
    readingTime: "12 min read",
    tags: ["Cost Reduction", "VA/VE", "Clean Sheet Costing", "TCO", "Procurement"]
  },
  {
    slug: "sap-mm-best-practices",
    title: "SAP MM Best Practices for Multi-Plant Operations",
    excerpt: "Managing procurement across three plants requires robust systems and processes. Discover how SAP MM can transform multi-location procurement efficiency.",
    content: `
# SAP MM Best Practices for Multi-Plant Operations

Managing procurement across multiple manufacturing facilities is complex. When I took charge of procurement for three plants (Gurgaon, Jammu, and Dharuhera), implementing best practices in SAP MM was crucial to achieving efficiency, visibility, and control.

## The Multi-Plant Challenge

Operating across multiple locations creates unique challenges: fragmented data, inconsistent reporting, lack of spend visibility, and difficulty in leveraging collective volume.

## SAP MM: The Unified Platform

SAP MM (Materials Management) provides the foundation for standardized, efficient procurement across all facilities.

## Conclusion

SAP MM is a powerful platform, but technology alone doesn't solve problems—it enables better processes. In managing ₹500+ Cr procurement across three plants, SAP MM has been instrumental in achieving visibility, control, and efficiency.
    `,
    date: "2025-10-15",
    readingTime: "15 min read",
    tags: ["SAP MM", "ERP", "Multi-Plant Operations", "Systems", "Digital"]
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
