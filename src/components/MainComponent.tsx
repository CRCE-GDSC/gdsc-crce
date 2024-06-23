'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'
import { GlobeIcon } from '@radix-ui/react-icons'
import { features } from '@/data/PastEvents'

export default function MainComponent() {
  return (
<div>
          <BentoGrid className=" h-screen">
              {features.map((feature) => (
                  <BentoCard key={feature.name} {...feature} />
              ))}
          </BentoGrid>
      </div>
      
  )
}