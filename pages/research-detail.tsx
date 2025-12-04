"use client"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionLayout from "@/components/section-layout"
import TagBadge from "@/components/tag-badge"

interface ResearchDetailProps {
  id?: string
}

export default function ResearchDetail({ id = "adaptive-systems" }: ResearchDetailProps) {
  // Mock data – in production, fetch from a data source based on `id`
  const researchData = {
    id: "adaptive-systems",
    title: "Adaptive Systems in Global Supply Chains",
    subtitle: "How non-linear feedback loops reshape resilience and efficiency",
    tag: "Systems" as const,
    date: "2025-01-15",
    readingTime: 8,
    content: {
      introduction:
        "Global supply chains are fundamentally complex adaptive systems where multiple actors—suppliers, manufacturers, logistics providers, and consumers—interact in non-linear ways. Traditional linear models of optimization fail to capture the emergent behaviors that arise from these interactions.",
      context:
        "The COVID-19 pandemic exposed critical vulnerabilities in supply chain design. Just-in-time manufacturing, while efficient under stable conditions, created cascade failures when disruptions occurred. This led to a paradigm shift: supply chains must be viewed not as static networks but as dynamic, adaptive systems capable of self-organization and resilience.\n\nRecent research in complexity science provides new frameworks for understanding these systems. Key concepts include feedback loops, tipping points, and the emergence of collective intelligence from distributed decision-making.",
      data: "We analyzed data from 150+ multinational corporations operating across 30+ countries. Metrics included: supply chain disruption frequency, recovery time, network density, and diversification indices. The study spans 2018–2024, capturing both pre- and post-pandemic periods.\n\nKey datasets: World Bank trade data, shipping logs, inventory reports, and sensor data from manufacturing facilities.",
      analysis:
        "Our analysis reveals a counterintuitive finding: moderate redundancy in supply chains correlates with faster recovery times, not slower. Additionally, networks with higher information transparency showed 40% faster adaptation to disruptions.\n\nNon-linear regression models suggest tipping points in network structure. Beyond a critical density threshold, further optimization produces diminishing returns, suggesting an optimal—not maximal—network design.",
      conclusion:
        "Supply chains should be designed for adaptive capacity, not just efficiency. This requires investment in information systems, distributed decision-making protocols, and moderate redundancy. Organizations that embrace this shift will outcompete those clinging to linear optimization models.",
      sources: [
        "Prigogine, I., & Stengers, I. (1984). Order Out of Chaos.",
        "Bak, P. (1996). How Nature Works: The Science of Self-Organized Criticality.",
        "World Economic Forum (2023). Global Risks Report.",
        "Nasiriyar, B. & Chen, S. (2024). Emergent Resilience in Supply Networks.",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TagBadge tag={researchData.tag} variant="outline" />
            <span className="font-mono text-xs text-gray-500">{researchData.readingTime} min read</span>
          </div>

          <h1 className="font-mono font-bold text-3xl md:text-4xl text-gray-900 mb-3">{researchData.title}</h1>

          <p className="font-mono text-lg text-gray-600 mb-6">{researchData.subtitle}</p>

          <div className="font-mono text-sm text-gray-500 pb-6 border-b border-gray-200">
            Published {researchData.date}
          </div>
        </div>

        {/* Content Sections */}
        <article className="space-y-12">
          <SectionLayout title="Introduction">
            <p>{researchData.content.introduction}</p>
          </SectionLayout>

          <SectionLayout title="Context">
            {researchData.content.context.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SectionLayout>

          <SectionLayout title="Data">
            {researchData.content.data.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SectionLayout>

          <SectionLayout title="Analysis">
            {researchData.content.analysis.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SectionLayout>

          <SectionLayout title="Conclusion">
            <p>{researchData.content.conclusion}</p>
          </SectionLayout>

          <SectionLayout title="Sources">
            <ul className="space-y-2">
              {researchData.content.sources.map((source, i) => (
                <li key={i} className="text-gray-700">
                  {source}
                </li>
              ))}
            </ul>
          </SectionLayout>
        </article>

        {/* Navigation */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <Link href="/" className="inline-block font-mono text-sm text-gray-600 hover:text-gray-900 transition">
            ← Back to Research
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
