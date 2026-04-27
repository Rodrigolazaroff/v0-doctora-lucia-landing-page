"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Award, Heart, MapPin, GraduationCap } from "lucide-react"

const stats = [
  { value: "9+", label: "Años de experiencia" },
  { value: "2", label: "Especialidades" },
  { value: "8", label: "Procedimientos" },
  { value: "100%", label: "Atención personalizada" },
]

const highlights = [
  {
    icon: Award,
    title: "9 años de experiencia",
    description: "Formación continua y práctica clínica en dermatología pediátrica y estética.",
  },
  {
    icon: GraduationCap,
    title: "Especialista certificada",
    description: "Mat. Nac. 166.497 — formación de posgrado en dermatología y medicina estética.",
  },
  {
    icon: Heart,
    title: "Enfoque integral",
    description: "Cuidado de la piel desde bebés hasta adultos, uniendo salud y estética.",
  },
  {
    icon: MapPin,
    title: "Consultorio en Recoleta",
    description: "Larrea 1012, Recoleta, CABA. Atención los martes y viernes.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-4 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-[-100px] w-96 h-96 rounded-full bg-pink-100/50 blur-3xl -z-10" />
      <div className="container mx-auto">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Sobre mí</p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Médica especialista comprometida<br className="hidden md:block" /> con tu salud
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinando rigor científico y calidez humana en cada consulta.
          </p>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-8 text-center">
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bio + photo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection className="space-y-5">
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
              Paralelamente, me especializo en medicina estética, trabajando en la prevención y
              tratamiento del envejecimiento cutáneo, buscando resultados naturales que respeten
              la armonía y la expresión de cada paciente.
            </p>
            <p className="text-foreground/80 font-medium leading-relaxed">
              Creo en una medicina cercana, donde cada consulta sea un espacio de confianza,
              escucha y acompañamiento.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex justify-center">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-accent to-secondary/30 flex items-center justify-center border border-border">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">[FOTO_PERFIL]</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Foto de perfil</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={0.08 * index}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
