"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/541169323425?text=Hola%20Dra.%20Lucia%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20para%20solicitar%20un%20turno."

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Querés pedir un turno?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Escribinos por WhatsApp y coordinamos.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 text-foreground"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Pedir turno ahora
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
