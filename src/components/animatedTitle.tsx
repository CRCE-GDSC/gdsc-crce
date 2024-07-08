'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { SparklesCore } from './sparkles'

interface AnimatedTitleProps {
  children: string
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ children }) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleWidth, setTitleWidth] = useState(0)
  const gap = 1 // 3px gap between logo and text

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [children])

  const logoOffset = titleWidth / 2 + gap

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center rounded-md bg-transparent dark:bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpaged"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={50}
          className="h-full w-full hidden dark:block"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="z-20 flex flex-row items-center justify-center">
        <div className="max-h-16 max-w-16">
          <Image
            src="/assets/gdsc_logo_left.png"
            height={5000}
            width={5000}
            alt="left_logo"
            className="moveLeft z-10"
            style={{ transform: `translateX(${logoOffset}px)` }}
          />
        </div>

        <h2
          ref={titleRef}
          className="title fadeInOut text-5xl font-semibold dark:text-white text-black sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {children}
        </h2>
        <div className="max-h-[67px] max-w-[67px] -translate-y-[3px]">
          <Image
            src="/assets/gdsc_logo_right.png"
            height={5000}
            width={5000}
            alt="right_logo"
            className="moveRight z-10"
            style={{ transform: `translateX(-${logoOffset}px)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default AnimatedTitle
