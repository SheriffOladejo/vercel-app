"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { useApiKey } from "@/components/api-key-provider"

interface Cryptocurrency {
  id: string
  market_cap_rank: number
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  image: string
}

export default function CryptoTable() {
  const { apiKey } = useApiKey()
  const [cryptos, setCryptos] = useState<Cryptocurrency[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h",
        )

        if (!response.ok) {
          throw new Error("Failed to fetch cryptocurrency data")
        }

        const data = await response.json()
        setCryptos(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        console.error("Error fetching crypto data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptos()

    // Refresh data every 60 seconds
    const intervalId = setInterval(fetchCryptos, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    } else if (price >= 1) {
      return `${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    } else {
      return `${price.toLocaleString("en-US", { minimumFractionDigits: 6, maximumFractionDigits: 6 })}`
    }
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)}T`
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(2)}B`
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(2)}M`
    } else {
      return `${marketCap.toLocaleString()}`
    }
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top 10 Cryptocurrencies</h2>
      <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
        Track the performance of the market's leading cryptocurrencies. Data updates automatically every minute to
        provide you with the most current information. Prices are displayed in USD.
      </p>

      {error && (
        <div className="bg-red-900/30 border border-red-700 text-white p-4 rounded-lg mb-6">
          <p>Error: {error}</p>
          <p>Please try again later or check your connection.</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800/50 text-left">
              <th className="p-4 font-medium">Rank</th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Symbol</th>
              <th className="p-4 font-medium">Price (USD)</th>
              <th className="p-4 font-medium">24h Change</th>
              <th className="p-4 font-medium">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-4">
                        <Skeleton className="h-6 w-6" />
                      </td>
                      <td className="p-4">
                        <Skeleton className="h-6 w-32" />
                      </td>
                      <td className="p-4">
                        <Skeleton className="h-6 w-16" />
                      </td>
                      <td className="p-4">
                        <Skeleton className="h-6 w-24" />
                      </td>
                      <td className="p-4">
                        <Skeleton className="h-6 w-20" />
                      </td>
                      <td className="p-4">
                        <Skeleton className="h-6 w-24" />
                      </td>
                    </tr>
                  ))
              : cryptos.map((crypto) => (
                  <tr key={crypto.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="p-4">{crypto.market_cap_rank}</td>
                    <td className="p-4 flex items-center gap-3">
                      <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-6 h-6" />
                      {crypto.name}
                    </td>
                    <td className="p-4 uppercase">{crypto.symbol}</td>
                    <td className="p-4">{formatPrice(crypto.current_price)}</td>
                    <td
                      className={`p-4 ${crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="p-4">{formatMarketCap(crypto.market_cap)}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="text-right mt-4 text-sm text-gray-400">
        Data provided by CoinGecko API {apiKey === "live" && "(Live Mode)"}
      </div>

      <div className="mt-6 p-4 border-l-4 border-cyan-500 bg-gray-800/30 text-gray-300 text-sm">
        Market capitalization represents the total value of a cryptocurrency in circulation, calculated by multiplying
        the current price by the total supply. The 24h change indicates price movement over the last 24 hours.
      </div>
    </section>
  )
}
