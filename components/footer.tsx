"use client"

import { Shield, MapPin, Clock, Mail } from "lucide-react"
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { MdOutlineEmail } from "react-icons/md"

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dralucianosetti",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/lucia-nosetti-39368b118",
    label: "LinkedIn",
    color: "hover:bg-[#0077B5]",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/541169323425",
    label: "WhatsApp",
    color: "hover:bg-[#25D366]",
  },
  {
    icon: MdOutlineEmail,
    href: "mailto:luchi_nosetti@hotmail.com",
    label: "Email",
    color: "hover:bg-[#0078D4]",
  },
]

const quickLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#procedimientos", label: "Procedimientos" },
  { href: "#formacion", label: "Formación" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-[#3d1f28] text-background" aria-label="Pie de página">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Dra. Lucia Nosetti</p>
                <p className="text-[10px] text-primary/70">Dermatología · Medicina Estética</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Médica especialista en Dermatología Pediátrica y Medicina Estética. Mat. Nac. 166.497.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Navegación</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm">Consultorio</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                Larrea 1012, Recoleta, CABA
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Martes 9–12 hs · 17–19 hs<br />Viernes 9–12 hs · 17–19 hs</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                luchi_nosetti@hotmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2025 Dra. Lucia Nosetti · Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            Recoleta, Ciudad Autónoma de Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
