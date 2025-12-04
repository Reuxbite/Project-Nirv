export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-mono font-bold text-sm mb-2 text-white">Project Nirv</h3>
            <p className="font-mono text-xs text-gray-500 leading-relaxed">Non-Linear Intelligence Research Vector</p>
          </div>

          <div>
            <h3 className="font-mono font-bold text-sm mb-4 text-white">Research Areas</h3>
            <ul className="space-y-2 font-mono text-xs text-gray-500">
              <li>Systems</li>
              <li>Markets</li>
              <li>Ideas</li>
              <li>Notes</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-sm mb-2 text-white">Direction</h3>
            <p className="font-mono text-xs text-gray-500">
              A direction for structured research and non-linear insight.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 font-mono text-xs text-gray-600 flex justify-between">
          <span>© 2025 Project Nirv</span>
          <span>Research Platform</span>
        </div>
      </div>
    </footer>
  )
}
