import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/components/ui/Navbar'
import Providers from '@/components/ui/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuizzifyAi',
  description: 'AI quiz app',
}

export default function asyncRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased min-h-screen pt-16')}>
       <Providers>
       <Navbar />
        {children}
        </Providers>
        </body>
    </html>
  )
}
