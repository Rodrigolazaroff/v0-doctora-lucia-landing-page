"use client"

import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap, Building2 } from "lucide-react"

const timeline = [
  {
    year: "2017",
    title: "Médica",
    institution: "Universidad del Salvador",
    logo: "LOGO_USAL",
  },
  {
    year: "2018–2021",
    title: "Residencia de Pediatría",
    institution: "Hospital Alemán, CABA",
    logo: "LOGO_HOSP_ALEMAN",
  },
  {
    year: "2022–2025",
    title: "Residencia de Dermatología Pediátrica",
    institution: "Hospital Ramos Mejía, CABA",
    logo: "LOGO_RAMOS_MEJIA",
  },
]

const experience = [
  "Hospital Alemán (sala pediátrica y guardia)",
  "Sanatorio San José (médica de planta)",
  "Clínica Zabala (guardia pediátrica)",
  "Ministerio de Salud CABA · Subsecretaría de Discapacidad",
]

export function FormationSection() {
  return (
    <section id="formacion" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Formación & Trayectoria
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={0.1 * index}>
                <div className="relative pl-16 pb-12 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm" />

                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                      {/* Logo placeholder */}
                      <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center border border-dashed border-primary/30 shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary/50" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                        <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                        <p className="text-xs text-muted-foreground/60 mt-2">[{item.logo}]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Previous experience */}
        <AnimatedSection delay={0.3}>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Experiencia profesional previa
          </h3>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl px-6 py-4 shadow-sm border border-border flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
