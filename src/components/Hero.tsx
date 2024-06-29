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

  const xTransformImages = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    ['0px', '200px']
  )
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
  const xTransformText = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ['0px', '200px']
  )

  // Outward fade and scale effect for images
  const xTransformImagesOut = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '200px']
  )
  const xTransformImagesOutMd = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '150px']
  )
  const xTransformImagesOutSm = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '100px']
  )
  const opacityImagesOut = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])
  const scaleImagesOut = useTransform(scrollYProgress, [0.5, 0.8], [1, 1.5])

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log('Scroll progress:', v))
  }, [scrollYProgress])

  return (
    <motion.div
      className="mt-[-80px] flex min-h-dvh items-center justify-center overflow-y-auto bg-white md:min-h-screen"
      ref={ref}
      style={{ y: yTransform }}
    >
      <div className="flex w-1/5 items-center">
        <motion.div
          style={{
            x: xTransformImages,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden lg:block"
        >
          <Image
            src="/gdsc-fl.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesMd,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden md:block lg:hidden"
        >
          <Image
            src="/gdsc-fl.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesSm,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="block md:hidden"
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
          style={{
            x: xTransformImages,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden lg:block"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesMd,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden md:block lg:hidden"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesSm,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="block md:hidden"
        >
          <Image
            src="/gdsc-fr.png"
            alt="gdsc-logo"
            width={5000}
            height={5000}
          />
        </motion.div>
      </div>
      <div className="xl:text-12xl gradient-text animate-gradientText ml-2 flex space-x-2 text-6xl font-bold text-transparent md:text-8xl lg:text-9xl">
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
