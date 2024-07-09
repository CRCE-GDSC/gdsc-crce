'use client'
import React, { useRef, useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import Title from './Title'

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

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
  }, [title, description, cta]) // Recalculate if content changes

  return (
    <div
      className={cn(
        'group/bento relative h-full w-full overflow-hidden rounded-xl border shadow-none transition duration-200 hover:shadow-xl',
        theme === 'dark'
          ? 'border-white/[0.2] bg-black'
          : 'border-gray-200 bg-white',
        className
      )}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'border-box',
      }}
    >
      <div
        className="absolute inset-x-0 bottom-0 transform transition-all duration-300 h-40 translate-y-40"
        // style={{
        //   height: `${contentHeight}px`,
        //   transform: `translateY(${contentHeight}px)`,
        // }}
      >
        <div
          ref={contentRef}
          className={cn(
            'absolute inset-0 p-4 rounded-lg transition-transform duration-300 group-hover/bento:translate-y-[-100%]',
            theme === 'dark'
              ? 'bg-black bg-opacity-50'
              : 'bg-white bg-opacity-80'
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
              variant="ghost"
              className={cn(
                'pointer-events-auto flex items-center',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}
            >
              <a href={href}>
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
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <h1 className="text-center">
        <Title>Our Events</Title>
      </h1>
      <div className="carousel carousel-vertical rounded-box h-[28rem] w-full max-w-md sm:h-[32rem] md:h-[36rem] lg:h-[40rem]">
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item h-full w-full">
            <AceGridCard {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCarousel

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
