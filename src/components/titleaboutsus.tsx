
import React from 'react'
import { SparklesCore } from './sparkles'
import Title from './Title'

export function SparklesPreview() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={0.8}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Title>ABOUT US</Title>
    </div>
  )
}
