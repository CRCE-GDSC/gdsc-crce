import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading'
import Footerr from '@/components/footerr'
import Navbar from '@/components/Navbar'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })
// import Navbar from '@components/Navbar'
// import Sidebar from '@components/sidebar/Sidebar'

export const metadata: Metadata = {
  title: 'GDSC CRCE',
  description: 'Official site of GDSC FR.CRCE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footerr />
        </body>
      </Suspense>
    </html>
  )
}
