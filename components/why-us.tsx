"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const reasons = [
  {
    number: "01",
    title: "30 MINUTES CHRONO",
    description: "Je suis basé à Lens, je pars immédiatement"
  },
  {
    number: "02",
    title: "DEVIS AVANT TOUT",
    description: "Tarif communiqué par téléphone avant intervention"
  },
  {
    number: "03",
    title: "PRO LOCAL INDÉPENDANT",
    description: "Pas une plateforme parisienne, vrai dépanneur local"
  },
  {
    number: "04",
    title: "NUIT WEEK-END FÉRIÉS",
    description: "Disponible à toute heure, 365 jours par an"
  }
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0], index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`bg-background/95 backdrop-blur-sm border-l-4 border-primary p-6 md:p-8 transition-all duration-700 card-lift ${
        isVisible 
          ? "opacity-100 translate-x-0" 
          : `opacity-0 ${isLeft ? "-translate-x-8" : "translate-x-8"}`
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="font-mono text-xs text-primary mb-3 block text-glow-red">
        {reason.number}
      </span>
      <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
        {reason.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {reason.description}
      </p>
    </div>
  )
}

export function WhyUs() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="why-us" className="relative bg-card py-20 md:py-28 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/workshop-tools.png"
          alt="Atelier mécanique sombre avec mur entier d'outils organisés sous une unique lumière industrielle"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="mb-12">
          <span 
            className={`font-mono text-xs text-primary tracking-wider block mb-4 transition-all duration-500 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            // POURQUOI NOUS //
          </span>
        </div>
        
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.number} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
