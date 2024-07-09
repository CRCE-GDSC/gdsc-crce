'use client'
import React from 'react'
import VerticalCarousel from './final_c_mobile'
import Carousel from './final_c'

function ResponsiveCarousel() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full">
        {/* Hide on small screens, show on large screens and above */}
        <div className="hidden lg:block">
          <Carousel />
        </div>

        {/* Show on small screens, hide on large screens and above */}
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

export default ResponsiveCarousel

