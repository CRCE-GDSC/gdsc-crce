'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'
import { GlobeIcon } from '@radix-ui/react-icons'
import { features , events } from '@/data/PastEvents'

export default function MainComponent() {
  return (
    <div className="">
      <BentoGrid className="grid h-screen w-screen grid-cols-3 grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <BentoGrid className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <BentoCard key={event.name} {...event} />
        ))}
      </BentoGrid>
    </div>
  )
}