import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToSection from "@/components/scroll-to-section"
import { ApiKeyProvider } from "@/components/api-key-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AAVE V3",
  description: "Your educational portal to the world of cryptocurrencies and decentralized finance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f1117] text-white min-h-screen flex flex-col`}>
        <ApiKeyProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <ScrollToSection />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </ApiKeyProvider>
      </body>
    </html>
  )
}
