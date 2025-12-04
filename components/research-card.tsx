"use client"
import TagBadge from "./tag-badge"

type TagType = "Systems" | "Markets" | "Ideas" | "Notes"

interface ResearchCardProps {
  id: string
  title: string
  brief: string
  date: string
  tag: TagType
  onClick?: () => void
}

export default function ResearchCard({ title, brief, date, tag, onClick }: ResearchCardProps) {
  return (
    <div
      onClick={onClick}
      className="border border-gray-800 rounded-lg p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer bg-black"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-mono font-bold text-base text-white flex-1">{title}</h3>
        <TagBadge tag={tag} />
      </div>

      <p className="font-mono text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{brief}</p>

      <div className="font-mono text-xs text-gray-600">{date}</div>
    </div>
  )
}
