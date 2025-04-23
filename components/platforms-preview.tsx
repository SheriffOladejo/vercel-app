export default function PlatformsPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">DeFi Platforms</h2>
      <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Decentralized Finance (DeFi) platforms are reshaping the financial landscape by offering services without
        traditional intermediaries. Below are three leading platforms pushing the boundaries of what's possible in the
        cryptocurrency space.
      </p>

      <div className="grid gap-8">
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-cyan-500">AAVE V3</h3>
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-md text-sm font-medium">Lending</span>
          </div>

          <p className="text-gray-300 mb-6">
            AAVE V3 is a high-performance decentralized lending protocol built on Ethereum and multiple other
            blockchains. It offers permissionless borrowing and lending with variable and stable interest rates. The
            platform uses an innovative liquidity pool model and is secured by a decentralized governance system.
          </p>

          <h4 className="font-medium mb-4">Key features include:</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Multiple collateral types and cross-chain capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Efficiency mode (eMode) for optimized borrowing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Isolation mode for safer asset listings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Portal for seamless cross-chain transactions</span>
            </li>
          </ul>

          <p className="text-gray-400 italic">
            AAVE V3's purpose-built protocol allows for high efficiency and low risk, making it ideal for lending and
            borrowing where security is crucial. The platform has gained significant traction among DeFi users looking
            for reliable yield opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-cyan-500">Uniswap</h3>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-md text-sm font-medium">DEX</span>
            </div>

            <p className="text-gray-300 mb-6">
              Uniswap is a popular decentralized exchange protocol that launched on Ethereum. It has since expanded with
              multiple versions, each improving liquidity and efficiency. Using an automated market maker model, Uniswap
              allows users to trade tokens, provide liquidity, and earn fees.
            </p>

            <h4 className="font-medium mb-4">Key features include:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>Concentrated liquidity for capital efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>Multiple fee tiers for different asset pairs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>Cross-chain deployment via Layer 2 solutions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-cyan-500">Compound</h3>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm font-medium">Lending</span>
            </div>

            <p className="text-gray-300 mb-6">
              Compound is an algorithmic money market protocol on Ethereum that allows users to lend and borrow crypto
              assets. Interest rates are determined by supply and demand, adjusting automatically based on market
              conditions.
            </p>

            <h4 className="font-medium mb-4">Key features include:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>Algorithmic interest rates based on utilization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>cTokens representing deposits in the protocol</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500">•</span>
                <span>Governance through the COMP token</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Platform Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800/50 text-left">
                <th className="p-4 font-medium">Platform</th>
                <th className="p-4 font-medium">Blockchain</th>
                <th className="p-4 font-medium">Primary Use Case</th>
                <th className="p-4 font-medium">Unique Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-4">AAVE V3</td>
                <td className="p-4">Multi-chain</td>
                <td className="p-4">Lending & Borrowing</td>
                <td className="p-4">Purpose-built for high-speed transactions</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Uniswap</td>
                <td className="p-4">Ethereum & L2s</td>
                <td className="p-4">Token Swaps & Liquidity</td>
                <td className="p-4">Concentrated liquidity positions</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Compound</td>
                <td className="p-4">Ethereum</td>
                <td className="p-4">Lending & Borrowing</td>
                <td className="p-4">Algorithmic interest rate model</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
