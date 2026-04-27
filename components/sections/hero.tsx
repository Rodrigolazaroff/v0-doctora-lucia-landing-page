"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const WHATSAPP_URL =
  "https://wa.me/541169323425?text=Hola%20Dra.%20Lucia%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20para%20solicitar%20un%20turno."

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <AnimatedSection className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Dra. Lucia Nosetti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Médica especialista en Dermatología Pediátrica y Medicina Estética
              <span className="block mt-2 text-base text-muted-foreground/80">
                Mat. Nac. 166.497
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Pedir turno por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#sobre-mi">
                  <ArrowDown className="h-5 w-5" />
                  Conocé más
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Photo placeholder */}
          <AnimatedSection delay={0.2} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent to-secondary/30 p-1">
                <div className="w-full h-full rounded-[1.8rem] bg-muted flex items-center justify-center border-2 border-dashed border-primary/30">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      [FOTO_PRINCIPAL]
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Foto profesional
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary/20 blur-xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
