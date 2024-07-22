'use server'
import AboutUs from '@/components/Aboutus'
import ResponsiveCarousel from '@/components/Events'
import { HomeTeam } from '@/components/home-team'
import DotPattern from '@/components/ui/dot-pattern'
import WhatWeDo from '@/components/WhatWeDo'
import { cn } from '@/lib/utils'

//import { HomeTeam } from '@/components/home-team'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="bg-white dark:bg-black">
      <DotPattern
        className={cn(
          'bg-inherit [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] dark:bg-black'
        )}
      />
      {/* <Hero /> */}
      <AboutUs />
      <WhatWeDo />
      <div className="my-10">
        <ResponsiveCarousel />
      </div>
      <HomeTeam />
    </div>
  )
}
