'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)

  const items = ['', '', '', '', '']

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
    const pos = ((itemPos - activePos + 5) % 5) - 2
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: pos === 0 ? '16px' : '0px',
      width: '30vw',
      height: '70vh',
      borderColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0px 2px 8px 0px rgba(50, 50, 50, 0.5)',
      position: 'absolute',
      transition: 'all 0.3s ease-in',
      backgroundImage: `url(${getImageUrl(itemPos)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    switch (pos) {
      case 0:
        return { ...baseStyle, zIndex: 5 }
      case -1:
      case 1:
        return {
          ...baseStyle,
          opacity: 0.7,
          filter: 'blur(1px) grayscale(10%)',
          transform: `translateX(${pos * 40}%) scale(0.9)`,
          zIndex: 4,
        }
      case -2:
      case 2:
        return {
          ...baseStyle,
          opacity: 0.4,
          filter: 'blur(3px) grayscale(20%)',
          transform: `translateX(${pos * 35}%) scale(0.8)`,
          zIndex: 3,
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="my-16 text-center text-4xl text-white">Our Events</h1>
      <div className="relative flex w-full flex-row items-center justify-center">
        <button
          onClick={() =>
            setActivePos((prevPos) =>
              prevPos === 0 ? items.length - 1 : prevPos - 1
            )
          }
          className="absolute left-0 z-10 cursor-pointer border-none bg-transparent p-2"
        >
          <Image src="/gdsc-fl.png" alt="Previous" width={40} height={40} />
        </button>
        <div className="w-full">
          <div className="flex h-[70vh] w-full items-center justify-center font-sans">
            <ul className="perspective-300 relative m-0 flex h-full w-full list-none justify-center p-0">
              {items.map((item, index) => (
                <li key={index} style={getItemStyle(index)}>
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
          className="absolute right-0 z-10 cursor-pointer border-none bg-transparent p-2"
        >
          <Image src="/gdsc-fr.png" alt="Next" width={40} height={40} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
