'use client'

import { Linkedin, Instagram } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimatedGradientText from './ui/animated-gradient-text'
import { cn } from '@/lib/utils'
import {
  getTeam2022Data,
  getTeam2023Data,
  getTeam2024Data,
} from '@/data/Teamdata'

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
  linkedIn: string;
  Instagram: string;
}

interface TeamViewProps {
  type: 'Team2022' | 'Team2023' | 'Team2024';
}

type TeamGroup = TeamMember[];
type TeamData = TeamGroup[];

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="overflow-hidden rounded-xl bg-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
    <div className="relative">
      <img
        src={member.imgSrc}
        alt={member.name}
        className="aspect-square w-full object-cover object-top"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white sm:text-xl">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
        {member.position}
      </p>
      <div className="mt-3 flex space-x-3">
        <a
          href={member.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          <Linkedin size={24} />
        </a>
        <a
          href={member.Instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700"
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  </div>
)

interface TeamSectionProps {
  teamGroup: TeamGroup;
  title: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamGroup, title }) => (
  <div className="mb-10 sm:mb-12">
    <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
      {title}
    </h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {teamGroup.map((member, index) => (
        <div key={index}>
          <MemberCard member={member} />
        </div>
      ))}
    </div>
  </div>
)

interface TeamViewComponentProps {
  teamData: TeamData;
  titles: string[];
}

const SeniorTeamView: React.FC<TeamViewComponentProps> = ({ teamData, titles }) => (
  <>
    {teamData.map((teamGroup, index) => (
      <TeamSection
        key={index}
        teamGroup={teamGroup}
        title={titles[index]}
      />
    ))}
  </>
)

const JuniorTeamView: React.FC<TeamViewComponentProps> = ({ teamData, titles }) => (
  <>
    {teamData.map((teamGroup, index) => (
      <TeamSection
        key={index}
        teamGroup={teamGroup}
        title={titles[index]}
      />
    ))}
  </>
)

const TeamView: React.FC<TeamViewProps> = ({ type }) => {
  const [isSeniorVisible, setIsSeniorVisible] = useState(true)
  const [seniorTeamData, setSeniorTeamData] = useState<TeamData>([])
  const [juniorTeamData, setJuniorTeamData] = useState<TeamData>([])

  const handleToggle = () => {
    setIsSeniorVisible(!isSeniorVisible)
  }

  useEffect(() => {
    const getTeamData = (year: TeamViewProps['type']): (() => TeamData) => {
      switch (year) {
        case 'Team2024':
          return getTeam2024Data
        case 'Team2023':
          return getTeam2023Data
        case 'Team2022':
          return getTeam2022Data
        default:
          return () => []
      }
    }

    const teamDataFunction = getTeamData(type)
    setSeniorTeamData(teamDataFunction(true))
    setJuniorTeamData(teamDataFunction(false))
  }, [type])

  const seniorTitles = ['Management Team', 'Core Team', 'Advisors'];
  const juniorTitles = ['Tech Associates', 'GDSC Associates', 'Graphic Associates'];

  return (
    <div className="flex min-h-screen w-full flex-col p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-8 flex items-center justify-center gap-4 sm:mb-10">
        <AnimatedGradientText>
          <span
            className={cn(
              `hero-text inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-2xl font-semibold text-transparent transition-colors duration-500 sm:text-3xl md:text-4xl ${isSeniorVisible ? '' : 'text-gray-700'}`
            )}
          >
            Senior
          </span>
        </AnimatedGradientText>
        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            onChange={handleToggle}
            checked={!isSeniorVisible}
          />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:bg-gray-700 md:h-7 md:w-14 md:after:h-6 md:after:w-6"></div>
        </label>
        <AnimatedGradientText>
          <span
            className={cn(
              `hero-text inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-2xl font-semibold text-transparent transition-colors duration-500 sm:text-3xl md:text-4xl ${isSeniorVisible ? 'text-gray-700' : ''}`
            )}
          >
            Junior
          </span>
        </AnimatedGradientText>
      </div>

      <div className="flex-grow">
        <div className="overflow-y-auto">
          {isSeniorVisible ? (
            <SeniorTeamView teamData={seniorTeamData} titles={seniorTitles} />
          ) : (
            <JuniorTeamView teamData={juniorTeamData} titles={juniorTitles} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamView;
