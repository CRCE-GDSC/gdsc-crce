'use client'

import { Linkedin, Instagram, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedGradientText from './ui/animated-gradient-text'
import { cn } from '@/lib/utils'
import { getTeam2022Data, getTeam2023Data, getTeam2024Data } from '@/data/Teamdata'

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
    <div className="bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img src={member.imgSrc} alt={member.name} className="w-full aspect-square object-cover object-top" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{member.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{member.position}</p>
        <div className="flex mt-2 space-x-3">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
            <Linkedin size={20} />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
            <Instagram size={20} />
          </a>
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  const renderTeamSection = (teamGroup, title) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamGroup.map((member, index) => (
          <div key={index}>
            {renderMemberCard(member)}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="flex w-full flex-col min-h-screen p-4 md:p-6 lg:p-8 xl:p-10">
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

      <div className="flex-grow">
        <div className="overflow-y-auto">
          {teamData.map((teamGroup, index) => (
            renderTeamSection(teamGroup, isSeniorVisible
              ? ['Management Team', 'Core Team', 'Advisors'][index]
              : ['Tech Associates', 'GDSC Associates', 'Graphic Associates'][index]
            )
          ))}
        </div>
      </div>
    </div>
  )
}
