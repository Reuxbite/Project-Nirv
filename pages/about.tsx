"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionLayout from "@/components/section-layout"
import ResearchCard from "@/components/research-card"

type TagType = "Systems" | "Markets" | "Ideas" | "Notes"

interface ResearchTile {
  id: string
  title: string
  brief: string
  date: string
  tag: TagType
}

const featuredResearch: ResearchTile[] = [
  {
    id: "adaptive-systems",
    title: "Adaptive Systems in Global Supply Chains",
    brief: "How non-linear feedback loops reshape resilience.",
    date: "2025-01-15",
    tag: "Systems",
  },
  {
    id: "market-dynamics",
    title: "Market Dynamics Under Uncertainty",
    brief: "Pricing mechanisms in distributed decision-making.",
    date: "2025-01-12",
    tag: "Markets",
  },
  {
    id: "emergence-patterns",
    title: "Emergence Patterns in Complex Systems",
    brief: "How order arises from chaos without coordination.",
    date: "2025-01-08",
    tag: "Ideas",
  },
  {
    id: "data-methodology",
    title: "Data Collection Methodology for Distributed Systems",
    brief: "Best practices for non-linear data sources.",
    date: "2025-01-05",
    tag: "Notes",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-mono font-bold text-4xl text-white mb-4">About Project Nirv</h1>
          <p className="font-mono text-lg text-cyan-400 italic">
            A direction for structured research and non-linear insight.
          </p>
        </div>

        {/* Content */}
        <article className="space-y-12">
          <SectionLayout title="The Project">
            <p className="text-gray-300">
              Project Nirv is a structured research initiative dedicated to understanding complex systems through the
              lens of non-linear dynamics. We investigate how intelligence emerges from interconnected networks, how
              markets evolve under uncertainty, and how novel ideas germinate in the space between disciplines.
            </p>
            <p className="text-gray-300">
              Our work bridges theory and practice, combining rigorous data analysis with conceptual exploration. We
              believe that many of today's most pressing challenges cannot be solved with linear thinking—they require
              frameworks that embrace complexity, feedback loops, and emergent behavior.
            </p>
          </SectionLayout>

          <SectionLayout title="NIRV: Non-Linear Intelligence Research Vector">
            <p className="text-gray-300">The acronym NIRV encapsulates our research philosophy:</p>
            <p className="text-gray-300">
              <strong className="text-white">Non-Linear:</strong> We reject reductionist models that assume simple
              cause-and-effect relationships. Real systems exhibit feedback loops, tipping points, and qualitative
              shifts.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Intelligence:</strong> Intelligence—whether in markets, ecosystems, or
              organizations—is a collective phenomenon. We study how distributed agents generate emergent order and
              adaptation.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Research:</strong> Systematic inquiry grounded in data, theory, and peer
              scrutiny. We privilege evidence over ideology and rigor over convention.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Vector:</strong> A vector is both a direction and a magnitude. NIRV
              represents both the trajectory of our research and the force behind structured insight.
            </p>
          </SectionLayout>

          <SectionLayout title="Research Areas">
            <p className="text-gray-300">
              <strong className="text-white">Systems:</strong> Complex adaptive systems, network topology, emergence,
              and resilience in large-scale networks.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Markets:</strong> Market dynamics, pricing mechanisms, information
              asymmetry, and valuation frameworks under uncertainty.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Ideas:</strong> Conceptual frameworks, theoretical exploration, and
              cross-disciplinary synthesis.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Notes:</strong> Methodological observations, data practices, and research
              infrastructure.
            </p>
          </SectionLayout>

          <SectionLayout title="Philosophy">
            <p className="text-gray-300">We believe research should be:</p>
            <p className="text-gray-300">
              <strong className="text-white">Rigorous:</strong> Grounded in evidence, transparent in methodology, and
              open to critique.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Accessible:</strong> Written clearly for both specialists and informed
              generalists. Complexity of thought should not require obscurity of language.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Cumulative:</strong> Building on the work of others, acknowledging our
              intellectual debts, and contributing to a broader body of knowledge.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Exploratory:</strong> Willing to follow questions wherever they lead, even
              into uncertainty and ambiguity.
            </p>
          </SectionLayout>

          <SectionLayout title="Featured Research">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredResearch.map((item) => (
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
          </SectionLayout>

          <SectionLayout title="Get In Touch">
            <p className="text-gray-300">
              We welcome collaboration, critique, and conversation. If you are interested in our research or wish to
              contribute, please reach out.
            </p>
            <p className="text-gray-500 text-sm">inquiry@projectnirv.com</p>
          </SectionLayout>
        </article>
      </main>

      <Footer />
    </div>
  )
}
