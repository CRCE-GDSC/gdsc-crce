'use client'
import React, { useState } from 'react'

const Carousel: React.FC = () => {
  const [activePos, setActivePos] = useState(0)

  const items = [1, 2, 3, 4, 5]

  const getItemStyle = (itemPos: number) => {
    const pos = ((itemPos - activePos + 5) % 5) - 2
    const baseStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: pos === 0 ? '16px' : '0px',
      width: '150px',
      height: '250px',
      borderRadius: '12px',
      boxShadow: '0px 2px 8px 0px rgba(50, 50, 50, 0.5)',
      position: 'absolute',
      transition: 'all 0.3s ease-in',
      background: getGradient(itemPos),
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

  const getGradient = (index: number) => {
    const gradients = [
      'linear-gradient(45deg, #2D35EB 0%, #904ED4 100%)',
      'linear-gradient(45deg, #2D35EB 0%, #fdbb2d 100%)',
      'linear-gradient(45deg, #2D35EB 0%, #22c1c3 100%)',
      'linear-gradient(45deg, #fdbb2d 0%, #904ED4 100%)',
      'linear-gradient(45deg, #22c1c3 0%, #904ED4 100%)',
    ]
    return gradients[index % gradients.length]
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
