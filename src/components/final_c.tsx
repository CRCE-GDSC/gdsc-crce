'use client'

import React, { useState } from 'react'
import Image from 'next/image'
const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items = [
    '',
    '',
    '',
    '',
    '',
    // '','','','',
  ]

  const getImageUrl = (index: number) => {
    const images = [
      '/event_assests/mathday.jpeg',
      '/event_assests/event2.jpeg', //aston n akshat
      '/event_assests/event3.jpeg', //soham
      '/event_assests/ideation.jpg',

      '/event_assests/postman_event_poster.webp',
      '/event_assests/event1.jpeg', //solution soham

      '/event_assests/HackOver3.0.jpg',
      '/event_assests/Bit-N-Build.jpg',
      '/event_assests/GDSC_Future-Forge.jpg',
    ]
    return images[index % images.length]
  }

  const getItemStyle = (itemPos: number) => {
    const pos = ((itemPos - activePos + 5) % 5) - 2
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: pos === 0 ? '16px' : '0px',
      width: '40vw',
      height: '80vh',
      borderRadius: '10px',
      boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      transition: 'all 0.5s ease-in-out',
      backgroundImage: `url(${getImageUrl(itemPos)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    const isHovered = hoveredIndex === itemPos && pos === 0

    switch (pos) {
      case 0:
        return {
          ...baseStyle,
          zIndex: 5,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }
      case -1:
      case 1:
        return {
          ...baseStyle,
          filter: 'blur(1px) brightness(90%)',
          transform: isHovered
            ? `translateX(${pos * 40}%) scale(0.95)`
            : `translateX(${pos * 40}%) scale(0.85)`,
          zIndex: 4,
        }
      case -2:
      case 2:
        return {
          ...baseStyle,
          filter: 'blur(1px) brightness(80%)',
          transform: isHovered
            ? `translateX(${pos * 35}%) scale(0.8)`
            : `translateX(${pos * 35}%) scale(0.7)`,
          zIndex: 3,
        }
      default:
        return baseStyle
    }
  }

  return (
    <>
      <div className="light:bg-white flex h-auto w-full flex-col items-center justify-center overflow-hidden text-gray-900 transition-colors duration-300 dark:bg-inherit dark:text-white">
        <h1 className="bg-transparent text-center"></h1>
        <div className="relative flex w-full flex-row items-center justify-center">
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === 0 ? items.length - 1 : prevPos - 1
              )
            }
            className="absolute left-4 z-10 cursor-pointer rounded-full border-none bg-transparent p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image src="/gdsc-fl.png" alt="Previous" width={50} height={50} />
          </button>
          <div className="w-full">
            <div className="mb-10 flex h-[80vh] min-h-fit w-full items-center justify-center font-sans">
              <ul className="perspective-300 relative m-0 flex h-full w-full list-none justify-center p-0">
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={getItemStyle(index)}
                    className={`overflow-hidden rounded-lg ${
                      ((index - activePos + 5) % 5) - 2 === 0
                        ? 'cursor-pointer'
                        : ''
                    }`}
                    onMouseEnter={() =>
                      ((index - activePos + 5) % 5) - 2 === 0 &&
                      setHoveredIndex(index)
                    }
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      window.open(
                        'https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai-india/'
                      )
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === items.length - 1 ? 0 : prevPos + 1
              )
            }
            className="absolute right-4 z-10 cursor-pointer rounded-full border-none bg-transparent p-2 transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Image src="/gdsc-fr.png" alt="Next" width={50} height={50} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel
