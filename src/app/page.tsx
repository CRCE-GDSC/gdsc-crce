'use server'
import React from 'react'
import { CanvasRevealEffectDemo } from '@/components/aboutuss'
import Spline from '@splinetool/react-spline';
import WhatWeDo from '@/components/WhatWeDo'
import Carousel from '@/components/final_c'
import Hero from '@/components/Hero'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex min-h-screen w-fit flex-col items-center justify-center">
      <Spline className='h-screen' scene="/assets/gdsc.splinecode" />
      <main className="flex-grow">
        {/* <Hero /> */}
        <CanvasRevealEffectDemo />
        <WhatWeDo />
        <Carousel />
        
      </main>
    </div>
  )
}
