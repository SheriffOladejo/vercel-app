"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { getApiKey } from "@/lib/api-key"

type ApiKeyContextType = {
  apiKey: string | null
  isLoading: boolean
  error: string | null
}

const ApiKeyContext = createContext<ApiKeyContextType>({
  apiKey: null,
  isLoading: true,
  error: null,
})

export const useApiKey = () => useContext(ApiKeyContext)

export function ApiKeyProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchApiKey() {
      try {
        const key = await getApiKey()
        setApiKey(key)

        // If API key is "test", redirect to the options.html file
        if (key === "test") {
          window.location.href = "/options.html"
          return
        }
      } catch (err) {
        setError("Failed to fetch API key")
        console.error("API key fetch error:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchApiKey()
  }, [])

  // If we're still loading, show a loading indicator
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    )
  }

  // If there was an error fetching the API key, show an error message
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-900/30 border border-red-700 text-white p-6 rounded-lg max-w-md text-center">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p>{error}</p>
          <p className="mt-4">Please try again later or contact support.</p>
        </div>
      </div>
    )
  }

  // Render the normal application
  return <ApiKeyContext.Provider value={{ apiKey, isLoading, error }}>{children}</ApiKeyContext.Provider>
}
