'use client'

import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react'
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
      setSelectedMember(getTeam2024Data(isSeniorVisible)[0][0])

    }
    if (props.type === 'Team2023') {
      setTeamData(getTeam2023Data(isSeniorVisible))
      setSelectedMember(getTeam2023Data(isSeniorVisible)[0][0])
    } if (props.type === 'Team2022') {
      setTeamData(getTeam2022Data(isSeniorVisible))
      setSelectedMember(getTeam2022Data(isSeniorVisible)[0][0])
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
        <Dock key={i} className="h-[80px] mb-2">
          {slicedTeam.map((member, index) => (
            <DockIcon
              key={index}
              item={member}
              setSelectedMember={setSelectedMember}
              className="bg-transparent"
            >
              <img src={member.imgSrc} className='rounded-full w-14 h-14 object-cover' alt={member.name} />
            </DockIcon>
          ))}
        </Dock>
      )
    }
    return docks
  }

  return (
    <div className="flex flex-col h-screen p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
        <AnimatedGradientText>
          <span className={cn(
            `inline animate-gradient hero-text bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-3xl md:text-4xl font-semibold text-transparent transition-colors duration-500 ${isSeniorVisible ? 'text-gray-700' : ''}`
          )}>
            Junior
          </span>
        </AnimatedGradientText>

        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            onChange={handleToggle}
          />
          <div className="peer relative h-6 w-11 md:h-7 md:w-14 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 md:after:h-6 md:after:w-6 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none rtl:peer-checked:after:-translate-x-full dark:bg-gray-700"></div>
        </label>

        <AnimatedGradientText>
          <span className={cn(
            `inline animate-gradient hero-text bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-3xl md:text-4xl font-semibold text-transparent transition-colors duration-500 ${isSeniorVisible ? '' : 'text-gray-700'}`
          )}>
            Senior
          </span>
        </AnimatedGradientText>
      </div>

      <div className="flex-grow flex flex-col justify-start mt-6 ">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <AnimatePresence mode="wait">
            {selectedMember && (
              <motion.div
                key={selectedMember.name}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-6xl"
              >
                <BackgroundGradient className="p-1 rounded-xl">
                  <div className="w-full rounded-lg dark:bg-[#252525] bg-gray-200 shadow-xl backdrop-blur-md">
                    <div className="flex flex-col md:flex-row items-center p-4 md:p-6 lg:p-8">
                      <img
                        className="aspect-square  h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full border-4 border-blue-500 object-cover shadow-lg mb-4 md:mb-0 md:mr-6 lg:mr-8"
                        src={selectedMember.imgSrc}
                        alt={`${selectedMember.name} image`}
                      />
                      <div className="flex-grow text-center md:text-left">
                        <h5 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                          {selectedMember.name}
                        </h5>
                        <span className="text-lg md:text-xl lg:text-2xl text-blue-500 dark:text-blue-300 block mb-4 md:mb-0">
                          {selectedMember.position}
                        </span>
                      </div>
                      <div className="flex md:flex-col gap-4 mt-4 md:mt-0 md:ml-6 lg:ml-8">
                        {selectedMember.linkedIn && (
                          <a href={selectedMember.linkedIn} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                            <Linkedin size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
                          </a>
                        )}
                        {selectedMember.Instagram && (
                          <a href={selectedMember.Instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                            <Instagram size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
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

        <div className="w-full">
          <div className="flex justify-center items-center text-black dark:text-white gap-4 mb-4 md:mb-6">
            <ChevronLeft
              color="white"
              size={28}
              onClick={() => handleChevronClick(-1)}
              className="cursor-pointer dark:invert-0 invert "
            />
            <span className="text-xl md:text-2xl font-semibold">
              {positions[selectedPositionIndex]}
            </span>
            <ChevronRight
              color="white"
              size={28}
              onClick={() => handleChevronClick(1)}
              className="cursor-pointer dark:invert-0 invert "
            />
          </div>
          <div className="overflow-x-auto">
            <div className="flex flex-col justify-center">
              {renderDocks()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
