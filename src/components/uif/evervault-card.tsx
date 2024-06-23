/* eslint-disable @next/next/no-img-element */
'use client'
import { useMotionValue } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { useMotionTemplate, motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '../../lib/utils'

export const EvervaultCard = ({
  text,
  imgsrc,
  className,
}: {
  text?: string
  imgsrc?: any
  className?: string
}) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(2000)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(2000)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        'relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5',
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex h-max w-max items-center justify-center rounded-full text-4xl">
            <div className="absolute h-full w-full rounded-full bg-black/[0.8] blur-sm" />
            <span className="z-30 text-black text-white">
              <div className="m-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src={imgsrc}
                  alt="GDSC LOGO"
                  width={500}
                  height={600}
                  className="h-auto w-full object-cover" // Make image responsive
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
