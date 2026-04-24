"use client"

import { Wrench, Shield, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const trustItems = [
  {
    icon: Wrench,
    title: "Professionnel local Lens",
    description: "Dépanneur basé dans le 62"
  },
  {
    icon: Shield,
    title: "Devis gratuit par téléphone",
    description: "Tarif clair avant intervention"
  },
  {
    icon: Clock,
    title: "Intervention en 30 min",
    description: "Réactivité garantie"
  }
]

export function TrustBar() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 })

  return (
    <section 
      ref={ref}
      className="bg-card py-12 md:py-16 border-y border-border"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {trustItems.map((item, index) => (
            <div 
              key={item.title}
              className={`flex items-center gap-4 justify-center md:justify-start transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
