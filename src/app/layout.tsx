import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Mynavbar from '@/components/Navbar/Mynavbar'
import Myfooter from '@/components/Myfooter'



const inter = Inter({ subsets: ['latin'] })



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
      <body className= {`${inter.className} bg-myblack text-mywhite`} >
        <header className='sticky top-0 z-50'><Mynavbar></Mynavbar></header>
        {children}
        <Myfooter></Myfooter>
      </body>
    </html>
  )
}
