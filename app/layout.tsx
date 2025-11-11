import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Data Structures Visualizer',
  description: 'Interactive data structures learning and visualization tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
