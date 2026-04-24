"use client"

import { Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section 
      id="cta"
      ref={ref}
      className="relative bg-background py-24 md:py-32 overflow-hidden"
    >
      {/* Background image - tow truck hook/chain */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tow-hook-chain.png"
          alt="Gros plan d'un crochet de dépanneuse en métal industriel rougeâtre avec chaîne lourde"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        {/* Red tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(150,0,0,0.20)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>

      {/* Giant faded background text */}
      <span 
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white/[0.03] whitespace-nowrap select-none transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        aria-hidden="true"
      >
        FLASH
      </span>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          EN PANNE À LENS ?
        </h2>
        <p 
          className={`text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Un dépanneur local qui répond en personne. Intervention rapide, tarif clair.
        </p>
        <a
          href="tel:0603712838"
          className={`inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-serif font-bold text-xl px-10 py-5 transition-all btn-clip-hover animate-cta-glow ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <Phone className="w-6 h-6" />
          <span>APPELER MAINTENANT — 06 03 71 28 38</span>
        </a>
      </div>
    </section>
  )
}
