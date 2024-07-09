'use server'
import React from 'react'
import { CanvasRevealEffectDemo } from '@/components/aboutuss'
import Spline from '@splinetool/react-spline'
import WhatWeDo from '@/components/WhatWeDo'
import Carousel from '@/components/final_c'
import CarouselMobile from '@/components/final_c_mobile'
import Hero from '@/components/Hero'
import Title from '@/components/Title'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex min-h-screen w-fit flex-col items-center justify-center">
      <div className="h-screen w-full items-center justify-center">
        <Spline
          scene="/assets/gdsc.splinecode"
          className="min-h-screen w-full"
        />
      </div>
      <main className="flex-grow">
        {/* <Hero /> */}
        <Title />
        <CanvasRevealEffectDemo />
        <WhatWeDo />

        {/* {typeof window !== 'undefined' && window.innerWidth <= 768 ? <CarouselMobile /> : <Carousel />} */}
        <CarouselMobile />
      </main>
    </div>
  )
}
