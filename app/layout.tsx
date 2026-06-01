import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'IPSM Nigeria - Institute of Proficient Safety Measures',
  description: 'Building Safety Excellence in Nigeria. IPSM offers professional safety certifications, diplomas, and membership programs for safety practitioners.',
  keywords: ['safety', 'certification', 'Nigeria', 'IPSM', 'occupational safety', 'professional development'],
  authors: [{ name: 'IPSM Nigeria' }],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
