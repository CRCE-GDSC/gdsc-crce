'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SparklesCore } from './sparkles'
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })
  const gap = 1 // 3px gap between logo and text

  useEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth)
    }
  }, [children])

  const logoOffset = titleWidth / 2 + gap

  return (
    <div
      ref={ref}
      className="relative flex h-[15rem] w-full flex-col items-center justify-center bg-white dark:bg-inherit"
    >
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: inView ? -10 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/gdsc_logo_left.png"
            height={50}
            width={50}
            alt="left_logo"
            style={{ transform: `translateX(${logoOffset}px)` }}
          />
        </motion.div>
        <div className={`${poppins.className} title fadeInOut dark:text-white`}>
          <h2 ref={titleRef} className="text-xx-large">
            {children}
          </h2>
        </div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: inView ? 10 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/gdsc_logo_right.png"
            height={52}
            width={52}
            alt="right_logo"
            style={{ transform: `translateX(-${logoOffset}px)` }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Title
