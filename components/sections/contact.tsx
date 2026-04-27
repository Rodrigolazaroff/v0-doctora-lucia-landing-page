"use client"

import { useState, type FormEvent } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Send, CheckCircle2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
      email: formData.get("email"),
      edad: formData.get("edad"),
      consulta: formData.get("consulta"),
    }

    // TODO: replace GOOGLE_SCRIPT_URL with your Apps Script deployment URL
    // const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE"
    // try {
    //   await fetch(GOOGLE_SCRIPT_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   })
    // } catch (error) {
    //   console.error("Error submitting form:", error)
    // }

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("[v0] Form data:", data)

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Envianos tu consulta
          </h2>
          <p className="text-muted-foreground text-lg">
            Completá el formulario y te respondemos a la brevedad.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ¡Gracias!
                </h3>
                <p className="text-muted-foreground">
                  Tu consulta fue enviada. Te contactamos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                      Nombre <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="apellido" className="text-sm font-medium text-foreground">
                      Apellido <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      placeholder="Tu apellido"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Correo electrónico <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="edad" className="text-sm font-medium text-foreground">
                      Edad <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="edad"
                      name="edad"
                      type="number"
                      required
                      min="0"
                      max="120"
                      placeholder="Tu edad"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="consulta" className="text-sm font-medium text-foreground">
                    Consulta o pregunta <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="consulta"
                    name="consulta"
                    required
                    rows={4}
                    placeholder="Escribí tu consulta aquí..."
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>

        {/* Gallery placeholders */}
        <AnimatedSection delay={0.2} className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Galería de imágenes
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-square rounded-xl border-2 border-dashed border-primary/30 bg-muted/50 flex flex-col items-center justify-center p-4"
              >
                <Camera className="w-8 h-8 text-primary/40 mb-2" />
                <p className="text-sm text-muted-foreground font-medium">
                  [FOTO_GALERIA_{index}]
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">Próximamente</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
