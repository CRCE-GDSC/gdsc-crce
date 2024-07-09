'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { SparklesCore } from './sparkles'

interface AnimatedTitleProps {
  children: string
}

const Title: React.FC<AnimatedTitleProps> = ({ children }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const [titleWidth, setTitleWidth] = useState(0)
  const gap = 1 // 3px gap between logo and text

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [children])

  const logoOffset = titleWidth / 2 + gap

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center bg-white dark:bg-black">
      <SparklesCore
        id="tsparticlesfullpaged-dark"
        background="transparent"
        minSize={0.6}
        maxSize={0.9}
        particleDensity={30}
        className="absolute inset-0 hidden h-full w-full dark:block"
        particleColor="#FFFFFF"
      />
      <SparklesCore
        id="tsparticlesfullpaged-light"
        background="transparent"
        minSize={0.6}
        maxSize={0.8}
        particleDensity={30}
        className="absolute inset-0 h-full w-full dark:hidden"
        particleColor="#000000"
      />
      <div className="relative z-10 flex items-center justify-center">
        <Image
          src="/assets/gdsc_logo_left.png"
          height={50}
          width={50}
          alt="left_logo"
          className="moveLeft"
          style={{ transform: `translateX(${logoOffset}px)` }}
        />
        <h2 ref={titleRef} className="title fadeInOut dark:text-white">
          {children}
        </h2>
        <Image
          src="/assets/gdsc_logo_right.png"
          height={52}
          width={52}
          alt="right_logo"
          className="moveRight"
          style={{ transform: `translateX(-${logoOffset}px)` }}
        />
      </div>
    </div>
  )
}

export default Title
