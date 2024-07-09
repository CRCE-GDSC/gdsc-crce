'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Point {
  id: number
  text: string
  image: string
}

const InteractiveCircle: React.FC = () => {
  const [points] = useState<Point[]>([
    { id: 1, text: 'Cloud Computing', image: '/Cloud Avatar.gif' },
    { id: 2, text: 'App Development', image: '/app dev.gif' },
    { id: 3, text: 'Web Development', image: '/web dev.gif' },
    { id: 4, text: 'Machine Learning', image: '/machine learning.gif' },
    { id: 5, text: 'Cyber Security', image: '/cyber-security.gif' },
    { id: 6, text: 'Blockchain', image: '/blockchain.webp' },
  ])
  const [activePoint, setActivePoint] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && circleRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect()
        const circleHeight = circleRef.current.offsetHeight
        const scrollProgress =
          (window.innerHeight - top) / (height - circleHeight)

        // Adjust the calculation to create a delay for the first point
        const adjustedProgress = Math.max(
          0,
          (scrollProgress * points.length - 0.5) / (points.length - 1)
        )
        const newActivePoint = Math.floor(
          Math.min(points.length - 1, adjustedProgress * (points.length - 1))
        )

        setActivePoint(newActivePoint)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [points.length])

  const handlePointClick = (index: number) => {
    setActivePoint(index)
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop
      const scrollTo =
        containerTop +
        (index / (points.length - 1)) *
          (containerRef.current.offsetHeight - window.innerHeight)
      window.scrollTo({ top: scrollTo })
    }
  }

  return (
    <div className={`${isMobile ? 'min-h-screen mb-0 pb-0   ' : ''}`}>
      <div
        ref={containerRef}
        className="relative mb-0 pb-0"
        style={{ height: `${points.length * 100}vh` }}
      >
        <div
          ref={circleRef}
          className="sticky top-0 flex h-screen w-fit -translate-x-16 -translate-y-32 items-center justify-center md:translate-x-0 md:translate-y-0"
        >
          <div
            className={`relative ${
              isMobile
                ? 'flex h-full w-full'
                : 'h-[40rem] w-[40rem] rounded-full border-2 border-gray-500'
            }`}
          >
            {isMobile && (
              <div className="absolute left-3 top-1/4 h-1/2 w-px bg-gray-500" />
            )}
            {points.map((point, index) => {
              const angle = (360 / points.length) * index - 90
              const radian = (angle * Math.PI) / 180
              const x = Math.cos(radian) * 20
              const y = Math.sin(radian) * 20

              return (
                <div
                  key={point.id}
                  className={`absolute transform ${
                    isMobile
                      ? '-translate-y-1/2'
                      : '-translate-x-1/2 -translate-y-1/2'
                  } cursor-pointer`}
                  style={{
                    top: isMobile
                      ? `${25 + (index / (points.length - 1)) * 50}%`
                      : `calc(50% + ${y}rem)`,
                    left: isMobile ? '4px' : `calc(50% + ${x}rem)`,
                  }}
                  onClick={() => handlePointClick(index)}
                >
                  <div
                    className={`h-4 w-4 rounded-full ${
                      activePoint === index ? 'bg-blue-500' : 'bg-gray-400'
                    }`}
                  />
                  <div
                    className={`absolute ${
                      isMobile
                        ? 'left-6 top-1'
                        : `${x > 0 ? 'left-full ml-2' : 'right-full mr-2'} top-1/2`
                    } transform ${
                      isMobile ? '-translate-y-1/2' : '-translate-y-1/2'
                    } z-10 whitespace-nowrap rounded bg-gray-900 p-2 shadow-md dark:bg-white ${
                      activePoint === index ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300 md:hover:opacity-20`}
                  >
                    <p className="text-lg font-semibold text-white dark:text-black">
                      {point.text}
                    </p>
                  </div>
                </div>
              )
            })}
            {isMobile && (
              <div className="flex w-fit items-center justify-center mb-0 pb-0">
                <div className="relative ml-32 h-40 w-40 mb-0 pb-0 ">
                  <Image
                    src={points[activePoint].image}
                    alt={points[activePoint].text}
                    layout="fill"
                    objectFit="contain"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
          {!isMobile && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative h-[30rem] w-[30rem]">
                <Image
                  src={points[activePoint].image}
                  alt={points[activePoint].text}
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InteractiveCircle
