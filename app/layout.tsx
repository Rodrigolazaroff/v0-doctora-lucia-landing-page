import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
})

const BASE_URL = 'https://www.dralucianosetti.com.ar'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Dra. Lucia Nosetti | Dermatóloga Pediátrica y Medicina Estética · Recoleta, CABA',
  description: 'Dra. Lucia Nosetti — médica especialista en Dermatología Pediátrica y Medicina Estética. 9 años de experiencia. Consultorio en Recoleta, CABA. Turnos por WhatsApp.',
  keywords: [
    'dermatóloga pediátrica Buenos Aires',
    'medicina estética Recoleta',
    'dermatología niños CABA',
    'dermatóloga Recoleta',
    'Lucia Nosetti dermatóloga',
    'peeling químico Buenos Aires',
    'toxina botulínica Recoleta',
    'PRP facial Buenos Aires',
    'control de lunares CABA',
    'dermatitis atópica niños',
    'molusco contagioso tratamiento',
  ],
  authors: [{ name: 'Dra. Lucia Nosetti' }],
  creator: 'Dra. Lucia Nosetti',
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Dra. Lucia Nosetti | Dermatóloga Pediátrica y Medicina Estética',
    description: 'Médica especialista en Dermatología Pediátrica y Medicina Estética. 9 años de experiencia. Consultorio en Recoleta, CABA.',
    type: 'website',
    locale: 'es_AR',
    url: BASE_URL,
    siteName: 'Dra. Lucia Nosetti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Lucia Nosetti | Dermatóloga Pediátrica y Medicina Estética',
    description: 'Médica especialista en Dermatología Pediátrica y Medicina Estética. Consultorio en Recoleta, CABA.',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4ce72',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dra. Lucia Nosetti',
  description: 'Médica especialista en Dermatología Pediátrica y Medicina Estética.',
  medicalSpecialty: ['Dermatology', 'Pediatric Dermatology', 'Aesthetic Medicine'],
  url: BASE_URL,
  telephone: '+541169323425',
  email: 'luchi_nosetti@hotmail.com',
  sameAs: [
    'https://www.instagram.com/dralucianosetti',
    'https://www.linkedin.com/in/lucia-nosetti-39368b118',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Larrea 1012',
    addressLocality: 'Recoleta',
    addressRegion: 'CABA',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '09:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '17:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '17:00',
      closes: '19:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios dermatológicos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Dermatología pediátrica' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Medicina estética' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Peeling químico' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'PRP facial y capilar' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Toxina botulínica' } },
      { '@type': 'Offer', itemOffered: { '@type': 'MedicalProcedure', name: 'Control de lunares y mapeo 360°' } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
