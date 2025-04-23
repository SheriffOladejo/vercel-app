"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToSection() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # symbol
      const id = hash.replace("#", "")
      const element = document.getElementById(id)

      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [pathname, searchParams])

  return null
}
