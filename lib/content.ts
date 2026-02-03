import {
  Target, Users, TrendingDown, Globe, FileText, Package,
  BarChart, Shield, Users2, Laptop, Award, CheckCircle,
  Briefcase, GraduationCap
} from "lucide-react"

export const CAREER_TIMELINE = [
  {
    period: "2015-Present",
    role: "Deputy General Manager",
    company: "Dorset Industries",
    description: "Leading procurement for 3 plants (Gurgaon, Jammu, Dharuhera) managing ₹500+ Cr spend.",
    achievements: [
      "Manage ₹500 Cr+ annual procurement",
      "Lead 18-member team",
      "Global sourcing from China & Europe"
    ]
  },
  {
    period: "2004-2014",
    role: "Head of Purchase",
    company: "Havells India Limited",
    description: "Managed procurement for Switchgear division, implementing strategic vendor development.",
    achievements: [
      "Strategic sourcing for electrical components",
      "Clean sheet costing implementation",
      "Vendor consolidation"
    ]
  },
  {
    period: "2002-2004",
    role: "Deputy Manager",
    company: "Imperial Auto",
    description: "Focused on automotive component sourcing and supply chain efficiency.",
    achievements: [
      "Automotive OEM coordination",
      "JIT delivery implementation",
      "Cost reduction initiatives"
    ]
  },
  {
    period: "1997-2002",
    role: "Assistant Manager",
    company: "Arkay Industries",
    description: "Led ISO implementation and quality assurance in procurement processes.",
    achievements: [
      "ISO 9000 implementation",
      "Quality system development",
      "Supplier audits"
    ]
  },
  {
    period: "1995-1997",
    role: "Quality Assurance Engineer",
    company: "Flex Engineering",
    description: "Started career in quality assurance, building foundation for quality-focused procurement.",
    achievements: [
      "Quality control standards",
      "Process inspection",
      "Defect reduction"
    ]
  }
]

export const KEY_ACHIEVEMENTS = [
  {
    title: "₹500+ Cr Annual Procurement",
    description: "Led procurement across 3 plants with 18-member team, delivering cost, delivery, and quality KPIs.",
    impact: "Managed ₹500 Cr+ Spend",
    icon: Users2
  },
  {
    title: "Global Sourcing Expansion",
    description: "Managed international procurement ensuring compliance, technical qualification, and supply-risk optimization.",
    impact: "₹150+ Cr Import Sourcing",
    icon: Globe
  },
  {
    title: "Inventory Optimization",
    description: "Strategic inventory reduction and payment term restructuring to improve cash flow.",
    impact: "30% Inventory Reduction",
    icon: Package
  },
  {
    title: "Vendor Excellence",
    description: "Strategic consolidation without production impact, improving leverage and quality.",
    impact: "25% Supplier Rationalization",
    icon: Target
  }
]

export const COMPETENCIES = [
  { name: "Strategic Sourcing", icon: Target },
  { name: "Vendor Development", icon: Users },
  { name: "Cost Reduction", icon: TrendingDown },
  { name: "Global Sourcing", icon: Globe },
  { name: "Contract Negotiation", icon: FileText },
  { name: "Inventory Mgmt", icon: Package },
  { name: "SAP MM & ERP", icon: Laptop },
  { name: "Quality Assurance", icon: Shield },
  { name: "Team Leadership", icon: Users2 },
  { name: "Data Analytics", icon: BarChart },
]


export const CERTIFICATIONS = [
  {
    title: "MBA – Operations Management",
    institution: "Annamalai University",
    score: "78%",
    icon: GraduationCap
  },
  {
    title: "Diploma – Mechanical Engineering",
    institution: "Govt. Polytechnic, Ghaziabad",
    score: "76%",
    icon: GraduationCap
  },
  {
    title: "Diploma – ISO 9000 & TQM",
    institution: "AIIMS",
    icon: Award
  },
  {
    title: "Data Driven Through AI",
    institution: "MIT",
    icon: Laptop
  },
  {
    title: "Certified Internal Auditor",
    institution: "ISO 9001, ISO 14001, OHSAS 18001",
    icon: CheckCircle
  },
  {
    title: "SAP MM Certified Professional",
    institution: "SAP",
    icon: Laptop
  }
]