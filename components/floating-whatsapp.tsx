"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingWhatsApp() {
  const [bounce, setBounce] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href="tel:0603712838"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-secondary text-white rounded-full shadow-lg transition-all duration-300 ${
        bounce ? "-translate-y-2" : "translate-y-0"
      }`}
      aria-label="Appeler Flash Dépann 62"
    >
      <Phone className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full" />
    </a>
  )
}
