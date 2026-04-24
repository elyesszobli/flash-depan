"use client"

import { AlertTriangle, Phone, MapPin } from "lucide-react"

const messages = [
  { icon: AlertTriangle, text: "EN PANNE ? INTERVENTION EN 30 MIN" },
  { icon: Phone, text: "APPELEZ LE 06 03 71 28 38" },
  { icon: MapPin, text: "LENS · LIÉVIN · HÉNIN-BEAUMONT · AVION · CARVIN" },
]

export function EmergencyBanner() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-primary overflow-hidden">
      <a
        href="tel:0603712838"
        className="block py-2"
      >
        <div className="animate-ticker flex whitespace-nowrap">
          {/* Duplicate messages for seamless loop */}
          {[...messages, ...messages, ...messages, ...messages].map((msg, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white font-mono text-xs md:text-sm font-medium tracking-wide mx-8"
            >
              <msg.icon className="w-4 h-4 flex-shrink-0" />
              {msg.text}
            </span>
          ))}
        </div>
      </a>
    </div>
  )
}
