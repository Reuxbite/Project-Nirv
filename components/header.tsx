import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-cyan-500 rounded-sm flex items-center justify-center text-black text-xs font-bold font-mono">
            N
          </div>
          <div className="font-mono font-bold text-sm tracking-wide text-white">NIRV</div>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition">
            Research
          </Link>
          <Link href="/about" className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
