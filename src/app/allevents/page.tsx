'use client'

import { useEffect } from 'react'

const AllEventsPage: React.FC = () => {
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
          window.location.href = '/allevents/events/mobile'
        } else {
          window.location.href = '/allevents/events/desktop'
        }
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return null // This component doesn't render anything
}

export default AllEventsPage