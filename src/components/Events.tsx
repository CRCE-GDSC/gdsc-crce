'use client'
import React, { useState, useEffect } from 'react'
import VerticalCarousel from './final_c_mobile'
import Carousel from './final_c'

function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth >= 400)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isMobile ? <Carousel /> : <VerticalCarousel />}
      <button
        className="bg-blue-500 hover:bg-blue-700 dark:text-white font-bold py-2 px-4 rounded light:text-black"
        onClick={() => (window.location.href = '/allevents')}
      >
        Go to All Events
      </button>
    </div>
  );
}

export default ResponsiveCarousel;