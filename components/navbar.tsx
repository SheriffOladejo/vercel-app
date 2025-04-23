import Link from "next/link"
import MobileNav from "./mobile-nav"

export default function Navbar() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-cyan-500 font-bold text-2xl">AAVE V3</div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/market" className="text-gray-300 hover:text-white transition-colors">
            Market
          </Link>
          <Link href="/platforms" className="text-gray-300 hover:text-white transition-colors">
            Platforms
          </Link>
          <Link
            href="https://www.babypips.com/crypto/quizzes"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiz
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="https://docs.google.com/document/d/1E4gsoIfHJfkSBoz1VOcFdSMlKX8haWL4On8vH-_QtuY/edit?pli=1&tab=t.0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            Terms of Use
          </Link>
          <Link
            href="https://doc-hosting.flycricket.io/aave-v3-privacy-policy/915376b9-45cf-4ba1-89b2-3dc8319628a4/privacy"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
