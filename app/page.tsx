import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProceduresSection } from "@/components/sections/procedures"
import { FormationSection } from "@/components/sections/formation"
import { InstagramSection } from "@/components/sections/instagram"
import { AppointmentsSection } from "@/components/sections/appointments"
import { ContactSection } from "@/components/sections/contact"
import { FinalCTASection } from "@/components/sections/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProceduresSection />
        <FormationSection />
        <InstagramSection />
        <AppointmentsSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
