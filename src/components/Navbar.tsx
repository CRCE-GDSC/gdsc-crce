'use client'
import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import NavbarDesktop from './NavbarDesktop'
import Sidebar from './sidebar/Sidebar'

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return targetReached
}

const Navbar = () => {
  const isBreakpoint = useMediaQuery(768)
  return isBreakpoint ? <Sidebar /> : <NavbarDesktop />
}

export default Navbar
