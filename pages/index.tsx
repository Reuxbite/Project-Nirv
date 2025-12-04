"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ResearchCard from "@/components/research-card"

type TagType = "Systems" | "Markets" | "Ideas" | "Notes"

interface ResearchItem {
  id: string
  title: string
  brief: string
  date: string
  tag: TagType
}

const researchData: ResearchItem[] = [
  {
    id: "adaptive-systems",
    title: "Adaptive Systems in Global Supply Chains",
    brief: "How non-linear feedback loops reshape resilience and efficiency across interconnected networks.",
    date: "2025-01-15",
    tag: "Systems",
  },
  {
    id: "market-dynamics",
    title: "Market Dynamics Under Uncertainty",
    brief: "Examining pricing mechanisms when information asymmetry and distributed decision-making collide.",
    date: "2025-01-12",
    tag: "Markets",
  },
  {
    id: "emergence-patterns",
    title: "Emergence Patterns in Complex Systems",
    brief: "A theoretical exploration of how order arises from chaos without top-down coordination.",
    date: "2025-01-08",
    tag: "Ideas",
  },
  {
    id: "data-methodology",
    title: "Data Collection Methodology for Distributed Systems",
    brief: "Best practices for sampling, temporal alignment, and inference from non-linear sources.",
    date: "2025-01-05",
    tag: "Notes",
  },
  {
    id: "network-topology",
    title: "Network Topology and Behavioral Change",
    brief: "How graph structure influences information diffusion and collective decision outcomes.",
    date: "2024-12-28",
    tag: "Systems",
  },
  {
    id: "valuation-frameworks",
    title: "Non-Traditional Valuation Frameworks",
    brief: "Moving beyond discounted cash flows in markets where growth is chaotic and non-predictable.",
    date: "2024-12-20",
    tag: "Markets",
  },
]

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<TagType | null>(null)

  const filteredData = selectedTag ? researchData.filter((item) => item.tag === selectedTag) : researchData

  const tags: TagType[] = ["Systems", "Markets", "Ideas", "Notes"]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">Project Nirv</h1>
          <p className="font-mono text-lg text-cyan-400 mb-2">Non-Linear Intelligence Research Vector</p>
          <p className="font-mono text-sm text-gray-500">Structured research. Non-linear insight.</p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 font-mono text-xs font-semibold rounded-sm transition ${
              selectedTag === null
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-800"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 font-mono text-xs font-semibold rounded-sm transition ${
                selectedTag === tag
                  ? "bg-cyan-500 text-black hover:bg-cyan-400"
                  : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredData.map((item) => (
            <ResearchCard
              key={item.id}
              id={item.id}
              title={item.title}
              brief={item.brief}
              date={item.date}
              tag={item.tag}
              onClick={() => {
                window.location.href = `/research/${item.id}`
              }}
            />
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="font-mono text-gray-600">No research found for this tag.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
