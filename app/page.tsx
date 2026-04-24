import { Header } from "@/components/header"
import { EmergencyBanner } from "@/components/emergency-banner"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Zone } from "@/components/zone"
import { WhyUs } from "@/components/why-us"
import { HowItWorks } from "@/components/how-it-works"
import { FAQ } from "@/components/faq"
import { TrustBar } from "@/components/trust-bar"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { IntroOverlay } from "@/components/intro-overlay"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { NavDots } from "@/components/nav-dots"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <main className="min-h-screen">
        <Header />
        <EmergencyBanner />
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Zone />
        <SectionDivider />
        <WhyUs />
        <HowItWorks />
        <SectionDivider />
        <TrustBar />
        <FAQ />
        <SectionDivider />
        <FinalCTA />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <NavDots />
    </>
  )
}
