import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Banks',
  description: 'Landing Page for Banks',
  generator: 'github.com/Briankimp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
