// Function to fetch the API key from the remote server
export async function getApiKey(): Promise<string | null> {
  try {
    const response = await fetch("https://mobiappave.xyz/api/get_api_key.php")

    if (!response.ok) {
      console.error("Failed to fetch API key:", response.statusText)
      return null
    }

    const data = await response.json()

    if (data.error) {
      console.error("API key error:", data.error)
      return null
    }

    return data.api_key
  } catch (error) {
    console.error("Error fetching API key:", error)
    return null
  }
}
