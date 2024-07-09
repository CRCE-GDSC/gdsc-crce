'use client'
import React, { useState, useEffect } from 'react'
import VerticalCarousel from './final_c_mobile'
import Carousel from './final_c'

function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 500)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile ? <Carousel /> : <VerticalCarousel />
}

export default ResponsiveCarousel