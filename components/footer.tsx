import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-cyan-500 font-bold text-xl">
            AAVE V3
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Educational content about cryptocurrencies and DeFi platforms. Our goal is to make complex crypto concepts
            accessible to everyone.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/market" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                Market Data
              </Link>
            </li>
            <li>
              <Link href="/platforms" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                DeFi Platforms
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                Crypto Quiz
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="https://doc-hosting.flycricket.io/aave-v3-privacy-policy/915376b9-45cf-4ba1-89b2-3dc8319628a4/privacy"
                className="text-gray-400 hover:text-cyan-500 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-gray-400 hover:text-cyan-500 transition-colors text-sm">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Important Notice</h3>
          <p className="text-gray-400 text-sm">
            This website is for informational purposes only. It is not financial advice and should not be considered as
            such. Always do your own research before making investment decisions.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AAVE V3. All rights reserved.
      </div>
    </footer>
  )
}
