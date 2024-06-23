import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Loading from './loading'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })
import Navbar from "@components/Navbar";
import Sidebar from "@components/sidebar/Sidebar";

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
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  )
}
