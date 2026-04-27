"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Award, Heart, MapPin } from "lucide-react"

const stats = [
  {
    icon: Award,
    title: "9 años de experiencia",
    description: "Formación continua y práctica clínica",
  },
  {
    icon: Heart,
    title: "Dermatología pediátrica + Medicina estética",
    description: "Cuidado integral de la piel",
  },
  {
    icon: MapPin,
    title: "Atención en Recoleta, CABA",
    description: "Consultorio privado",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Sobre mí
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio text */}
          <AnimatedSection className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Soy médica especialista en dermatología pediátrica y medicina estética, dedicada al
              cuidado integral de la piel en todas las etapas de la vida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acompaño a bebés, niños y adolescentes en el cuidado de su piel desde los primeros
              días, abordando tanto patologías frecuentes como cuadros más complejos, siempre con
              un enfoque cálido, respetuoso y personalizado para cada familia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Paralelamente, me especializo en medicina estética, donde trabajo en la prevención y
              el tratamiento del envejecimiento cutáneo, buscando resultados naturales que respeten
              la armonía y la expresión de cada paciente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi práctica se basa en la actualización constante, la evidencia científica y una
              mirada integral de la piel, entendiendo que salud y estética van de la mano.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium text-foreground/80">
              Creo en una medicina cercana, donde cada consulta sea un espacio de confianza,
              escucha y acompañamiento.
            </p>
          </AnimatedSection>

          {/* Photo placeholder */}
          <AnimatedSection delay={0.2} className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-muted flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary/50"
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
                <p className="text-sm text-muted-foreground font-medium">[FOTO_PERFIL]</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Foto de perfil</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.title} delay={0.1 * index}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
