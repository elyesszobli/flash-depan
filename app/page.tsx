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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'En combien de temps intervenez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "J'interviens en moyenne en 30 minutes sur Lens et les communes environnantes. Le délai peut varier selon votre localisation exacte dans le Pas-de-Calais.",
      },
    },
    {
      '@type': 'Question',
      name: 'Êtes-vous disponible la nuit et le week-end ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, je suis disponible 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Vous pouvez m\'appeler à toute heure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment connaître le prix avant l\'intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Je vous communique un devis gratuit par téléphone avant de me déplacer. Aucune mauvaise surprise à l\'arrivée, le prix est fixé avant l\'intervention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est votre zone d\'intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "J'interviens sur Lens et toutes les communes du Pas-de-Calais (62) : Liévin, Hénin-Beaumont, Béthune, Arras, Carvin, et bien d'autres. Appelez pour vérifier.",
      },
    },
    {
      '@type': 'Question',
      name: "J'ai mis le mauvais carburant, que faire ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ne démarrez surtout pas le véhicule ! Appelez-moi immédiatement. Je viens sécuriser votre véhicule et le transporter vers un garage pour vidange du réservoir.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je choisir le garage où vous remorquez ma voiture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, je vous emmène vers le garage de votre choix. Vous restez maître de la décision, je m'adapte à vos besoins.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mon assurance peut-elle prendre en charge le dépannage ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Certaines assurances couvrent le dépannage. Je vous fournis une facture détaillée que vous pourrez transmettre à votre assurance pour remboursement.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
