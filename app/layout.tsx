import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lael's Portfolio | Game Programmer & Backend Engineer",
  description: 'Professional portfolio of Lael, a Software & Game Programmer. High-performance systems, scalable architecture and gameplay programming.',
  generator: 'Lael',
  icons: {
    icon: '/L-icon.png'
  },
}

export const viewport: Viewport = {
  themeColor: '#1a0a2e',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
