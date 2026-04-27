"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Clock, Star, Award } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/541169323425?text=Hola%20Dra.%20Lucia%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20para%20solicitar%20un%20turno."

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Presentación de la Dra. Lucia Nosetti"
    >
      {/* Light blush gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-white" />
      {/* Blurred blobs */}
      <div className="absolute top-10 right-[-60px] w-[500px] h-[500px] rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-20 left-[-80px] w-96 h-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-rose-100/60 blur-3xl" />

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text column */}
            <div className="text-center lg:text-left order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-rose-100 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-primary text-sm font-medium">Consultorio en Recoleta · CABA</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-balance">
                Tu piel, en las mejores manos
              </h1>

              <p className="text-primary font-semibold text-lg md:text-xl mb-3 max-w-xl mx-auto lg:mx-0">
                Dra. Lucia Nosetti
              </p>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
                Médica especialista en <span className="text-foreground font-semibold">Dermatología Pediátrica</span> y{" "}
                <span className="text-foreground font-semibold">Medicina Estética</span>. Atención personalizada para toda la familia.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-lg font-semibold"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Solicitar turno
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/40 text-foreground hover:bg-rose-50 gap-2"
                >
                  <a href="#sobre-mi">
                    Conocé más
                  </a>
                </Button>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">9+</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Años de experiencia</p>
                </div>
                <div className="w-px bg-border self-stretch hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Especialidades</p>
                </div>
                <div className="w-px bg-border self-stretch hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">8</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Procedimientos</p>
                </div>
              </div>
            </div>

            {/* Photo column */}
            <div className="order-2 flex justify-center relative">
              {/* Main photo placeholder */}
              <div className="relative w-72 h-80 md:w-80 md:h-96">
                <div className="w-full h-full rounded-3xl bg-white/80 backdrop-blur-sm border border-rose-100 shadow-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">[FOTO_PRINCIPAL]</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">Foto profesional</p>
                  </div>
                </div>

                {/* Floating badge — experience */}
                <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experiencia</p>
                    <p className="text-sm font-bold text-foreground">9 años</p>
                  </div>
                </div>

                {/* Floating badge — rating */}
                <div className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Mat. Nac.</p>
                    <p className="text-sm font-bold text-foreground">166.497</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking bar */}
      <div className="relative px-4 pb-10 pt-4">
        <div className="bg-white shadow-xl rounded-2xl max-w-3xl mx-auto border border-rose-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="flex items-center gap-3 px-6 py-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Días de atención</p>
                <p className="text-sm font-semibold text-foreground">Martes y Viernes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Ubicación</p>
                <p className="text-sm font-semibold text-foreground">Recoleta, CABA</p>
              </div>
            </div>
            <div className="px-6 py-4 flex items-center">
              <Button asChild className="w-full gap-2 shadow-sm">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Solicitar turno
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
