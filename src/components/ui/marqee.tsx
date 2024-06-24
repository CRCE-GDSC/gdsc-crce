import { cn } from '@/lib/utils'
import React, { useState } from 'react'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}
/* 
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}*/

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  // Function to generate the card's className based on its hover state
  const getCardClassName = (isHovered: boolean) =>
    cn('flex shrink-0 justify-around [gap:var(--gap)]', {
      'animate-marquee flex-row': !vertical,
      'animate-marquee-vertical flex-col': vertical,
      '[animation-play-state:paused]': isHovered && pauseOnHover,
      '[animation-direction:reverse]': reverse,
    })
  const [isHovered, setIsHovered] = useState(false) // State to manage hover for each card
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
              onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
              className={getCardClassName(isHovered)} // Use the dynamic class name based on hover state
            >
              {children}
            </div>
          )
        })}
    </div>
  )
}
