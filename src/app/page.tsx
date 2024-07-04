'use server'
import { Theme } from '@radix-ui/themes'
import React from 'react'
import { CanvasRevealEffectDemo } from '@/components/aboutuss'

import Navbar from '@/components/Navbar'
import WhatWeDo from '@/components/WhatWeDo'
import Footerr from '@/components/footerr'
import Carousel from '@/components/final_c'

import { SparklesPreview } from '@/components/titleaboutsus'
import { SignupFormDemo } from '@/components/contactuss'
import Hero from '@/components/Hero'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex min-h-screen w-fit flex-col items-center justify-center">
      <main className="flex-grow">
        <Theme appearance="dark">
          <Navbar />
          <Hero />
          <WhatWeDo />
          <SparklesPreview />
          <CanvasRevealEffectDemo />
          <Carousel/>
          <Footerr />
        </Theme>
      </main>
    </div>
  )
}
