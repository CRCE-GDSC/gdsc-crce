'use server'
import { Theme } from '@radix-ui/themes'
import React from 'react'
import Footer from '@/components/Footer'
import Events from '@/components/Events'
import Navbar from '@/components/Navbar'
import WhatWeDo from '@/components/WhatWeDo'
import Aboutus from '@/components/Aboutus'
import { SignupFormDemo } from '@/components/contactuss'
import Hero from '@/components/Hero'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex max-h-screen flex-col items-center justify-between">
      <main className="flex-grow">
        <Theme appearance="light">
          <Hero />
          <Aboutus />
          <WhatWeDo />
          <Events />
          <SignupFormDemo />
          <Footer />
        </Theme>
      </main>
    </div>
  )
}
