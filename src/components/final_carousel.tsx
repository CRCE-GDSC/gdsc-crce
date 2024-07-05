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
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: pos === 0 ? '16px' : '0px',
      width: '300px',
      height: '350px',
      borderColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0px 2px 8px 0px rgba(50, 50, 50, 0.5)',
      position: 'absolute',
      transition: 'all 0.3s ease-in',
      backgroundImage: getImageUrl(itemPos),
      backgroundSize: 'cover', // Ensure the image covers the item
      backgroundPosition: 'center', // Center the background image
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

  const handleClick = (newPos: number) => {
    setActivePos(newPos)
  }

  return (
    <div className="h-auto w-full">
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          margin: '2rem 0',
          color: '#fff',
        }}
      >
        Our Events
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div className="col-span-1 overflow-hidden">
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === 0 ? items.length - 1 : prevPos - 1
              )
            }
            style={{
              position: 'relative',
              background: 'none',
              border: 'gray 1px solid',
              borderRadius: '50px',
              cursor: 'pointer',
              padding: '10px',
            }}
          >
            <img src="gdsc-fl.png" alt="" height="40px" width="40px" />
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            width: '70%',
            height: '100%',
            alignItems: 'center',
            fontFamily: 'Arial',
            transform: 'scale(1.5)',
            transformOrigin: 'center',
            border: '2px solid #ffffff',
          }}
        >
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              position: 'relative',
              width: '200%',
              height: '500px',
              justifyContent: 'center',
              perspective: '300px',
              padding: 0,
              margin: 0,
            }}
          >
            <div>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={getItemStyle(index)}
                  onClick={() => handleClick(index)}
                >
                  {item}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div>
          <button
            onClick={() =>
              setActivePos((prevPos) =>
                prevPos === items.length - 1 ? 0 : prevPos + 1
              )
            }
            style={{
              position: 'relative',
              background: 'none',
              border: 'gray 1px solid',
              borderRadius: '50px',
              cursor: 'pointer',
              padding: '10px',
            }}
          >
            <img src="gdsc-fr.png" alt="" height="40px" width="40px" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
