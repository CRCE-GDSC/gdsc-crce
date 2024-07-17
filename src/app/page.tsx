'use server'
import React from 'react'

import Carousel from '@/components/final_c'
import VerticalCarousel from '@/components/final_c_mobile'
import ResponsiveCarousel from '@/components/Events'
import WhatWeDo from '@/components/WhatWeDo'
import { TeamComponent } from '@/components/Team'

//import { HomeTeam } from '@/components/home-team'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="min-w-full flex min-h-screen flex-col items-center justify-center ">
      <WhatWeDo/>
      {/* <ResponsiveCarousel /> */}
      {/* <TeamComponent/> */}
    </div>
  )
}
