"use client"

import { Phone } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useCountUp } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [shake, setShake] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  // Count up animations for stats
  const { count: delayCount, ref: delayRef } = useCountUp(30, 1500, true)
  
  useEffect(() => {
    // Trigger animations after intro
    const timer = setTimeout(() => setIsLoaded(true), 1700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Glitch effect on "AUTO LENS"
    if (isLoaded) {
      const timer = setTimeout(() => setGlitchActive(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  useEffect(() => {
    // Parallax scroll handler
    const handleScroll = () => {
      if (heroRef.current) {
        setScrollY(window.scrollY)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Phone shake every 8 seconds
    const interval = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
    >
      {/* Background Image with Ken Burns */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/hero-truck.png"
          alt="Dépanneuse rouge DEPANNAGE 24/7 transportant un SUV sur autoroute française de nuit sous la pluie"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        {/* Red tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(180,0,0,0.15)' }} />
        {/* Gradient to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay z-[1]" />

      {/* Moving red glow blob */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-[1]"
        style={{
          transform: `translate(${Math.sin(scrollY * 0.01) * 50}px, ${Math.cos(scrollY * 0.01) * 30}px)`,
        }}
      />

      {/* Diagonal slash decorations */}
      <div 
        className={`absolute top-40 left-8 font-serif text-6xl md:text-8xl text-primary/30 font-bold select-none z-[2] ${
          isLoaded ? "animate-clip-reveal" : "opacity-0"
        }`}
        aria-hidden="true"
        style={{ animationDelay: "0.8s" }}
      >
        /////
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div 
              className={`font-mono text-xs text-primary mb-6 tracking-wider transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              [ DÉPANNEUR LOCAL — LENS 62 — PAS-DE-CALAIS ]
              <span className="animate-pulse">_</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="font-serif font-bold tracking-tight mb-6">
              <span 
                className={`block text-5xl md:text-7xl lg:text-8xl text-white text-glow-red transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                DÉPANNAGE
              </span>
              <span 
                className={`block text-5xl md:text-7xl lg:text-8xl text-primary transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                } ${glitchActive ? "animate-glitch" : ""}`}
                style={{ transitionDelay: "0.5s" }}
              >
                AUTO LENS
              </span>
              <span 
                className={`block text-3xl md:text-4xl lg:text-5xl text-muted-foreground mt-2 transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                }`}
                style={{ transitionDelay: "0.7s" }}
              >
                24H/24
              </span>
            </h1>
            
            {/* Description */}
            <p 
              className={`text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              En panne sur la route ? Flash Dépann 62 intervient en 30 minutes 
              sur Lens et toutes les communes du Pas-de-Calais. Devis gratuit par téléphone, 
              sans surprise, sans intermédiaire.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1.1s" }}
            >
              <a
                href="tel:0603712838"
                className={`inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white font-serif font-bold text-lg px-8 py-4 transition-all animate-cta-glow btn-clip-hover ${
                  shake ? "animate-phone-shake" : ""
                }`}
              >
                <Phone className="w-5 h-5" />
                <span>APPELER — 06 03 71 28 38</span>
              </a>
              <a
                href="tel:0603712838"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-background font-serif font-bold text-lg px-8 py-4 transition-colors"
              >
                <Phone className="w-5 h-5" />
                RAPPEL IMMÉDIAT
              </a>
            </div>
          </div>
          
          {/* Right - Dispatch Panel */}
          <div 
            className={`relative transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div className="bg-card/90 backdrop-blur-sm border-l-4 border-primary p-6 md:p-8">
              {/* Status Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <span className="w-3 h-3 bg-primary rounded-full pulse-dot" />
                <span className="font-mono text-sm text-primary tracking-wider">
                  UNITÉ DISPONIBLE
                </span>
              </div>
              
              {/* Stats Grid */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">DÉLAI</span>
                  <span ref={delayRef as React.RefObject<HTMLSpanElement>} className="text-white font-bold text-glow-red">
                    {delayCount} MIN
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">SERVICE</span>
                  <span className="text-white font-bold">24H/24 · 7J/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">DEVIS</span>
                  <span className="text-white font-bold">GRATUIT / TEL</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">ZONE</span>
                  <span className="text-white font-bold">LENS + 62</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">CONTACT</span>
                  <a href="tel:0603712838" className="text-primary font-bold hover:text-secondary transition-colors animate-phone-glow">
                    06 03 71 28 38
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
