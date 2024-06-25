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

  const yTransform = useTransform(scrollYProgress, [0, 2], ['0%', '200%'])

  const opacityC = useTransform(scrollYProgress, [0.2, 0.3], [1, 0])
  const xTransformC = useTransform(scrollYProgress, [0.2, 0.3], ['0%', '100%'])

  const opacityS = useTransform(scrollYProgress, [0.25, 0.35], [1, 0])
  const xTransformS = useTransform(
    scrollYProgress,
    [0.25, 0.35],
    ['0%', '100%']
  )

  const opacityD = useTransform(scrollYProgress, [0.3, 0.4], [1, 0])
  const xTransformD = useTransform(scrollYProgress, [0.3, 0.4], ['0%', '100%'])

  const opacityG = useTransform(scrollYProgress, [0.35, 0.5], [1, 0])
  const xTransformG = useTransform(scrollYProgress, [0.35, 0.5], ['0%', '100%'])

  // Move images and text to the right based on scroll progress
  const xTransformImages = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ['0px', '200px']
  )
  const xTransformText = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ['0px', '200px']
  )

  // Responsive transforms
  const xTransformImagesMd = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ['0px', '110px']
  )
  const xTransformImagesSm = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ['0px', '80px']
  )

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log('Scroll progress:', v))
  }, [scrollYProgress])

  return (
    <motion.div
      className="mt-[-80px] flex min-h-screen items-center justify-center overflow-y-auto"
      ref={ref}
      style={{ y: yTransform }}
    >
      <div className="flex w-1/5 items-center">
        <motion.div
          style={{ x: xTransformImages }}
          className="sm:hidden md:hidden lg:block"
        >
          <Image
            src="/gdsc-fl.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{ x: xTransformImagesMd }}
          className="sm:hidden md:block lg:hidden"
        >
          <Image
            src="/gdsc-fl.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{ x: xTransformImagesSm }}
          className="sm:block md:hidden lg:hidden"
        >
          <Image
            src="/gdsc-fl.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
      </div>
      <div className="flex w-1/5 items-center">
        <motion.div
          style={{ x: xTransformImages }}
          className="sm:hidden md:hidden lg:block"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{ x: xTransformImagesMd }}
          className="sm:hidden md:block lg:hidden"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{ x: xTransformImagesSm }}
          className="sm:block md:hidden lg:hidden"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
      </div>
      <div className="xl:text-11xl ml-2 flex space-x-2 bg-gradient-to-r from-[#e94337] via-[#4385f5] to-[#0e9e58] bg-clip-text text-6xl font-bold text-transparent md:text-8xl lg:text-9xl">
        <motion.span style={{ opacity: opacityG, x: xTransformG }}>
          G
        </motion.span>
        <motion.span style={{ opacity: opacityD, x: xTransformD }}>
          D
        </motion.span>
        <motion.span style={{ opacity: opacityS, x: xTransformS }}>
          S
        </motion.span>
        <motion.span style={{ opacity: opacityC, x: xTransformC }}>
          C
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Hero
