export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">About AAVE V3</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500">Real-time Data</h3>
          <p className="text-gray-300 mb-6">
            Live pricing and market information from CoinGecko API, refreshed every minute.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-cyan-500">DeFi Insights</h3>
          <p className="text-gray-300 mb-6">
            Detailed information about leading decentralized finance platforms and their features.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-cyan-500">Educational Content</h3>
          <p className="text-gray-300">Interactive quiz and informational resources to expand your crypto knowledge.</p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <p className="text-lg mb-6">
            AAVE V3 is your educational portal to the world of cryptocurrencies and decentralized finance. We provide
            real-time market data, comprehensive information on leading DeFi platforms, and interactive content to help
            you understand this evolving ecosystem.
          </p>
          <p className="text-lg mb-6">
            Our mission is to make cryptocurrency information accessible and understandable for everyone, from beginners
            to experienced traders. All data on this site is for educational purposes only and should not be considered
            financial advice.
          </p>
          <p className="text-lg">
            We use the CoinGecko API to provide you with up-to-date price information for the top cryptocurrencies by
            market capitalization. Our platform descriptions are regularly updated to reflect the latest features and
            developments in the DeFi space.
          </p>
        </div>
      </div>
    </section>
  )
}
