'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'

import { events, MarqeeEvents } from '@/data/PastEvents'
import Marquee from './ui/marqee'
import { AceGrid, AceGridCard } from './ui/ace-grid'
import { items } from '@/data/AceGridData'
import Image from 'next/image'

export default function Events() {
  return (
    <div className="m-2 p-2">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft z-10 translate-x-[155px]"
        />
        <h2 className="title fadeInOut">UPCOMING EVENTS</h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={52}
          width={52}
          alt="right_logo"
          className="moveRight z-10 -translate-x-[155px]"
        />
      </div>
      <BentoGrid className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <BentoCard key={event.name} {...event} />
        ))}
      </BentoGrid>

      {/* past events marqee */}
      <div className="flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft z-10 translate-x-[127px]"
        />
        <h2 className="title fadeInOut">EVENT GALLERY</h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={52}
          width={52}
          alt="right_logo"
          className="moveRight z-10 -translate-x-[127px]"
        />
      </div>
      <div className="bg-background relative flex h-full w-auto flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {MarqeeEvents.map((event) => (
            <BentoCard key={event.name} {...event} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {MarqeeEvents.map((event) => (
            <BentoCard key={event.name} {...event} />
          ))}
        </Marquee>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft z-10 translate-x-[107px]"
        />
        <h2 className="title fadeInOut">PAST EVENTS</h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={50}
          width={50}
          alt="right_logo"
          className="moveRight z-10 -translate-x-[107px]"
        />
      </div>
      <div>
        <AceGrid className="mx-auto max-w-4xl">
          {items.map((item, i) => (
            <AceGridCard
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
              href={item.href}
              cta={item.cta}
              icon={item.icon}
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </AceGrid>
      </div>
    </div>
  )
}
