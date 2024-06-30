'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedGradientHero from './ui/animated-gradient-hero'
import { cn } from '@/lib/utils'

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

  const xTransformImagesOutLeft = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '-200px']
  )
  const xTransformImagesOutLeftMd = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '-150px']
  )
  const xTransformImagesOutLeftSm = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '-100px']
  )

  const xTransformImagesOutRight = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '200px']
  )
  const xTransformImagesOutRightMd = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ['0px', '150px']
  )
  const xTransformImagesOutRightSm = useTransform(
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
          <motion.div
            style={{
              x: xTransformImagesOutLeft,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fl.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesMd,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden md:block lg:hidden"
        >
          <motion.div
            style={{
              x: xTransformImagesOutLeftMd,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fl.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesSm,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="block md:hidden"
        >
          <motion.div
            style={{
              x: xTransformImagesOutLeftSm,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fl.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
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
          <motion.div
            style={{
              x: xTransformImagesOutRight,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fr.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesMd,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="hidden md:block lg:hidden"
        >
          <motion.div
            style={{
              x: xTransformImagesOutRightMd,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fr.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            x: xTransformImagesSm,
            scale: scaleImagesOut,
            opacity: opacityImagesOut,
          }}
          className="block md:hidden"
        >
          <motion.div
            style={{
              x: xTransformImagesOutRightSm,
              scale: scaleImagesOut,
              opacity: opacityImagesOut,
            }}
          >
            <Image
              src="/gdsc-fr.png"
              alt="gdsc-logo"
              width={5000}
              height={5000}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="ml-2 flex space-x-2 text-6xl font-bold text-black md:text-8xl lg:text-9xl">
        <AnimatedGradientHero>
          <div
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#4385f5] via-[#e04033] to-[#903de3] bg-[length:var(--bg-size)_100%] bg-clip-text font-semibold text-transparent transition-colors duration-500`
            )}
          >
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
        </AnimatedGradientHero>
      </div>
    </motion.div>
  )
}

export default Hero
