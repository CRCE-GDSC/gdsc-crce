'use client'
import { useState } from 'react'
import { EvervaultCard, Icon } from './uif/evervault-card'
import { BentoCard, BentoGrid } from './uif/bento-grid'
import { DividerHorizontalIcon, GlobeIcon } from '@radix-ui/react-icons/dist'
import BentoCardSingle from './uif/bento-card'

export default function MyComponent() {
  return (
    <div>
      <div className="items start > * px-space-x-6 > * m-2 m-8 flex max-w-min flex-row space-x-2 rounded-3xl bg-gray-900 p-6">
        <div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
          <EvervaultCard imgsrc="/postman_event_poster.webp" />
        </div>
        <div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
          <EvervaultCard imgsrc="/gdsc-f.png" />
        </div>
        <div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
          <EvervaultCard imgsrc="/gdsc-f.png" />
        </div>
      </div>

      {/* <div className="items start > * px-space-x-6 > * m-2 m-8 flex max-w-min flex-row space-x-2 rounded-3xl bg-gray-900 p-6">
        { events.map((event)=>( 
        <><div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
            <BentoCardSingle key={event.name} {...event} />
          </div><div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
              <BentoCardSingle key={event.name} {...event} />
            </div><div className="relative m-2 mx-auto flex h-[20rem] max-w-sm flex-col items-start p-4 px-1">
              <BentoCardSingle key={event.name} {...event} />
            </div>
        </>
        )) }
      </div> */}

      <BentoGrid className="lg:grid-rows-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  )
}

const features = [
  {
    Icon: GlobeIcon,
    name: 'Event 1',
    description: 'in seminar hall',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard imgsrc="/gdsc-f.png" className="h-[800px]" />
      </div>
    ),
    className: 'lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3',
  },
  {
    Icon: GlobeIcon,
    name: 'event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[700px]"
        />
      </div>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
  },
  {
    Icon: GlobeIcon,
    name: 'event 3',
    description: 'in seminar hall',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-screen"
        />
      </div>
    ),
    className: 'lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 4',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="max-h-screen"
        />
      </div>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 5',
    description: 'in seminar hall',
    href: '/',
    cta: 'Learn more',
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 6',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-5',
  },
]

const events = [
  {
    Icon: GlobeIcon,
    name: 'Event 1',
    description: <div className=""> heyy </div>,
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1',
  },
]
