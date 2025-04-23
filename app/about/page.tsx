export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About AAVE V3</h1>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-500">Our Mission</h2>
          <p className="text-lg mb-4">
            AAVE V3 is your educational portal to the world of cryptocurrencies and decentralized finance. We provide
            real-time market data, comprehensive information on leading DeFi platforms, and interactive content to help
            you understand this evolving ecosystem.
          </p>
          <p className="text-lg">
            Our mission is to make cryptocurrency information accessible and understandable for everyone, from beginners
            to experienced traders. All data on this site is for educational purposes only and should not be considered
            financial advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 h-full">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-500">What We Offer</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <p className="font-medium">Real-time Cryptocurrency Data</p>
                  <p className="text-gray-400">Live pricing information from CoinGecko API, updated every minute</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <p className="font-medium">DeFi Platform Analysis</p>
                  <p className="text-gray-400">Detailed breakdowns of leading protocols and their features</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <p className="font-medium">Educational Resources</p>
                  <p className="text-gray-400">Interactive quiz and informational content to expand your knowledge</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-500 font-bold">•</span>
                <div>
                  <p className="font-medium">Platform Comparisons</p>
                  <p className="text-gray-400">Side-by-side analysis of different DeFi protocols</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 h-full">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-500">Our Data Sources</h2>
            <p className="mb-4">
              We use the CoinGecko API to provide you with up-to-date price information for the top cryptocurrencies by
              market capitalization. Our platform descriptions are regularly updated to reflect the latest features and
              developments in the DeFi space.
            </p>
            <p className="mb-4">
              All market data is refreshed automatically to ensure you have access to the most current information
              available. Price changes are calculated over 24-hour periods to give you a clear picture of market
              movements.
            </p>
            <p>
              While we strive for accuracy in all our data and descriptions, cryptocurrency markets are highly volatile
              and information can change rapidly. Always verify critical information through multiple sources before
              making investment decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Important Notice</h2>
        <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
          <p className="text-lg mb-4">
            This website is for informational purposes only. It is not financial advice and should not be considered as
            such. Always do your own research before making investment decisions.
          </p>
          <p className="text-lg">
            Cryptocurrency investments are subject to high market risk. AAVE V3 is not responsible for any financial
            losses incurred from following information presented on this site. Please invest responsibly and only risk
            what you can afford to lose.
          </p>
        </div>
      </div>
    </div>
  )
}
