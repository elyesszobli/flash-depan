"use client"

import { Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const communes = [
  { name: "Lens", primary: true },
  { name: "Liévin" },
  { name: "Hénin-Beaumont" },
  { name: "Avion" },
  { name: "Carvin" },
  { name: "Béthune" },
  { name: "Loison-sous-Lens" },
  { name: "Sallaumines" },
  { name: "Méricourt" },
  { name: "Harnes" },
  { name: "Noyelles-sous-Lens" },
  { name: "Bully-les-Mines" },
  { name: "Noeux-les-Mines" },
  { name: "Loos-en-Gohelle" },
  { name: "Arras" },
  { name: "+ tout le 62" },
]

export function Zone() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="zone" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/breakdown-hood.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.80)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left - Big Red Block */}
          <div 
            ref={leftRef}
            className={`relative bg-primary p-8 md:p-12 overflow-hidden transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Giant 62 watermark */}
            <span 
              className="absolute -right-10 -bottom-10 font-serif text-[12rem] md:text-[16rem] font-bold text-black/20 select-none leading-none"
              aria-hidden="true"
            >
              62
            </span>
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                LENS & ENVIRONS
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                Basé à Lens, j&apos;interviens rapidement sur toutes les communes du bassin minier 
                et dans tout le Pas-de-Calais. Un dépanneur local qui connaît le terrain.
              </p>
              <a
                href="tel:0603712838"
                className="inline-flex items-center gap-3 bg-white text-primary hover:bg-background hover:text-white font-serif font-bold text-lg px-6 py-3 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 03 71 28 38
              </a>
            </div>
          </div>
          
          {/* Right - Communes List */}
          <div ref={rightRef}>
            <span 
              className={`font-mono text-xs text-primary tracking-wider block mb-6 transition-all duration-500 ${
                rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              // COMMUNES COUVERTES //
            </span>
            
            <div className="flex flex-wrap gap-3">
              {communes.map((commune, index) => (
                <span
                  key={commune.name}
                  className={`font-mono text-xs px-4 py-2 transition-all duration-300 ${
                    commune.primary 
                      ? "bg-primary text-white" 
                      : "bg-transparent border border-primary/50 text-white hover:bg-primary/20"
                  } ${rightVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  style={{ 
                    transitionDelay: rightVisible ? `${index * 0.05}s` : "0s",
                  }}
                >
                  {commune.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div 
          ref={mapRef}
          className={`transition-all duration-700 ${
            mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Pulsing marker on Lens */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="relative">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
              </div>
            </div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82271.54862647893!2d2.7500000000000004!3d50.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3b6f7f9c7a5f%3A0x40af13e8120b3d0!2sLens%2C%2062300!5e0!3m2!1sfr!2sfr!4v1"
              width="100%" 
              height="400"
              className="border-0 rounded h-[280px] md:h-[400px]"
              style={{
                filter: "invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.4) contrast(1.2)"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zone d'intervention Flash Dépann 62 - Lens et environs"
            />
          </div>
          
          {/* Map caption */}
          <p className="text-center text-muted-foreground font-mono text-sm mt-4">
            Zone d&apos;intervention : Lens et 25 km alentour — Pas-de-Calais (62)
          </p>
        </div>
      </div>
    </section>
  )
}
