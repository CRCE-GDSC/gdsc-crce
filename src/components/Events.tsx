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
import { useState, useEffect } from 'react'
import VerticalCarousel from './final_c_mobile'
import Carousel from './final_c'

function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024) // Adjust this breakpoint as needed
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-inherit dark:bg-black"
      id="events"
    >
      <div className="mb-20">
        <h1 className="h2">Events</h1>
      </div>
      {isMobile ? <VerticalCarousel /> : <Carousel />}
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
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
