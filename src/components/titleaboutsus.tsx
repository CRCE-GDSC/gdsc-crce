import React from 'react'
import { SparklesCore } from './sparkles'
import Title from './Title'

export function SparklesPreview() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Title>ABOUT US</Title>
      <h1 className="pt-15 relative z-20 text-center text-4xl font-semibold text-white md:text-7xl lg:text-6xl">
        ABOUT US
      </h1>
    </div>
  )
}
