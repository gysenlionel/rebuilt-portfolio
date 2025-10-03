import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Karla,
  Pacifico,
  Source_Sans_3,
} from 'next/font/google'
import './globals.css'

import LayoutComponent from './LayoutComp'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const source = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin'],
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

const karla = Karla({
  weight: ['300', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-karla',
})

export const metadata: Metadata = {
  title: 'Portfolio - Gysen Lionel',
  description: 'Portfolio - Gysen Lionel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${pacifico.variable} ${karla.variable} ${geistMono.variable} ${source.variable} antialiased`}
      >
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  )
}
