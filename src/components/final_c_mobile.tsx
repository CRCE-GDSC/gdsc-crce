'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Title from './Title'

const CarouselMobile: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images')
      const data = await res.json()
      setImages(data)
    }
    fetchImages()
  }, [])

  const handleNext = () => {
    setIndex((index + 1) % images.length)
  }

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col items-center">
      <Title>Carousel Mobile</Title>
      <div className="relative w-full h-96">
        <Image
          src={images[index] || ''}
          alt="carousel image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-1/2 h-full bg-black bg-opacity-50">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 text-white bg-black bg-opacity-50"
          >
            Prev
          </button>
        </div>
        <div className="absolute top-0 right-0 flex items-center justify-center w-1/2 h-full bg-black bg-opacity-50">
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 text-white bg-black bg-opacity-50"
          >
           <img src="/gdsc-fl.png" alt="" />
           
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarouselMobile
