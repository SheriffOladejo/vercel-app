export default function PlatformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">DeFi Platforms</h1>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300">
          Decentralized Finance (DeFi) platforms are reshaping the financial landscape by offering services without
          traditional intermediaries. Below are three leading platforms pushing the boundaries of what's possible in the
          cryptocurrency space.
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-cyan-500">AAVE V3</h2>
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-md text-sm font-medium">Lending</span>
          </div>

          <p className="text-gray-300 mb-6">
            AAVE V3 is a high-performance decentralized lending protocol built on its own purpose-built L1 blockchain.
            It offers perpetual futures trading with deep liquidity, low fees, and near-instant transaction finality.
            The platform uses an innovative on-chain orderbook model and is secured by a decentralized validator set.
          </p>

          <h3 className="font-medium mb-4">Key features include:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Up to 50x leverage on futures contracts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>MEV protection mechanisms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Native cross-chain bridge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Advanced trading tools including limit orders, stop losses, and take profits</span>
            </li>
          </ul>

          <p className="text-gray-400 italic mb-6">
            AAVE V3's purpose-built L1 blockchain allows for high throughput and low latency, making it ideal for
            derivatives trading where speed is crucial. The platform has gained significant traction among experienced
            traders looking for decentralized alternatives to centralized derivatives exchanges.
          </p>
        </div>

        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-cyan-500">Raydium</h2>
            <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-md text-sm font-medium">AMM</span>
          </div>

          <p className="text-gray-300 mb-6">
            Raydium is an automated market maker (AMM) built on the Solana blockchain. It serves as a foundational
            liquidity infrastructure for Solana's ecosystem, providing liquidity to Serum's central limit order book,
            enabling lightning-fast trades, minimal fees, and access to all liquidity on the Serum DEX.
          </p>

          <h3 className="font-medium mb-4">Key features include:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Liquidity pools with minimal slippage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Yield farming opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Token swaps with low transaction costs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>AcceleRaytor: A launchpad for new Solana projects</span>
            </li>
          </ul>

          <p className="text-gray-400 italic mb-6">
            Unlike traditional AMMs that operate in isolation, Raydium's unique integration with Serum's order book
            allows for greater capital efficiency and deeper liquidity. This innovative design has helped Raydium become
            one of the cornerstone DeFi applications in the Solana ecosystem.
          </p>
        </div>

        <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-cyan-500">PancakeSwap</h2>
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-sm font-medium">DEX</span>
          </div>

          <p className="text-gray-300 mb-6">
            PancakeSwap is a popular decentralized exchange (DEX) that launched on Binance Smart Chain (BSC). It has
            since expanded to multiple chains including Ethereum, Aptos, and more. Using an automated market maker
            model, PancakeSwap allows users to trade tokens, provide liquidity, and earn rewards through yield farming
            and staking.
          </p>

          <h3 className="font-medium mb-4">Key features include:</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Swap and liquidity provision with competitive fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Yield farms and syrup pools for earning CAKE tokens</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Prediction markets and lottery games</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>NFT marketplace and collectibles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500">•</span>
              <span>Initial Farm Offerings (IFOs) for new token launches</span>
            </li>
          </ul>

          <p className="text-gray-400 italic mb-6">
            PancakeSwap has evolved beyond a simple DEX to become a comprehensive DeFi ecosystem with multiple earning
            opportunities. Its multi-chain strategy has helped it maintain relevance even as the broader DeFi landscape
            has evolved. The platform's gamified features have made it particularly popular among newer cryptocurrency
            users.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Platform Comparison</h2>

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
                <td className="p-4">Custom L1</td>
                <td className="p-4">Derivatives Trading</td>
                <td className="p-4">Purpose-built for high-speed trading</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">Raydium</td>
                <td className="p-4">Solana</td>
                <td className="p-4">AMM & Liquidity</td>
                <td className="p-4">Integration with Serum orderbook</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4">PancakeSwap</td>
                <td className="p-4">Multi-chain</td>
                <td className="p-4">Token Swaps & Yield</td>
                <td className="p-4">Comprehensive DeFi ecosystem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
