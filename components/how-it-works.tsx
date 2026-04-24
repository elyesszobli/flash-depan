"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "VOUS APPELEZ",
    description: "Contactez-nous au 06 03 71 28 38"
  },
  {
    number: "02",
    title: "DEVIS IMMÉDIAT",
    description: "Prix communiqué par téléphone"
  },
  {
    number: "03",
    title: "J'ARRIVE",
    description: "Intervention en 30 minutes"
  },
  {
    number: "04",
    title: "RÉGLÉ",
    description: "Problème résolu sur place"
  }
]

function Step({ step, index }: { step: typeof steps[0], index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 })

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Large faded number */}
      <span 
        className={`font-serif text-7xl md:text-8xl font-bold text-black/20 leading-none mb-2 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{ transitionDelay: `${index * 0.15 + 0.1}s` }}
        aria-hidden="true"
      >
        {step.number}
      </span>
      
      {/* Title */}
      <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">
        {step.title}
      </h3>
      
      {/* Description */}
      <p className="text-white/80 text-sm max-w-[200px]">
        {step.description}
      </p>
      
      {/* Connecting line (desktop) */}
      {index < steps.length - 1 && (
        <div 
          className={`hidden lg:block absolute top-10 left-[calc(50%+60px)] h-[2px] bg-white/30 transition-all duration-700 ${
            isVisible ? "w-[calc(100%-120px)]" : "w-0"
          }`}
          style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-primary py-20 md:py-28 relative overflow-hidden">
      {/* Subtle scanlines */}
      <div className="absolute inset-0 scanlines opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
