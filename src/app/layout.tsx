import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading'
import Footerr from '@/components/footerr'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Suspense } from 'react'
import { Roboto } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
// import Navbar from '@components/Navbar'
// import Sidebar from '@components/sidebar/Sidebar'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

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
    <html lang="en" className="scroll-smooth ">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <Suspense fallback={<Loading />}>
        <body className={` min-w-fit ${ roboto.className }`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footerr />
          </ThemeProvider>
        </body>
      </Suspense>
    </html>
  )
}
