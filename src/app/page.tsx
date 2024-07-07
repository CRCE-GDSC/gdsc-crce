'use server'
import { Theme } from '@radix-ui/themes'
import React from 'react'
import { CanvasRevealEffectDemo } from '@/components/aboutuss'

import WhatWeDo from '@/components/WhatWeDo'

import Carousel from '@/components/final_c'
import Title from '@/components/Title'

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
        {/* <Hero /> */}
        <SparklesPreview />
        <CanvasRevealEffectDemo />
        <WhatWeDo />
        <Carousel />
      </main>
    </div>
  )
}
