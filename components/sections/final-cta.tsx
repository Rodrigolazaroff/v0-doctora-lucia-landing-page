"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/541169323425?text=Hola%20Dra.%20Lucia%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20para%20solicitar%20un%20turno."

export function FinalCTASection() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      aria-label="Llamada a la acción para solicitar turno"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="container mx-auto text-center relative">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-sm font-medium">Atención martes y viernes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground text-balance">
            ¿Querés cuidar tu piel?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
            Escribinos por WhatsApp y coordinamos tu turno en Recoleta, CABA.
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg font-semibold px-8"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar turno ahora
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
