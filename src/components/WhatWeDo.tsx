'use client'
import React, { useEffect, useState } from 'react'
import TeamIntro from './teamIntro/TeamIntro'
import { devices } from 'constants/theme'

const WhatWeDo: React.FC = () => {
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const [isMedium, setIsMedium] = useState<boolean>(false)
  const [isLarge, setIsLarge] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuerySm = window.matchMedia(devices.sm)
    const mediaQueryMd = window.matchMedia(devices.md)
    const mediaQueryLg = window.matchMedia(devices.lg)

    setIsSmall(mediaQuerySm.matches)
    setIsMedium(mediaQueryMd.matches)
    setIsLarge(mediaQueryLg.matches)

    const handleMediaQueryChangeSm = (event: MediaQueryListEvent) => {
      setIsSmall(event.matches)
    }
    const handleMediaQueryChangeMd = (event: MediaQueryListEvent) => {
      setIsMedium(event.matches)
    }
    const handleMediaQueryChangeLg = (event: MediaQueryListEvent) => {
      setIsLarge(event.matches)
    }

    mediaQuerySm.addEventListener('change', handleMediaQueryChangeSm)
    mediaQueryMd.addEventListener('change', handleMediaQueryChangeMd)
    mediaQueryLg.addEventListener('change', handleMediaQueryChangeLg)

    return () => {
      mediaQuerySm.removeEventListener('change', handleMediaQueryChangeSm)
      mediaQueryMd.removeEventListener('change', handleMediaQueryChangeMd)
      mediaQueryLg.removeEventListener('change', handleMediaQueryChangeLg)
    }
  }, [])

  return (
    <div id="services">
      <TeamIntro isMobile={isLarge} />
    </div>
  )
}

export default WhatWeDo
