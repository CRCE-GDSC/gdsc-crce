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
      <h1 className="relative z-20 pt-20 text-center text-5xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl">
        ABOUT US
      </h1>
    </div>
  )
}
