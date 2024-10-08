/*
import React from 'react'
import VerticalCarousel from './final_c_mobile'
import Carousel from './final_c'

function ResponsiveCarousel() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-inherit dark:bg-black"
      id="events"
    >
      <div className="w-full">
        
        <div className="hidden lg:block">
          <Carousel />
        </div>

        
        <div className="lg:hidden">
          <VerticalCarousel />
        </div>
      </div>

      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => (window.location.href = '/allevents')}
      >
        Go to All Events
      </button>
    </div>
  )
}

export default ResponsiveCarousel*/

'use client'
import { useEffect, useState } from 'react'
import Carousel from './final_c'
import VerticalCarousel from './final_c_mobile'

function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600) // Adjust this breakpoint as needed
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="flex vn:h-screen w-full flex-col items-center justify-center bg-transparent dark:bg-black"
      id="events"
    >
      <div className="my-16">
        <p className="h3 darkText dark:text-white ta-center hero-text font-semibold">Events</p>
      </div>
      {isMobile ? <VerticalCarousel /> : <Carousel />}
      <button
        className="mt-4 rounded-full bg-blue-700 px-4 py-2 font-serif text-xl duration-200 ease-in-out text-white hover:scale-110 hover:bg-blue-500"
        onClick={() =>
          window.open(
            'https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai-india/'
          )
        }
      >

        Go to All Events
      </button>
    </div>
  )
}
export default ResponsiveCarousel
