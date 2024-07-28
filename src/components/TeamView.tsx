'use client'

import { ChevronLeft, ChevronRight, Linkedin, Instagram, Github, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackgroundGradient } from './ui/background-gradient'
import AnimatedGradientText from './ui/animated-gradient-text'
import { cn } from '@/lib/utils'
import { Dock, DockIcon } from './ui/dock'
import { getTeam2022Data, getTeam2023Data, getTeam2024Data } from '@/data/Teamdata'

export default function TeamView(props) {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isSeniorVisible, setIsSeniorVisible] = useState(false)
  const [selectedPositionIndex, setSelectedPositionIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [positions, setPositions] = useState([
    'Tech Associates',
    'GDSC Associates',
    'Graphic Associates',
  ])
  const [teamData, setTeamData] = useState([])

  const handleToggle = () => {
    setIsSeniorVisible(!isSeniorVisible)
  }

  const handleChevronClick = (newDirection) => {
    setDirection(newDirection)
    setSelectedPositionIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % positions.length
      } else {
        return (prevIndex - 1 + positions.length) % positions.length
      }
    })
  }

  useEffect(() => {
    if (props.type === 'Team2024') {
      setTeamData(getTeam2024Data(isSeniorVisible))
    }
    if (props.type === 'Team2023') {
      setTeamData(getTeam2023Data(isSeniorVisible))
    } if (props.type === 'Team2022') {
      setTeamData(getTeam2022Data(isSeniorVisible))
    }
  }, [props.type, isSeniorVisible])

  useEffect(() => {

    if (isSeniorVisible) {
      setPositions(['Management Team', 'Core Team', 'Advisors'])
    } else {
      setPositions(['Tech Associates', 'GDSC Associates', 'Graphic Associates'])
    }
  }, [isSeniorVisible])

  const renderDocks = () => {
    const currentTeam = teamData[selectedPositionIndex] || []
    const docks = []
    for (let i = 0; i < currentTeam.length; i += 5) {
      const slicedTeam = currentTeam.slice(i, i + 5)
      docks.push(
        <Dock key={i}>
          {slicedTeam.map((member, index) => (
            <DockIcon
              key={index}
              item={member}
              setSelectedMember={setSelectedMember}
              className=""
            >
              <img src={member.imgSrc} className='rounded-full' alt={member.name} />
            </DockIcon>
          ))}
        </Dock>
      )
    }
    return docks
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-between p-4 gap-8">
      <div className="mt-2 flex items-center justify-center gap-4">
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-4xl font-semibold text-transparent transition-colors duration-500 ${isSeniorVisible ? 'text-gray-700' : ''}`
            )}
          >
            Junior
          </span>
        </AnimatedGradientText>

        <div>
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onChange={handleToggle}
            />
            <div className="peer relative h-7 w-14 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full dark:bg-gray-700"></div>
          </label>
        </div>

        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-4xl font-semibold text-transparent transition-colors duration-500 ${isSeniorVisible ? '' : 'text-gray-700'}`
            )}
          >
            Senior
          </span>
        </AnimatedGradientText>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          {selectedMember && (
            <motion.div
              key={selectedMember.name}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BackgroundGradient className="p-1 rounded-xl">
                <div className="w-full max-w-md rounded-lg bg-white/10 shadow-xl backdrop-blur-md">
                  <div className="flex flex-col items-center p-8">
                    <img
                      className="mb-4 h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-lg"
                      src={selectedMember.imgSrc}
                      alt={`${selectedMember.name} image`}
                    />
                    <h5 className="mb-1 text-2xl font-bold text-white">
                      {selectedMember.name}
                    </h5>
                    <span className="mb-4 text-lg text-blue-300">
                      {selectedMember.position}
                    </span>
                    <div className="mt-4 flex gap-4">
                      {selectedMember.linkedIn && (
                        <a href={selectedMember.linkedIn} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                          <Linkedin size={24} />
                        </a>
                      )}
                      {selectedMember.Instagram && (
                        <a href={selectedMember.Instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                          <Instagram size={24} />
                        </a>
                      )}

                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row gap-4">
          <ChevronLeft
            color="white"
            size={26}
            onClick={() => handleChevronClick(-1)}
          />
          <span className="text-xl font-semibold">
            {positions[selectedPositionIndex]}
          </span>
          <ChevronRight
            color="white"
            size={26}
            onClick={() => handleChevronClick(1)}
          />
        </div>
        {renderDocks()}
      </div>
    </div>
  )
}
