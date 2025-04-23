import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Real-time Cryptocurrency Market Data</h1>
        <p className="text-xl text-gray-400 mb-8">
          Get insights on the top cryptocurrencies and DeFi platforms in one place. Stay informed with live price
          updates, market analysis, and educational content.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/market"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors"
          >
            View Market Data
          </Link>
          <Link
            href="/platforms"
            className="bg-transparent hover:bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-md transition-colors"
          >
            Explore DeFi Platforms
          </Link>
        </div>
      </div>
    </section>
  )
}
