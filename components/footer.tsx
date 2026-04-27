"use client"

import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/dralucianosetti",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lucia-nosetti-39368b118",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/541169323425",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:luchi_nosetti@hotmail.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer id="footer" className="py-12 px-4 bg-muted/50 border-t border-border">
      <div className="container mx-auto text-center">
        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2025 Dra. Lucia Nosetti · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
