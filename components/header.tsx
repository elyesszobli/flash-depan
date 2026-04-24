"use client"

import { Phone, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#zone", label: "Zone" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b-[3px] border-primary transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md h-14" 
          : "bg-background h-16"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1">
          <span className={`font-serif font-bold text-white tracking-tight transition-all duration-300 ${
            isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}>
            FLASH DÉPANN
          </span>
          <span className={`font-serif font-bold text-primary transition-all duration-300 ${
            isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}>
            62
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Center - Availability Status */}
        <div className={`hidden lg:flex items-center gap-2 font-mono text-xs text-white bg-card px-3 py-1.5 border border-border transition-all duration-300 ${
          isScrolled ? "scale-90" : "scale-100"
        }`}>
          <span className="w-2 h-2 bg-primary rounded-full pulse-dot" />
          <span>DISPONIBLE MAINTENANT</span>
        </div>

        {/* CTA Button */}
        <a
          href="tel:0603712838"
          className={`hidden sm:flex items-center gap-2 bg-primary hover:bg-secondary text-white font-serif font-bold transition-all btn-clip-hover ${
            isScrolled ? "text-sm px-3 py-1.5" : "text-sm md:text-base px-4 py-2"
          }`}
        >
          <Phone className="w-4 h-4" />
          <span className="animate-phone-glow">06 03 71 28 38</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden flex items-center justify-center w-10 h-10 text-white"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-16 right-0 bottom-0 w-64 bg-card border-l border-border transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-sm text-white hover:text-primary transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                transitionDelay: isMobileMenuOpen ? `${index * 0.05}s` : "0s",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:0603712838"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-serif font-bold text-base px-4 py-3 transition-colors"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionDelay: isMobileMenuOpen ? "0.2s" : "0s",
            }}
          >
            <Phone className="w-5 h-5" />
            APPELER
          </a>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
