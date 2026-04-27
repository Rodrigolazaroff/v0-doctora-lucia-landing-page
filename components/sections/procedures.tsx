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
  Baby,
  Zap,
} from "lucide-react"

const procedures = [
  {
    icon: Droplets,
    title: "Extracción de moluscos",
    description: "Tratamiento seguro y preciso para niños y adultos.",
    category: "Pediátrica",
  },
  {
    icon: Microscope,
    title: "Biopsia de piel",
    description: "Diagnóstico dermatológico bajo estrictos protocolos.",
    category: "Diagnóstico",
  },
  {
    icon: ScanEye,
    title: "Control de lunares · Mapeo 360°",
    description: "Seguimiento digital completo de lesiones pigmentadas.",
    category: "Preventiva",
  },
  {
    icon: Sparkles,
    title: "Peeling químico",
    description: "Renovación celular con resultados visibles y duraderos.",
    category: "Estética",
  },
  {
    icon: Syringe,
    title: "PRP capilar y facial",
    description: "Plasma rico en plaquetas para rejuvenecimiento y caída del cabello.",
    category: "Estética",
  },
  {
    icon: Activity,
    title: "Mesoterapia",
    description: "Microinyecciones para hidratación profunda y tratamiento capilar.",
    category: "Estética",
  },
  {
    icon: Wand2,
    title: "Microagujas",
    description: "Estimulación del colágeno para mejorar la textura de la piel.",
    category: "Estética",
  },
  {
    icon: Smile,
    title: "Toxina botulínica",
    description: "Tratamiento estético para suavizar expresiones con resultados naturales.",
    category: "Estética",
  },
]

const pathologies = [
  { icon: Baby, label: "Dermatitis atópica pediátrica" },
  { icon: Zap, label: "Rosácea" },
  { icon: Baby, label: "Piel del recién nacido" },
  { icon: Zap, label: "Verruga vulgar" },
  { icon: Droplets, label: "Molusco contagioso" },
  { icon: Sparkles, label: "Acné adolescente" },
  { icon: Wand2, label: "Skincare especializado" },
]

const categoryColors: Record<string, string> = {
  Pediátrica: "bg-blue-50 text-blue-600 border-blue-100",
  Diagnóstico: "bg-violet-50 text-violet-600 border-violet-100",
  Preventiva: "bg-green-50 text-green-600 border-green-100",
  Estética: "bg-pink-50 text-pink-600 border-pink-100",
}

export function ProceduresSection() {
  return (
    <section
      id="procedimientos"
      className="py-24 px-4 bg-muted/40 relative overflow-hidden"
      aria-labelledby="procedures-heading"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-[-80px] w-96 h-96 rounded-full bg-rose-200/40 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-[-60px] w-[400px] h-[400px] rounded-full bg-pink-100/50 blur-3xl -z-10" />

      <div className="container mx-auto">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Nuestros servicios</p>
          <h2 id="procedures-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Procedimientos & Tratamientos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atención integral de la piel en todas las etapas de la vida.
          </p>
        </AnimatedSection>

        {/* Procedures grid */}
        <AnimatedSection className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {procedures.map((procedure, index) => (
              <AnimatedSection key={procedure.title} delay={0.05 * index}>
                <div className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5 transition-all group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <procedure.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                        categoryColors[procedure.category] ?? "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {procedure.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm leading-snug">
                    {procedure.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {procedure.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Pathologies */}
        <AnimatedSection delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-2">Patologías frecuentes</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Condiciones que atendemos con diagnóstico personalizado.
            </p>
            <div className="flex flex-wrap gap-3">
              {pathologies.map((p) => (
                <span
                  key={p.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                >
                  <p.icon className="w-3.5 h-3.5" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
