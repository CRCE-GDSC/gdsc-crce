'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

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
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center bg-white dark:bg-inherit">
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
