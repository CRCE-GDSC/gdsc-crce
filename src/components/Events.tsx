'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'
import { GlobeIcon } from '@radix-ui/react-icons'
import { features, events, MarqeeEvents } from '@/data/PastEvents'
import Marquee from './ui/marqee'
import { AceGrid, AceGridCard } from './ui/ace-grid'
import { items } from '@/data/AceGridData'

export default function Events() {
  return (
    <div className="m-2 p-2">
      <p>past events bentogrid </p>
      <BentoGrid className="grid h-auto w-full auto-rows-[22rem] grid-cols-3 gap-4">
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
      <div className="bg-background relative flex h-full w-auto flex-col items-center justify-center overflow-hidden rounded-lg border py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:30s]">
          {MarqeeEvents.map((event) => (
            <BentoCard key={event.name} {...event} />
          ))}
        </Marquee>
      </div>
      <div>
        <Button
          // as="a" href="/events"
          variant="outline"
          size="2"
          className="m-2 p-2"
        >
          View All Events
        </Button>
      </div>
      <div>
        <AceGrid className="mx-auto max-w-4xl">
          {items.map((item, i) => (
            <AceGridCard
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </AceGrid>
      </div>
    </div>
  )
}
