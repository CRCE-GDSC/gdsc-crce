'use client'
import React, { useState } from 'react'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)

  const items = [1, 2, 3, 4, 5]

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
      height: '500px',
      borderRadius: '12px',
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
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        fontFamily: 'Arial',
        transform: 'scale(1.5)',
        transformOrigin: 'center',
      }}
    >
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          position: 'relative',
          width: '100%',
          height: '500px',
          justifyContent: 'center',
          perspective: '300px',
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={getItemStyle(index)}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
