'use client'

import { Linkedin, Instagram, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedGradientText from './ui/animated-gradient-text'
import { cn } from '@/lib/utils'
import {
  getTeam2022Data,
  getTeam2023Data,
  getTeam2024Data,
} from '@/data/Teamdata'

export default function TeamView(props) {
  const [isSeniorVisible, setIsSeniorVisible] = useState(false)
  const [teamData, setTeamData] = useState([])

  const handleToggle = () => {
    setIsSeniorVisible(!isSeniorVisible)
  }

  useEffect(() => {
    if (props.type === 'Team2024') {
      setTeamData(getTeam2024Data(isSeniorVisible))
    }
    if (props.type === 'Team2023') {
      setTeamData(getTeam2023Data(isSeniorVisible))
    }
    if (props.type === 'Team2022') {
      setTeamData(getTeam2022Data(isSeniorVisible))
    }
  }, [props.type, isSeniorVisible])

  const renderMemberCard = (member) => (
    <div className="overflow-hidden rounded-xl bg-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
      <div className="relative">
        <img
          src={member.imgSrc}
          alt={member.name}
          className="aspect-square w-full object-cover object-top"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {member.position}
        </p>
        <div className="mt-2 flex space-x-3">
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={member.Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  )

  const renderTeamSection = (teamGroup, title) => (
    <div className="mb-12">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamGroup.map((member, index) => (
          <div key={index}>{renderMemberCard(member)}</div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen w-full flex-col p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="mb-6 flex items-center justify-center gap-4 md:mb-8">
        <AnimatedGradientText>
          <span
            className={cn(
              `hero-text inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-3xl font-semibold text-transparent transition-colors duration-500 md:text-4xl ${isSeniorVisible ? 'text-gray-700' : ''}`
            )}
          >
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
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:bg-gray-700 md:h-7 md:w-14 md:after:h-6 md:after:w-6 rtl:peer-checked:after:-translate-x-full"></div>
        </label>

        <AnimatedGradientText>
          <span
            className={cn(
              `hero-text inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-3xl font-semibold text-transparent transition-colors duration-500 md:text-4xl ${isSeniorVisible ? '' : 'text-gray-700'}`
            )}
          >
            Senior
          </span>
        </AnimatedGradientText>
      </div>

      <div className="flex-grow">
        <div className="overflow-y-auto">
          {teamData.map((teamGroup, index) =>
            renderTeamSection(
              teamGroup,
              isSeniorVisible
                ? ['Management Team', 'Core Team', 'Advisors'][index]
                : ['Tech Associates', 'GDSC Associates', 'Graphic Associates'][
                    index
                  ]
            )
          )}
        </div>
      </div>
    </div>
  )
}
