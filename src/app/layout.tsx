import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Bonheur_Royale } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
const royal = Bonheur_Royale({weight:"400", subsets: ['latin']})



export const metadata: Metadata = {
  title: 'Ammar Aamir',
  description: 'Personal Portfolio of Ammar Aamir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className}`} >{children}</body>
    </html>
  )
}
