"use client"

import { useEffect } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function InstagramSection() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="instagram" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Seguime en Instagram
          </h2>
          <a
            href="https://www.instagram.com/dralucianosetti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            @dralucianosetti
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex justify-center mb-8">
          <div className="w-full max-w-[400px]">
            {/* Phone mockup frame */}
            <div className="bg-card rounded-[2.5rem] p-3 shadow-xl border border-border">
              <div className="bg-muted rounded-[2rem] overflow-hidden">
                {/* Instagram embed */}
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DP3zU3jADq6/?igsh=cGIydjE2dTdmamN3"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: 0,
                    margin: 0,
                    maxWidth: "100%",
                    minWidth: "100%",
                    padding: 0,
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a
              href="https://www.instagram.com/dralucianosetti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Ver más en Instagram
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
