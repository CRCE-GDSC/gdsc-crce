'use client'
import React, { useState } from 'react'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)

  const items = ['', '', '', '', '']

  const getImageUrl = (index: number) => {
    const images = [
      'url("/mathday.jpeg")',
      'url("ideation.jpg")',
      'url("postman_event_poster.webp")',
      'url("HackOver3.0.jpg")',
      'url("Bit-N-Build.jpg")',
    ]
    return images[index % images.length]
  }

  const getItemStyle = (itemPos: number) => {
    const pos = ((itemPos - activePos + 5) % 5) - 2
    const baseStyle = `flex items-center justify-center text-white font-normal transition-all duration-300 ease-in bg-cover bg-center relative ${
      pos === 0 ? 'text-base z-50' : 'text-0'
    } w-72 h-screen border border-white rounded-lg shadow-md`

    switch (pos) {
      case 0:
        return `${baseStyle}`
      case -1:
      case 1:
        return `${baseStyle} opacity-70 blur-sm grayscale-10 scale-90 z-40`
      case -2:
      case 2:
        return `${baseStyle} opacity-40 blur-lg grayscale-20 scale-80 z-30`
      default:
        return baseStyle
    }
  }

  const handleClick = (newPos: number) => {
    setActivePos(newPos)
  }

  return (
    <div className="h-auto w-full">
      <h1 className="my-8 text-center text-2xl text-white">Our Events</h1>
      <div className="flex flex-row items-center justify-center">
        <div className="overflow-hidden">
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === 0 ? items.length - 1 : prevPos - 1
              )
            }
            className="relative cursor-pointer rounded-full border border-gray-400 bg-transparent p-2"
          >
            <img src="gdsc-fl.png" alt="" className="h-10 w-10" />
          </button>
        </div>
        <div className="flex h-full w-3/4 scale-150 items-center border-2 border-white font-sans">
          <ul className="h-125 perspective-300 relative m-0 flex w-full list-none justify-center p-0">
            {items.map((item, index) => (
              <li
                key={index}
                className={`${getItemStyle(index)} bg-[${getImageUrl(index)}]`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === items.length - 1 ? 0 : prevPos + 1
              )
            }
            className="relative cursor-pointer rounded-full border border-gray-400 bg-transparent p-2"
          >
            <img src="gdsc-fr.png" alt="" className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
