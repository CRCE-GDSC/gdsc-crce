'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Creating a threshold effect where the animation starts after scrolling 3x the element's height
  const yTransform = useTransform(scrollYProgress, [0, 2], ['0%', '200%'])

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log('Scroll progress:', v))
  }, [scrollYProgress])

  return (
    <motion.div
      className="relative mt-[-80px] flex min-h-screen items-center justify-center overflow-y-auto"
      ref={ref}
      style={{ y: yTransform }}
    >
      <div className="flex w-1/5 items-center">
        {' '}
        <Image
          src="/gdsc-fl.png"
          alt="gdsc-logo"
          width={5000} // Adjusted width
          height={5000} // Adjusted height
        />
      </div>
      <div className="flex w-1/5 items-center">
        {' '}
        <Image
          src="/gdsc-fr.png"
          alt="gdsc-logo"
          width={5000} // Adjusted width
          height={5000} // Adjusted height
        />
      </div>
      <span className="xl:text-11xl ml-2 bg-gradient-to-r from-[#e94337] via-[#4385f5] to-[#0e9e58] bg-clip-text text-6xl font-bold text-transparent md:text-8xl lg:text-9xl">
        GDSC
      </span>
    </motion.div>
  )
}

export default Hero
