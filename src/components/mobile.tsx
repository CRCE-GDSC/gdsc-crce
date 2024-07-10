'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import GoogleLoader from '@/components/ui/goggleloader'

interface Event {
  id: number
  imageUrl: string
  name: string
  date: string
}

const EventViewer: React.FC<{ events: Event[] }> = ({ events }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1)
      } else {
        setProgress(0)
        setCurrentEventIndex((prev) => (prev + 1) % events.length)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [progress, events.length])

  const handlePrev = () => {
    setProgress(0)
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const handleNext = () => {
    setProgress(0)
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const currentEvent = events[currentEventIndex]

  return (
    <div className="relative h-screen w-full bg-inherit ">
      {/* Event Image */}
      {currentEvent && (
        <img
          src={currentEvent.imageUrl}
          alt={`Event: ${currentEvent.name}`}
          className="h-full w-full object-cover"
        />
      )}

      {/* Progress Bars */}
      <div className="absolute left-0 right-0 top-0 flex p-2">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="mx-1 h-1 flex-1 overflow-hidden rounded-full bg-gray-400"
          >
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{
                width:
                  index === currentEventIndex
                    ? `${progress}%`
                    : index < currentEventIndex
                      ? '100%'
                      : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Event Info */}
      <div className="absolute left-4 top-4 flex flex-col">
        <span className="text-lg font-semibold text-white">
          {currentEvent && currentEvent.name}
        </span>
        <span className="text-sm text-white">
          {currentEvent && currentEvent.date}
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

const MobileView: React.FC = () => {
  const router = useRouter()
  const [slug, setSlug] = useState<string | string[] | undefined>()

  useEffect(() => {
    if (router.isReady) {
      setSlug(router.query.slug)
    }
  }, [router.isReady, router.query.slug])

  const events: Event[] = [
    {
      id: 1,
      imageUrl: '/event_assests/event1.jpeg',
      name: 'Summer Festival',
      date: 'July 15, 2024',
    },
    {
      id: 2,
      imageUrl: '/event_assests/event2.jpeg',
      name: 'Tech Conference',
      date: 'August 5, 2024',
    },
    {
      id: 3,
      imageUrl: '/event_assests/event3.jpeg',
      name: 'Art Exhibition',
      date: 'September 10, 2024',
    },
  ]
   if (!slug) {
     return <GoogleLoader /> // or a loading indicator
   }

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-sm">
        <EventViewer events={events} />
      </div>
    </>
  )
}

export default MobileView
