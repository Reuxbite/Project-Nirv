type TagType = "Systems" | "Markets" | "Ideas" | "Notes"

interface TagBadgeProps {
  tag: TagType
  variant?: "default" | "outline"
}

const tagStyles: Record<TagType, { bg: string; text: string; border: string }> = {
  Systems: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
  Markets: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
  Ideas: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
  Notes: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
}

export default function TagBadge({ tag, variant = "default" }: TagBadgeProps) {
  const style = tagStyles[tag]

  if (variant === "outline") {
    return (
      <span
        className={`inline-block px-3 py-1 border ${style.border} ${style.text} font-mono text-xs font-semibold rounded-sm`}
      >
        {tag}
      </span>
    )
  }

  return (
    <span className={`inline-block px-3 py-1 ${style.bg} ${style.text} font-mono text-xs font-semibold rounded-sm`}>
      {tag}
    </span>
  )
}
