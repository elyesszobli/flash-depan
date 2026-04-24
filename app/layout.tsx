import type { Metadata, Viewport } from 'next'
import { Oswald, Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  title: 'Flash Dépann 62 — Dépannage Auto Lens 24h/24 | Remorquage Pas-de-Calais',
  description: 'Dépannage auto et remorquage à Lens et dans tout le Pas-de-Calais (62). Intervention en 30 minutes, 24h/24, 7j/7. Devis gratuit par téléphone. Appelez le 06 03 71 28 38.',
  keywords: ['dépannage auto Lens', 'remorquage 62', 'dépanneur Pas-de-Calais', 'panne voiture Lens', 'remorquage 24h/24'],
  openGraph: {
    title: 'Flash Dépann 62 — Dépannage Auto Lens 24h/24',
    description: 'Intervention en 30 minutes sur Lens et tout le Pas-de-Calais. Appelez le 06 03 71 28 38.',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
