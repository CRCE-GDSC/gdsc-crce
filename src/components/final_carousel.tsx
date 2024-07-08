'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Title from './Title'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const items = ['', '', '', '', '']

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    handleResize() // Check initial size
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getImageUrl = (index: number) => {
    const images = [
      '/mathday.jpeg',
      '/ideation.jpg',
      '/postman_event_poster.webp',
      '/HackOver3.0.jpg',
      '/Bit-N-Build.jpg',
    ]
    return images[index % images.length]
  }

  const getItemStyle = (itemPos: number) => {
    if (isMobile) {
      return {
        width: '100%',
        height: '300px',
        backgroundImage: `url(${getImageUrl(itemPos)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        marginBottom: '20px',
      }
    }

    const pos = ((itemPos - activePos + 5) % 5) - 2
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: pos === 0 ? '16px' : '0px',
      width: '40vw',
      height: '100vh',
      borderRadius: '10px',
      boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      transition: 'all 0.5s ease-in-out',
      backgroundImage: `url(${getImageUrl(itemPos)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...(pos === 0
        ? { zIndex: 5 }
        : pos === -1 || pos === 1
          ? {
              filter: 'blur(1px) brightness(70%)',
              transform: `translateX(${pos * 40}%) scale(0.85)`,
              zIndex: 4,
            }
          : {
              filter: 'blur(2px) brightness(50%)',
              transform: `translateX(${pos * 35}%) scale(0.7)`,
              zIndex: 3,
            }),
    }
  }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <h1 className="text-center">
        <Title>Our Events</Title>
      </h1>
      <div className="relative flex w-full flex-col items-center justify-center px-4 md:flex-row">
        {!isMobile && (
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
        )}
        <div className={`w-full ${isMobile ? 'py-4' : ''}`}>
          <div
            className={`flex ${isMobile ? 'flex-col' : 'h-screen items-center justify-center'} w-full font-sans`}
          >
            <ul
              className={`${isMobile ? '' : 'perspective-300 relative'} m-0 flex h-full w-full list-none ${isMobile ? 'flex-col' : 'justify-center'} p-0`}
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  style={getItemStyle(index)}
                  className={`overflow-hidden rounded-lg ${isMobile ? '' : 'absolute'}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {!isMobile && (
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
        )}
      </div>
    </div>
  )
}

export default Carousel
