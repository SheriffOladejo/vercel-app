"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu when a route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0f1117] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="text-cyan-500 font-bold text-2xl" onClick={() => setIsOpen(false)}>
              AAVE V3
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/market"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Market
            </Link>
            <Link
              href="/platforms"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Platforms
            </Link>
            <Link
              href="https://www.babypips.com/crypto/quizzes"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Quiz
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Terms of Use
            </Link>
            <Link
              href="https://doc-hosting.flycricket.io/aave-v3-privacy-policy/915376b9-45cf-4ba1-89b2-3dc8319628a4/privacy"
              className="text-gray-300 hover:text-white transition-colors py-3 border-b border-gray-800 text-lg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
