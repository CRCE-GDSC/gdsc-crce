'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'
import { GlobeIcon } from '@radix-ui/react-icons'
import { features , events , MarqeeEvents } from '@/data/PastEvents'
import Marquee from './ui/marqee'

export default function MainComponent() {
  return (

    <div className="m-2 p-2">
      <p>past events bentogrid </p>
      <BentoGrid className="grid h-auto w-full grid-cols-3 auto-rows-[22rem] gap-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <p>past events bentogrid </p>
      <BentoGrid className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <BentoCard key={event.name} {...event} />
        ))}
      </BentoGrid>
      <p> past events marqee</p>
      <div className="relative flex h-full w-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {MarqeeEvents.map((event) => (
          <BentoCard key={event.name} {...event} />
        ))}
      </Marquee>
      </div>
      
    </div>
  )
}