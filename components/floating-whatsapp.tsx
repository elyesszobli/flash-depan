"use client"

import { MessageCircle } from "lucide-react"
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
      href="https://wa.me/33603712838"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg transition-all duration-300 ${
        bounce ? "-translate-y-2" : "translate-y-0"
      }`}
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full" />
    </a>
  )
}
