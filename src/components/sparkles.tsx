'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, SingleOrMultiple } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'

type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  const controls = useAnimation()

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container)
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      })
    }
  }

  return (
    <motion.div animate={controls} className={cn('opacity-0', className)}>
      {init && (
        <Particles
          id={id || 'tsparticles'}
          className={cn('h-full w-full')}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || '#f0f0f0', // Light gray background
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || '#4a4a4a', // Darker gray particles
              },
              links: {
                color: '#4a4a4a', // Darker gray links
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: speed || 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: particleDensity || 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  )
}
