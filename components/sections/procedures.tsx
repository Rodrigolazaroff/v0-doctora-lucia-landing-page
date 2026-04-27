"use client"

import { AnimatedSection } from "@/components/animated-section"
import {
  Droplets,
  Microscope,
  ScanEye,
  Sparkles,
  Syringe,
  Activity,
  Wand2,
  Smile,
} from "lucide-react"

const procedures = [
  {
    icon: Droplets,
    title: "Extracción de moluscos",
    description: "Tratamiento seguro y preciso para niños y adultos.",
  },
  {
    icon: Microscope,
    title: "Biopsia de piel",
    description: "Diagnóstico dermatológico bajo estrictos protocolos.",
  },
  {
    icon: ScanEye,
    title: "Control de lunares · Mapeo 360°",
    description: "Seguimiento digital completo de lesiones pigmentadas.",
  },
  {
    icon: Sparkles,
    title: "Peeling químico",
    description: "Renovación celular con resultados visibles y duraderos.",
  },
  {
    icon: Syringe,
    title: "PRP capilar y facial",
    description: "Plasma rico en plaquetas para rejuvenecimiento y caída del cabello.",
  },
  {
    icon: Activity,
    title: "Mesoterapia",
    description: "Microinyecciones para hidratación profunda y tratamiento capilar.",
  },
  {
    icon: Wand2,
    title: "Microagujas",
    description: "Estimulación del colágeno para mejorar la textura de la piel.",
  },
  {
    icon: Smile,
    title: "Toxina botulínica",
    description: "Tratamiento estético para suavizar expresiones con resultados naturales.",
  },
]

const pathologies = [
  "Dermatitis atópica pediátrica",
  "Rosácea",
  "Piel del recién nacido",
  "Verruga vulgar",
  "Molusco contagioso",
  "Acné adolescente",
  "Skincare especializado",
]

export function ProceduresSection() {
  return (
    <section id="procedimientos" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Procedimientos & Tratamientos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Patologías y condiciones que tratamos
          </p>
        </AnimatedSection>

        {/* Procedures grid */}
        <AnimatedSection className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Procedimientos en consultorio
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {procedures.map((procedure, index) => (
              <AnimatedSection key={procedure.title} delay={0.05 * index}>
                <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all group h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <procedure.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1 text-sm">
                    {procedure.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {procedure.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Pathologies */}
        <AnimatedSection delay={0.2}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Patologías frecuentes</h3>
          <div className="flex flex-wrap gap-3">
            {pathologies.map((pathology) => (
              <span
                key={pathology}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:bg-secondary/80 transition-colors"
              >
                {pathology}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
