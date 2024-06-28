'use client'
import { useState } from 'react'
import { BentoCard, BentoGrid } from './ui/bentogrid'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { events, MarqeeEvents } from '@/data/PastEvents'
import Marquee from './ui/marqee'
import { AceGrid, AceGridCard, MarqueeCard } from './ui/ace-grid'
import { items } from '@/data/AceGridData'
import Image from 'next/image'

export default function Events() {
  return (
    <div className="m-2 p-2 w-screen">
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
      <div className="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg py-2 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:10s]">
          {/* {MarqeeEvents.map((event) => (
            <BentoCard key={event.name} {...event} />
          ))} */}
          {MarqeeEvents.map((event, i) => (
            <MarqueeCard
              key={i}
              title={event.title}
              description={event.description}
              image={event.image}
              href={event.href}
              className={event.className}
            />
          ))}
        </Marquee>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft z-10 translate-x-[100px]"
        />
        <h2 className="title fadeInOut">EVENTS</h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={50}
          width={50}
          alt="right_logo"
          className="moveRight z-10 -translate-x-[100px]"
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
              className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            />
          ))}
        </AceGrid>
        <div className="mx-[40%] p-4">
          <Button
            variant="ghost"
            asChild
            size="2"
            className="pointer-events-auto flex w-fit items-center rounded-2xl border border-neutral-600 p-2 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:bg-neutral-800 hover:shadow-md"
            onClick={() => {
              console.log('View All Events')
            }}
          >
            <p className="flex items-center">
              View All Events
              <ArrowRightIcon className="ml-2 h-6 w-7" />
            </p>
          </Button>
        </div>
      </div>
    </div>
  )
}
