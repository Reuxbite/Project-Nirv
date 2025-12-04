import type React from "react"

interface SectionLayoutProps {
  title: string
  children: React.ReactNode
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <section className="mb-12">
      <h2 className="font-mono font-bold text-xl text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="font-mono text-sm text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
