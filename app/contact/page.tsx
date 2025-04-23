"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-xl text-gray-300">
          Have questions or feedback about AAVE V3? We'd love to hear from you. Reach out to our team using the contact
          information below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-700 p-3 rounded-full">
              <Mail className="w-6 h-6 text-cyan-500" />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-center mb-4 text-cyan-500">Email</h2>
          <p className="text-center mb-8">support@aavev3.com</p>

          <div className="border-t border-gray-700 pt-8">
            <p className="mb-4">
              Our support team is available to assist you with any inquiries about our platform, features, or content.
              We aim to respond to all emails within 24-48 business hours.
            </p>
            <p>For urgent matters, please include "URGENT" in your email subject line.</p>
          </div>
        </div>

        <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold text-center mb-6 text-cyan-500">Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-gray-900 border-gray-700"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-700 text-white p-4 rounded-lg">
                  Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-900/30 border border-red-700 text-white p-4 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
