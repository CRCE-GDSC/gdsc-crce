'use client'
import React, { useRef, useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

interface CarouselItem {
  className?: string
  title: string
  description: string
  image: string
  icon?: React.ReactNode
  href: string
  cta: string
}

const AceGridCard: React.FC<CarouselItem> = ({
  className,

  title,
  description,
  image,
  icon,
  href,
  cta,
}) => {
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [isTapped, setIsTapped] = useState(false) // New state for tap interaction

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
  }, [title, description, cta]) // Recalculate if content changes

  // Toggle tap state
  const handleTap = () => {
    setIsTapped(!isTapped)
  }

  return (
    <div
      className={cn(
        'group/bento relative h-full w-full overflow-hidden rounded-xl border shadow-none transition duration-200 hover:shadow-xl',
        theme === 'dark'
          ? 'border-white/[0.2] bg-inherit'
          : 'border-gray-200 bg-inherit',
        className
      )}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'border-box',
      }}
      onClick={handleTap} // Handle tap here
    >
      <div
        className="absolute inset-x-0 bottom-0 transform transition-all duration-300"
        style={{
          transform: isTapped ? 'translateY(-100%)' : 'translateY(0%)', // Use isTapped to control the transform
        }}
      >
        <div
          ref={contentRef}
          className={cn(
            'absolute inset-0 rounded-lg p-4 transition-transform duration-300',
            theme === 'dark'
              ? 'bg-black bg-opacity-60'
              : 'bg-white bg-opacity-80',
            isTapped ? 'h-fit translate-y-[-100%]' : 'translate-y-[0%]',
            '-bottom-10'
            // Adjust based on isTapped
          )}
        >
          <div className="pb-6">
            {icon}
            <div
              className={cn(
                'mb-2 font-sans font-bold',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            >
              {title}
            </div>
            <div
              className={cn(
                'font-sans text-xs font-normal',
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              )}
            >
              {description}
            </div>
          </div>
          <div>
            <Button
              variant="soft"
              color="gray"
              className={cn(
                'pointer-events-auto flex items-center rounded-full border-none p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            >
              <a href={href} className="flex items-center">
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const VerticalCarousel: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      title: 'The Future Forge',
      description: 'A new way to learn and grow',
      image: '/event_assests/GDSC_Future-Forge.jpg',
      href: '/allevents',
      cta: 'Learn More',
    },
    {
      title: 'HackOver3.0',
      description: 'A 24-hour hackathon',
      image: '/event_assests/HackOver3.0.jpg',
      href: '/allevents',
      cta: 'Learn More',
    },
    {
      title: 'Ideation',
      description: 'A platform to share your ideas',
      image: '/event_assests/ideation.jpg',
      href: '/allevents',
      cta: 'Learn More',
    },
    {
      title: 'mathday',
      description: 'A day to celebrate math',
      image: '/event_assests/mathday.jpeg',
      href: '/allevents',
      cta: 'Learn More',
    },
    {
      title: ' the Postman playbook',
      description: 'Learn abiut PostMan, the API development tool',
      image: '/event_assests/postman_event_poster.webp',
      href: '/allevents',
      cta: 'Learn More',
    },

    // Add more items as needed
  ]

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-inherit px-4 py-8">
        <div className="carousel carousel-vertical rounded-box h-[28rem] w-full max-w-md sm:h-[32rem] md:h-[36rem] lg:h-[40rem]">
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-item h-full w-full">
              <AceGridCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default VerticalCarousel

// const carouselItems: CarouselItem[] = [
//   {
//     title: 'The Future Forge',
//     description: 'A new way to learn and grow',
//     image: '/event_assests/GDSC_Future-Forge.jpg',
//     href: '/allevents',
//     cta: 'Learn More',
//   },
//   {
//     title: 'HackOver3.0',
//     description: 'A 24-hour hackathon',
//     image: '/event_assests/HackOver3.0.jpg',
//     href: '/allevents',
//     cta: 'Learn More',
//   },
//   {
//     title: 'Ideation',
//     description: 'A platform to share your ideas',
//     image: '/event_assests/ideation.jpg',
//     href: '/allevents',
//     cta: 'Learn More',
//   },
//   {
//     title: 'mathday',
//     description: 'A day to celebrate math',
//     image: '/event_assests/mathday.jpeg',
//     href: '/allevents',
//     cta: 'Learn More',
//   },
//   {
//     title: ' the Postman playbook',
//     description: 'Learn abiut PostMan, the API development tool',
//     image: '/event_assests/postman_event_poster.webp',
//     href: '/allevents',
//     cta: 'Learn More',
//   },

//   // Add more items as needed
// ]
