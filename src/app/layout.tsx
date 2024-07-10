import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading'
import Footerr from '@/components/footerr'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Suspense } from 'react'
import { SparklesCore } from '../components/sparkles'
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
    <html lang="en" className='scroll-smooth'>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <Suspense fallback={<Loading />}>
        <body className={roboto.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SparklesCore
              id="tsparticlesfullpaged-dark"
              background="transparent"
              minSize={0.6}
              maxSize={0.9}
              particleDensity={10}
              className="fixed inset-0 -z-10 hidden h-full w-full bg-black dark:block"
              particleColor="#FFFFFF"
            />
            <SparklesCore
              id="tsparticlesfullpaged-light"
              background="transparent"
              minSize={0.6}
              maxSize={0.8}
              particleDensity={10}
              className="fixed inset-0 -z-10 h-full w-full bg-white dark:hidden"
              particleColor="#000000"
            />
            <Navbar />
            {children}
            <Footerr />
          </ThemeProvider>
        </body>
      </Suspense>
    </html>
  )
}
