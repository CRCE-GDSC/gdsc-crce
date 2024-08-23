'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TypewriterEffectSmooth } from './type-effect'
import { text } from 'stream/consumers'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 4)
  const secondRow = products.slice(4, 8)
  const thirdRow = products.slice(8, 12)

  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="relative flex h-[230vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="-translate-y-[120%] mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="-translate-y-[120%] mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="-translate-y-[120%] mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  const word = [
    {
      text: 'Google',
      className: 'text-2xl md:text-7xl font-bold dark:text-white',
    },

    {
      text: 'Developer',
      className: 'text-2xl md:text-7xl font-bold dark:text-white',
    },
    {
      text: 'Student',
      className: 'text-2xl md:text-7xl font-bold dark:text-white',
    },
    {
      text: 'Clubs',
      className: 'text-2xl md:text-7xl font-bold dark:text-white',
    },
  ]

  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 pt-20 md:py-40">
      <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
        <TypewriterEffectSmooth words={word} />
      </h1>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        Join a dynamic community at GDSC FRCRCE, where students collaborate,
        learn, and innovate with cutting-edge technologies. Whether you're new
        to coding or an experienced developer, discover the tools and support
        you need to bring your ideas to life.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
        alt={product.title}
      />
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0"></div>
    </motion.div>
  )
}
