"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)

    // In a real application, you would make an API call here
    // try {
    //   const response = await fetch('/api/subscribe', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   });
    //
    //   if (response.ok) {
    //     toast({
    //       title: "Success!",
    //       description: "You've been subscribed to our newsletter.",
    //     });
    //     setEmail("");
    //   } else {
    //     throw new Error('Failed to subscribe');
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to subscribe. Please try again.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md mx-auto space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
        required
      />
      <Button type="submit" disabled={isLoading} className="bg-white text-[#10B981] hover:bg-white/90">
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}

