"use client"

import { Battery, Truck, Wrench, CircleDot, Fuel, Car } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

type ServiceItem = {
  number: string
  icon: React.ElementType
  title: string
  description: string
  image: string
  alt: string
  objectPosition?: string
}

const services: ServiceItem[] = [
  {
    number: "01",
    icon: Battery,
    title: "Batterie déchargée",
    description: "Démarrage d'urgence ou remplacement sur place",
    image: "/images/battery-sparks.png",
    alt: "Mains gantées connectant des câbles de démarrage sur une batterie Bosch avec des étincelles électriques sous la pluie"
  },
  {
    number: "02",
    icon: Truck,
    title: "Remorquage",
    description: "Plateau professionnel vers le garage de votre choix",
    image: "/images/accident-tow.png",
    alt: "Dépanneuse avec plateau chargeant un véhicule accidenté sur route mouillée de nuit, mécanicien en veste orange"
  },
  {
    number: "03",
    icon: Wrench,
    title: "Panne & démarrage",
    description: "Diagnostic sur place, panne moteur ou mécanique",
    image: "/images/breakdown-hood.png",
    alt: "Mécanicien inspectant le moteur d'une Peugeot en panne sur autoroute A6 sous la pluie intense de nuit"
  },
  {
    number: "04",
    icon: CircleDot,
    title: "Pneu crevé",
    description: "Changement de roue express, montage roue de secours",
    image: "/images/flat-tire.png",
    alt: "Pneu crevé d'une Citroën au ras du sol sur route mouillée de nuit, triangle de signalisation et reflets rouges sur l'asphalte",
    objectPosition: "center bottom"
  },
  {
    number: "05",
    icon: Fuel,
    title: "Erreur de carburant",
    description: "Ne démarrez pas, on sécurise et prend en charge",
    image: "/images/wrong-fuel.png",
    alt: "Main insérant une pompe diesel dans un réservoir avec autocollant UNLEADED FUEL ONLY à une station-service de nuit"
  },
  {
    number: "06",
    icon: Car,
    title: "Véhicule accidenté",
    description: "Transport sécurisé après choc ou accident",
    image: "/images/flatbed-loading.png",
    alt: "Camion FRANCE-DÉPANNAGE chargeant une Peugeot 208 sur plateau sous la pluie la nuit sur autoroute"
  }
]

function ServiceCard({ service, index }: { service: ServiceItem, index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-card border-l-4 border-primary transition-all duration-500 card-lift ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover"
          style={{ objectPosition: service.objectPosition ?? "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
      </div>

      {/* Border animation */}
      <div
        className="absolute left-0 top-0 w-1 bg-secondary transition-all duration-500 group-hover:h-full"
        style={{ height: isVisible ? "100%" : "0%" }}
      />

      <div className="relative z-10 p-6">
        {/* Number */}
        <span className="font-mono text-xs text-primary mb-4 block text-glow-red">
          {service.number}
        </span>

        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-3">
          <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors group-hover:scale-110 transform duration-300" />
          <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wide">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="services" className="bg-muted py-20 md:py-28 scanlines relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="mb-12">
          <span
            className={`font-mono text-xs text-primary tracking-wider block mb-4 transition-all duration-500 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            // INTERVENTIONS //
          </span>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-700 ${
              titleVisible ? "animate-clip-reveal" : "opacity-0"
            }`}
          >
            CE QU&apos;ON PREND EN CHARGE
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
