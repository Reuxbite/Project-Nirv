// Research Data - centralized data source for all research articles
// In production, this could be fetched from a CMS or database

export type TagType = "Systems" | "Markets" | "Ideas" | "Notes"

export interface ResearchArticle {
  id: string
  title: string
  subtitle: string
  brief: string
  tag: TagType
  date: string
  readingTime: number
  content: {
    introduction: string
    context: string
    data: string
    analysis: string
    conclusion: string
    sources: string[]
  }
}

export const researchArticles: ResearchArticle[] = [
  {
    id: "adaptive-systems",
    title: "Adaptive Systems in Global Supply Chains",
    subtitle: "How non-linear feedback loops reshape resilience and efficiency",
    brief: "How non-linear feedback loops reshape resilience and efficiency across interconnected networks.",
    tag: "Systems",
    date: "2025-01-15",
    readingTime: 8,
    content: {
      introduction:
        "Global supply chains are fundamentally complex adaptive systems where multiple actors—suppliers, manufacturers, logistics providers, and consumers—interact in non-linear ways.",
      context:
        "The COVID-19 pandemic exposed critical vulnerabilities in supply chain design. Just-in-time manufacturing, while efficient under stable conditions, created cascade failures when disruptions occurred.",
      data: "We analyzed data from 150+ multinational corporations operating across 30+ countries.",
      analysis:
        "Our analysis reveals a counterintuitive finding: moderate redundancy in supply chains correlates with faster recovery times.",
      conclusion: "Supply chains should be designed for adaptive capacity, not just efficiency.",
      sources: ["Prigogine, I., & Stengers, I. (1984). Order Out of Chaos.", "Bak, P. (1996). How Nature Works."],
    },
  },
  // Add more articles as needed...
]

export function getArticleById(id: string): ResearchArticle | undefined {
  return researchArticles.find((article) => article.id === id)
}

export function getArticlesByTag(tag: TagType): ResearchArticle[] {
  return researchArticles.filter((article) => article.tag === tag)
}

export function getAllTags(): TagType[] {
  return ["Systems", "Markets", "Ideas", "Notes"]
}
