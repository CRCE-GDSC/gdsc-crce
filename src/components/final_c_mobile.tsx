'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

interface CarouselItem {
  id: string
  title: string
  description: string
  image: string
  cta: string
  href: string
}

const carouselItems: CarouselItem[] = [
  {
    id: '1',
    title: 'ML Workshop',
    description: 'A new way to learn and grow in the ML industry',
    image: '/event_assets/event1.jpeg',
    cta: 'Learn More',
    href: '/events/mlworkshop',
  },
  {
    id: '2',
    title: 'HackOver 3.0',
    description: 'Annual 24-hour hackathon with exciting challenges',
    image: '/event_assets/HackOver3.0.jpg',
    cta: 'Register Now',
    href: '/events/hackover',
  },
  {
    id: '3',
    title: 'Ideation Workshop',
    description: 'Brainstorm and develop your next big tech idea',
    image: '/event_assets/ideation.jpg',
    cta: 'Join Session',
    href: '/events/ideation-workshop',
  },
  {
    id: '4',
    title: 'Math Day Celebration',
    description: 'Explore the beauty of mathematics in technology',
    image: '/event_assets/mathday.jpeg',
    cta: 'Discover More',
    href: '/events/math-day',
  },
  {
    id: '5',
    title: 'Postman Playbook',
    description: 'Master API development with Postman',
    image: '/event_assets/postman_event_poster.webp',
    cta: 'Get Started',
    href: '/events/postman-playbook',
  },
]

const Card: React.FC<{
  item: CarouselItem
  isActive: boolean
}> = ({ item, isActive }) => {
  var [isClicked, setIsClicked] = useState(true)
  const handleTranslate = () => {
    setIsClicked(!isClicked)
  }
  return (
    <motion.div
      className={`group/bento relative mx-[10%] h-full w-[80vw] overflow-hidden rounded-xl border shadow-none transition duration-300 ${
        isActive ? 'shadow-xl' : ''
      }`}
      layoutId={item.id}
      onClick={handleTranslate}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'border-box',
      }}
    >
      {isClicked && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full transform transition-all duration-300 group-hover/bento:translate-y-0">
          <div className="rounded-t-lg bg-black bg-opacity-80 p-4">
            <div className="pb-6">
              <div className="mb-2 font-sans font-bold text-white">
                {item.title}
              </div>
              <div className="font-sans text-xs font-normal text-gray-300">
                {item.description}
              </div>
            </div>
            <Button
              variant="soft"
              color="gray"
              className="pointer-events-auto flex items-center rounded-full border-none p-2 text-white transition-colors duration-300 hover:bg-gray-700"
            >
              <a href={item.href} className="flex items-center">
                {item.cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
const VerticalCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  let touchStartY = 0
  let touchMoveTimeout: NodeJS.Timeout | null = null

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches && e.touches[0]) {
      touchStartY = e.touches[0].clientY;
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (touchMoveTimeout) {
      clearTimeout(touchMoveTimeout)
    }
    touchMoveTimeout = setTimeout(() => {
      handleTouchScroll(e)
    }, 100)
  }

  const handleTouchScroll = (e: TouchEvent) => {
    if (carouselRef.current) {
      const touch = e.touches[0]
      const itemHeight = carouselRef.current.clientHeight
      const carouselRect = carouselRef.current.getBoundingClientRect()
      if (!touch) return;
      const touchY = touch.clientY - carouselRect.top
      const newIndex = Math.round(touchY / itemHeight)
      setActiveIndex(newIndex)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart)
      carousel.addEventListener('touchmove', handleTouchMove)
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('touchstart', handleTouchStart)
        carousel.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent">
      <div
        ref={carouselRef}
        className="h-[70vh] w-full snap-y snap-mandatory overflow-y-auto"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className="flex h-[70vh] w-full snap-start items-center justify-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Card item={item} isActive={index === activeIndex} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCarousel
