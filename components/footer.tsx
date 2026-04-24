"use client"

import { Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t-[3px] border-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#">
            <Image
              src="/images/logo.png"
              alt="Flash Dépann 62 — Dépannage auto Lens"
              width={160}
              height={60}
              className="h-10 object-contain"
              style={{ width: "auto" }}
            />
          </a>
          
          {/* Phone */}
          <a
            href="tel:0603712838"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-mono"
          >
            <Phone className="w-4 h-4" />
            06 03 71 28 38
          </a>
          
          {/* Zone */}
          <span className="font-mono text-xs text-muted-foreground">
            LENS · PAS-DE-CALAIS · 62
          </span>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Flash Dépann 62 — Dépannage auto Lens 24h/24 — Pas-de-Calais 62
          </p>
        </div>
      </div>
    </footer>
  )
}
