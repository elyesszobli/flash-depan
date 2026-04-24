"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SectionDivider() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 })

  return (
    <div ref={ref} className="relative h-8 overflow-hidden">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-[2px] bg-primary"
          style={{
            width: isVisible ? "100%" : "0%",
            transition: "width 0.7s ease-out",
          }}
        />
      </div>
    </div>
  )
}
