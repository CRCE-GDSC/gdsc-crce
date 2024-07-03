'use client'
import React from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

import Image from 'next/image'

export default function StackedCards(): JSX.Element {
  return (
    <div className="mb-10">
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
      <div className="flex items-center justify-center">
        <StackedCarousel
          autoRotate={false}
          showSummary={false}
          cardClassName="w-auto h-96 bg-neutral-900 rounded-xl shadow-lg p-4 m-4"
          containerClassName="w-96 h-96 shadow-lg px-10 mr-10 ml-3 "
          leftButton={
            <button className="rounded-lg bg-black p-2 text-white">
              <img src="/gdsc-fl.png" height={15} width={18} alt="" />
            </button>
          }
          rightButton={
            <button className="rounded-lg bg-black p-2 text-white">
              <img src="/gdsc-fr.png" height={15} width={18} alt="" />
            </button>
          }
        >
          <Image
            key="Image1"
            src="/mathday.jpeg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image2"
            src="/mathday.jpeg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image3"
            src="/mathday.jpeg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image4"
            src="/mathday.jpeg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image5"
            src="/postman_event_poster.webp"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image6"
            src="/ideation.jpg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image7"
            src="/Bit-N-Build.jpg"
            alt="events"
            height={200}
            width={200}
          />
          <Image
            key="Image8"
            src="/HackOver3.0.jpg"
            alt="events"
            height={200}
            width={200}
          />
        </StackedCarousel>
      </div>
      <div className="mx-[45%] p-4">
        <Button
          variant="ghost"
          asChild
          size="2"
          className="pointer-events-auto flex w-fit items-center rounded-2xl border border-neutral-600 p-2 transition-all duration-300 ease-in-out hover:-translate-y-3 hover:bg-neutral-800 hover:shadow-md"
          onClick={() => {
            window.open('/allevents')
          }}
        >
          <p className="flex items-center">
            View All Events
            <ArrowRightIcon className="ml-2 h-6 w-7" />
          </p>
        </Button>
      </div>
    </div>
  )
}
