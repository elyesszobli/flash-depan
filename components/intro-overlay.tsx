"use client"

import { useEffect, useState } from "react"

export function IntroOverlay() {
  const [phase, setPhase] = useState<"line" | "logo" | "tagline" | "exit" | "done">("line")

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setPhase("done")
      return
    }

    // Check if intro was already shown
    if (sessionStorage.getItem("intro-shown")) {
      setPhase("done")
      return
    }

    const timers = [
      setTimeout(() => setPhase("logo"), 400),
      setTimeout(() => setPhase("tagline"), 1000),
      setTimeout(() => setPhase("exit"), 1400),
      setTimeout(() => {
        setPhase("done")
        sessionStorage.setItem("intro-shown", "true")
      }, 1600),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  if (phase === "done") return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-transform duration-300 ${
        phase === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Red line sweep */}
      <div
        className={`absolute top-1/2 left-0 h-[3px] bg-primary transition-all duration-400 ease-out ${
          phase === "line" ? "w-full" : "w-full"
        }`}
        style={{
          transform: phase === "line" ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: "left",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Logo */}
      <div
        className={`flex items-baseline gap-2 transition-all duration-500 ${
          phase === "logo" || phase === "tagline" || phase === "exit"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8"
        }`}
      >
        {"FLASH DÉPANN".split("").map((letter, i) => (
          <span
            key={i}
            className="font-serif text-4xl md:text-6xl font-bold text-white"
            style={{
              opacity: phase === "logo" || phase === "tagline" || phase === "exit" ? 1 : 0,
              transform:
                phase === "logo" || phase === "tagline" || phase === "exit"
                  ? "translateY(0)"
                  : "translateY(-20px)",
              transition: `all 0.3s ease-out ${i * 0.03}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
        <span
          className="font-serif text-4xl md:text-6xl font-bold text-primary"
          style={{
            opacity: phase === "logo" || phase === "tagline" || phase === "exit" ? 1 : 0,
            transform:
              phase === "logo" || phase === "tagline" || phase === "exit"
                ? "translateY(0)"
                : "translateY(-20px)",
            transition: "all 0.3s ease-out 0.36s",
          }}
        >
          62
        </span>
      </div>

      {/* Tagline */}
      <p
        className={`font-mono text-sm md:text-base text-muted-foreground mt-4 transition-all duration-500 ${
          phase === "tagline" || phase === "exit"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        DÉPANNAGE AUTO 24H/24
      </p>
    </div>
  )
}
