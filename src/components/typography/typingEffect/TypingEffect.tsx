'use client'

import React, { useEffect, useRef, useState } from 'react'

interface TypingEffectProps {
  interKeyStrokeDurationInMs: number
  showCursor?: boolean
  children: React.ReactNode
  onTypingComplete?: () => void
  className?: string
}

export function TypingEffect({
  interKeyStrokeDurationInMs,
  showCursor,
  children,
  onTypingComplete,
  className,
}: TypingEffectProps) {
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false)
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)
  const textToType = React.Children.toArray(children).join('')

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current!)
    }
  }, [])

  useEffect(() => {
    if (currentPosition < textToType.length) {
      clearInterval(intervalIdRef.current!) // Reset the interval
      intervalIdRef.current = setInterval(() => {
        setCurrentPosition((value) => {
          const newPosition = value + 1
          if (newPosition > textToType.length) {
            clearInterval(intervalIdRef.current!)
            setIsTypingComplete(true)
            onTypingComplete?.()
            return value // Maintain the last valid position
          }
          return newPosition
        })
      }, interKeyStrokeDurationInMs)
    }
  }, [
    interKeyStrokeDurationInMs,
    currentPosition,
    textToType,
    onTypingComplete,
  ])

  const typedText = textToType.substring(0, currentPosition)

  return (
    <span className={className}>
      {typedText}
      {!isTypingComplete && showCursor && <span className="cursor">|</span>}
    </span>
  )
}
