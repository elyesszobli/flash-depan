import type { Metadata, Viewport } from 'next'
import { Oswald, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// ⚠️ Remplace par ton vrai domaine si différent
const SITE_URL = 'https://flashdepann62.fr'

const oswald = Oswald({
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Flash Dépann 62 — Dépannage Auto Lens 24h/24 | Remorquage Pas-de-Calais',
  description: 'Dépannage auto et remorquage à Lens et dans tout le Pas-de-Calais (62). Intervention en 30 minutes, 24h/24, 7j/7. Devis gratuit par téléphone. Appelez le 06 03 71 28 38.',
  keywords: ['dépannage auto Lens', 'remorquage 62', 'dépanneur Pas-de-Calais', 'panne voiture Lens', 'remorquage 24h/24', 'dépannage Hénin-Beaumont', 'dépannage Liévin', 'dépanneur autoroute 62'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Flash Dépann 62 — Dépannage Auto Lens 24h/24',
    description: 'Intervention en 30 minutes sur Lens et tout le Pas-de-Calais. Appelez le 06 03 71 28 38.',
    url: '/',
    siteName: 'Flash Dépann 62',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero-truck.png',
        width: 1920,
        height: 1080,
        alt: 'Flash Dépann 62 — Dépannage auto Lens Pas-de-Calais 24h/24',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash Dépann 62 — Dépannage Auto Lens 24h/24',
    description: 'Intervention en 30 minutes sur Lens et tout le Pas-de-Calais. Appelez le 06 03 71 28 38.',
    images: ['/images/hero-truck.png'],
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Flash Dépann 62',
  description: 'Dépannage auto et remorquage à Lens et dans tout le Pas-de-Calais (62). Intervention en 30 minutes, 24h/24, 7j/7.',
  url: SITE_URL,
  telephone: '+33603712838',
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lens',
    postalCode: '62300',
    addressRegion: 'Hauts-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.4297,
    longitude: 2.8277,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    { '@type': 'City', 'name': 'Lens' },
    { '@type': 'City', 'name': 'Liévin' },
    { '@type': 'City', 'name': 'Hénin-Beaumont' },
    { '@type': 'City', 'name': 'Béthune' },
    { '@type': 'City', 'name': 'Arras' },
    { '@type': 'City', 'name': 'Carvin' },
    { '@type': 'AdministrativeArea', 'name': 'Pas-de-Calais' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de dépannage',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dépannage batterie déchargée' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remorquage sur plateau' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Panne moteur et démarrage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Changement de pneu crevé' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Erreur de carburant' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport véhicule accidenté' } },
    ],
  },
  priceRange: '€€',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <head>
        <link rel="preload" href="/images/hero-truck.png" as="image" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
