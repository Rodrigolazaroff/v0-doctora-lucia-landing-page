"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/541169323425?text=Hola%20Dra.%20Lucia%2C%20me%20comunico%20desde%20su%20p%C3%A1gina%20web%20para%20solicitar%20un%20turno."

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#procedimientos", label: "Procedimientos" },
  { href: "#formacion", label: "Formación" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-foreground text-sm">Dra. Lucia Nosetti</span>
              <span className="text-[10px] text-primary font-medium tracking-wide hidden sm:block">
                Dermatología · Medicina Estética
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="gap-1.5 shadow-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Pedir turno
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-white bg-primary rounded-md text-center"
                >
                  Pedir turno por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
