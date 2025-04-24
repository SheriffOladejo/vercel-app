import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Test Your Crypto Knowledge</h1>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300 mb-6">
          How well do you understand the world of cryptocurrencies and DeFi? Take our quiz to test your knowledge and
          learn something new along the way. Answer questions on various topics to see your score and expert assessment.
        </p>

        <div className="bg-gray-800/50 p-6 rounded-xl mb-8">
          <p className="mb-6">Ready to test your knowledge about cryptocurrencies and DeFi?</p>
          <Link href="/index.html">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Start Quiz</Button>
          </Link>
        </div>

        <p className="text-sm text-gray-400">
          Our quizzes cover fundamental concepts related to cryptocurrencies and DeFi platforms. Topics include Bitcoin,
          Altcoins, Blockchain technology, and more. Challenge yourself and expand your crypto knowledge!
        </p>
      </div>
    </div>
  )
}
