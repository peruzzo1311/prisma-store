import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'

import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prisma Store',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='pt-BR'
      suppressHydrationWarning
    >
      <body className={openSans.className}>
        <ModalProvider />

        {children}
      </body>
    </html>
  )
}
