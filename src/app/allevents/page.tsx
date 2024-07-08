'use client'
// pages/allevents/page.tsx
import React, { useState, useEffect } from 'react'

interface Story {
  id: number
  imageUrl: string
  username: string
}

interface StoryViewerProps {
  stories: Story[]
}

const StoryViewer: React.FC<StoryViewerProps> = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1)
      } else {
        setProgress(0)
        setCurrentStoryIndex((prev) => (prev + 1) % stories.length)
      }
    }, 30) // Adjust this value to change the story duration

    return () => clearInterval(timer)
  }, [progress, stories.length])

  const handlePrev = () => {
    setProgress(0)
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const handleNext = () => {
    setProgress(0)
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length)
  }

  const currentStory = stories[currentStoryIndex]

  return ( 
    <div className="relative h-screen w-full bg-black">
      {/* Story Image */}
      {currentStory && (
        <img
          src={currentStory.imageUrl}
          alt={`Story by ${currentStory.username}`}
          className="h-full w-full object-cover"
        />
      )}

      {/* Progress Bars */}
      <div className="absolute left-0 right-0 top-0 flex p-2">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="mx-1 h-1 flex-1 overflow-hidden rounded-full bg-gray-400"
          >
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{
                width:
                  index === currentStoryIndex
                    ? `${progress}%`
                    : index < currentStoryIndex
                      ? '100%'
                      : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* User Info */}
      <div className="absolute left-4 top-4 flex items-center">
        <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-300">
          <img
            src={currentStory && `https://via.placeholder.com/32x32.png?text=${currentStory.username[0]}`}
            alt={currentStory && currentStory.username}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="ml-2 font-semibold text-white">
          {currentStory && currentStory.username}
        </span>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-0 h-full w-1/2 bg-transparent"
        onClick={handlePrev}
      />
      <button
        className="absolute right-0 top-0 h-full w-1/2 bg-transparent"
        onClick={handleNext}
      />
    </div>
  )
}

// Example usage
const App: React.FC = () => {
  const stories: Story[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/400x800',
      username: 'user1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/400x800',
      username: 'user2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/400x800',
      username: 'user3',
    },
  ]

  return (
    <div className="mx-auto max-w-sm">
      <StoryViewer stories={stories} />
    </div>
  )
}

export default App