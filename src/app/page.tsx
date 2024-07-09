'use server'
import React from 'react'
import { CanvasRevealEffectDemo } from '@/components/aboutuss'
import Spline from '@splinetool/react-spline'
import WhatWeDo from '@/components/WhatWeDo'
import {SparklesCore}  from '../components/sparkles'
import Carousel from '@/components/final_c'
import VerticalCarousel from '@/components/final_c_mobile'
import Hero from '@/components/Hero'
import Title from '@/components/Title'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex min-h-screen w-fit flex-col items-center justify-center">
      <SparklesCore
        id="tsparticlesfullpaged-dark"
        background="transparent"
        minSize={0.6}
        maxSize={0.9}
        particleDensity={10}
        className="fixed inset-0 hidden h-full w-full dark:block -z-10 bg-black"
        particleColor="#FFFFFF"
      />
      <SparklesCore
        id="tsparticlesfullpaged-light"
        background="transparent"
        minSize={0.6}
        maxSize={0.8}
        particleDensity={10}
        className="fixed inset-0 h-full w-full dark:hidden"
        particleColor="#000000"
      />
      <div className="h-screen w-full items-center justify-center">
        <Spline
          scene="/assets/gdsc.splinecode"
          className="min-h-screen w-full"
        />
      </div>
      <main className="flex-grow">
        <CanvasRevealEffectDemo />
        <WhatWeDo />

        {typeof window !== 'undefined' && window.innerWidth <= 768 ?  <VerticalCarousel /> : <Carousel />}
       
      </main>
    </div>
  )
}
