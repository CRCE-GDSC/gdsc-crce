'use client'
import React, { useState } from 'react'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)

  const items = ['', '', '', '', '']

  const getImageUrl = (index: number) => {
    const images = [
      'url("/mathday.jpeg")',
      'url("/ideation.jpg")',
      'url("/postman_event_poster.webp")',
      'url("/HackOver3.0.jpg")',
      'url("/Bit-N-Build.jpg")',
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
      fontSize: pos === 0 ? '16px' : '0px', // Dynamic font size
      width: '30vw', // Responsive width
      height: '70vh', // Responsive height
      borderColor: '#ffffff',
      borderRadius: '10px',
      
      boxShadow: '0px 2px 8px 0px rgba(50, 50, 50, 0.5)',
      position: 'absolute',
      transition: 'all 0.3s ease-in',
      backgroundImage: getImageUrl(itemPos),
      backgroundSize: 'cover', // Updated to auto for responsiveness
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

  const handleClick = (newPos: number) => {
    setActivePos(newPos)
  }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          margin: '4rem 0',
          color: '#fff',
        }}
      >
        Our Events
      </h1>
      <div className="flex flex-row items-center justify-center">
        <button
          onClick={() =>
            setActivePos((prevPos: number) =>
              prevPos === 0 ? items.length - 1 : prevPos - 1
            )
          }
          style={{
            position: 'absolute',
            left: '10px', // Adjusted position to the left
            background: 'none',
            border: 'none', // Updated for a cleaner look
            cursor: 'pointer',
            padding: '10px',
          }}
        >
          <img
            src="gdsc-fl.png"
            alt=""
            style={{ height: '40px', width: '40px' }}
          />
        </button>
        <div
          style={{
            margin: '0 auto', // Added margin auto to center the carousel
            padding: '10px',
            paddingTop: '10px',
            position: 'relative',
           // Added margin to the left
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '70%', // Responsive width
              height: '70vh', // Responsive height
              alignItems: 'center',
              justifyContent: 'center', // Added to center the carousel horizontally
              fontFamily: 'Arial',
              transform: 'scale(1)', // Corrected typo + added scale1 instead of 1.5
              transformOrigin: 'center',

              margin: '0 auto', // Added margin auto to center the carousel
            }}
          >
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                position: 'relative',
                width: '200%', // Adjusted for responsiveness
                height: '100%', // Consider making this responsive
                justifyContent: 'center',
                perspective: '300px',
                padding: 0,
                margin: 0,
              }}
            >
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
            setActivePos((prevPos: number) =>
              prevPos === items.length - 1 ? 0 : prevPos + 1
            )
          }
          style={{
            position: 'absolute',
            right: '10px', // Adjusted position to the right
            background: 'none',
            border: 'none', // Updated for a cleaner look
            cursor: 'pointer',
            padding: '10px',
          }}
        >
          <img
            src="gdsc-fr.png"
            alt=""
            style={{ height: '40px', width: '40px' }}
          />
        </button>
      </div>
    </div>
  )
}
export default Carousel
