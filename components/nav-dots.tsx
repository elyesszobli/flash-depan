"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "zone", label: "Zone" },
  { id: "why-us", label: "Pourquoi nous" },
  { id: "how-it-works", label: "Comment ça marche" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contact" },
]

export function NavDots() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Navigation sections"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative flex items-center justify-end"
          aria-label={label}
          aria-current={activeSection === id ? "true" : undefined}
        >
          <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white bg-card px-2 py-1 whitespace-nowrap">
            {label}
          </span>
          <span
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === id
                ? "bg-primary border-primary scale-125"
                : "bg-transparent border-primary/50 hover:border-primary"
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
