'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { SparklesCore } from './sparkles'

interface AnimatedTitleProps {
  children: string
}

const Title: React.FC<AnimatedTitleProps> = ({ children }) => {
  const titleRef = useRef(null)
  const [titleWidth, setTitleWidth] = useState(0)
  const gap = 1 // 3px gap between logo and text

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [children])

  const logoOffset = titleWidth / 2 + gap

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center bg-inherit ">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpaged"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={50}
          className="hidden h-full w-full dark:block"
          particleColor="#FFFFFF"
        />
      </div>
      <div className=" flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft z-10"
          style={{ transform: `translateX(${logoOffset}px)` }}
        />
        <h2 ref={titleRef} className="title fadeInOut">
          {children}
        </h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={52}
          width={52}
          alt="right_logo"
          className="moveRight z-10"
          style={{ transform: `translateX(-${logoOffset}px)` }}
        />
      </div>
    </div>
  )
}

export default Title
