"use client"

import { Phone } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const faqs = [
  {
    question: "En combien de temps intervenez-vous ?",
    answer: "J'interviens en moyenne en 30 minutes sur Lens et les communes environnantes. Le délai peut varier selon votre localisation exacte dans le Pas-de-Calais."
  },
  {
    question: "Êtes-vous disponible la nuit et le week-end ?",
    answer: "Oui, je suis disponible 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Vous pouvez m'appeler à toute heure."
  },
  {
    question: "Comment connaître le prix avant l'intervention ?",
    answer: "Je vous communique un devis gratuit par téléphone avant de me déplacer. Aucune mauvaise surprise à l'arrivée, le prix est fixé avant l'intervention."
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "J'interviens sur Lens et toutes les communes du Pas-de-Calais (62) : Liévin, Hénin-Beaumont, Béthune, Arras, Carvin, et bien d'autres. Appelez pour vérifier."
  },
  {
    question: "J'ai mis le mauvais carburant, que faire ?",
    answer: "Ne démarrez surtout pas le véhicule ! Appelez-moi immédiatement. Je viens sécuriser votre véhicule et le transporter vers un garage pour vidange du réservoir."
  },
  {
    question: "Puis-je choisir le garage où vous remorquez ma voiture ?",
    answer: "Oui, je vous emmène vers le garage de votre choix. Vous restez maître de la décision, je m'adapte à vos besoins."
  },
  {
    question: "Mon assurance peut-elle prendre en charge le dépannage ?",
    answer: "Certaines assurances couvrent le dépannage. Je vous fournis une facture détaillée que vous pourrez transmettre à votre assurance pour remboursement."
  }
]

export function FAQ() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Sticky CTA Card with background */}
          <div className="lg:col-span-2">
            <div 
              ref={leftRef}
              className={`lg:sticky lg:top-40 relative overflow-hidden border-l-4 border-primary transition-all duration-700 ${
                leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
                  alt="Intérieur de cabine de dépanneuse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/80" />
              </div>

              <div className="relative z-10 p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                  UNE QUESTION ?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Vous avez une question sur mes services ou besoin d&apos;un dépannage urgent ? 
                  Appelez directement, je réponds personnellement.
                </p>
                <a
                  href="tel:0603712838"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-serif font-bold text-lg px-6 py-4 transition-all w-full justify-center btn-clip-hover animate-cta-glow"
                >
                  <Phone className="w-5 h-5" />
                  <span>06 03 71 28 38</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right - FAQ Accordion */}
          <div 
            ref={rightRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className={`bg-card border-0 border-l-4 border-border data-[state=open]:border-primary px-6 transition-all duration-300 ${
                    rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <AccordionTrigger className="font-serif text-left text-white hover:text-primary hover:no-underline py-5 text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
