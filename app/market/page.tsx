import CryptoTable from "@/components/crypto-table"

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cryptocurrency Market Data</h1>
      <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
        Get real-time information on the top cryptocurrencies by market capitalization. Data is fetched directly from
        CoinGecko and updates automatically every minute.
      </p>

      <CryptoTable />
    </div>
  )
}
