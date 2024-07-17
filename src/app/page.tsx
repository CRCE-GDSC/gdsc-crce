'use server'
import React from 'react'
import ResponsiveCarousel from '@/components/Events'
import TeamIntro from '@/components/teamIntro/TeamIntro'
import Hero from '@/components/Hero'

//import { HomeTeam } from '@/components/home-team'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center">
        <Hero />
        <ResponsiveCarousel />
        <TeamIntro />
      </div>
  )
}
