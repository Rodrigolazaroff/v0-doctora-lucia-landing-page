import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Dra. Lucia Nosetti | Dermatología Pediátrica y Medicina Estética',
  description: 'Médica especialista en Dermatología Pediátrica y Medicina Estética. Atención personalizada en Recoleta, CABA. Turnos por WhatsApp.',
  keywords: ['dermatología pediátrica', 'medicina estética', 'dermatóloga', 'Buenos Aires', 'Recoleta', 'piel', 'bebés', 'niños'],
  authors: [{ name: 'Dra. Lucia Nosetti' }],
  openGraph: {
    title: 'Dra. Lucia Nosetti | Dermatología Pediátrica y Medicina Estética',
    description: 'Médica especialista en Dermatología Pediátrica y Medicina Estética. Atención personalizada en Recoleta, CABA.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-background">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
