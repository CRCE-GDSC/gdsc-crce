'use client'

import { useState } from 'react'
import {
  TeamButton,
  TeamDescriptionSection,
  TeamIntroContainer,
  TeamIntroSectionWrapper,
  TeamTitlesSection,
} from './TeamIntro.styled'
import Typography from '../typography/Typography'
import Terminal from './subcomponents/terminal/Terminal'
import MLIntro from './subcomponents/mlSection/MLIntro'
import DesignSection from './subcomponents/designSection/DesignSection'
import ContentSection from './subcomponents/contentSection/ContentSection'
import CommunitySection from './subcomponents/communitySection/CommunitySection'
import MobileDesignSection from './subcomponents/designSection/mobileDesignSection/MobileDesignSection'

const TeamIntro: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<string>('tech')

  return (
    <TeamIntroContainer className="w-screen">
      <Typography variant="h1">What We Do</Typography>
      <TeamIntroSectionWrapper>
        <TeamTitlesSection>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('tech')}
            isSelected={activeTeam === 'tech'}
          >
            Technical
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('android')}
            isSelected={activeTeam === 'android'}
          >
            ML & Android
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('design')}
            isSelected={activeTeam === 'design'}
          >
            Design
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('content')}
            isSelected={activeTeam === 'content'}
          >
            Content
          </TeamButton>
          <TeamButton
            className="dark:text-black"
            onClick={() => setActiveTeam('community')}
            isSelected={activeTeam === 'community'}
          >
            Community Management
          </TeamButton>
        </TeamTitlesSection>
        <TeamDescriptionSection>
          {activeTeam === 'tech' && <Terminal />}
          {activeTeam === 'android' && <MLIntro />}
          {
            activeTeam === 'design' && (
              // (isMobile ? <MobileDesignSection /> :
              <DesignSection />
            )

            // )
          }
          {activeTeam === 'content' && <ContentSection />}
          {activeTeam === 'community' && <CommunitySection />}
        </TeamDescriptionSection>
      </TeamIntroSectionWrapper>
    </TeamIntroContainer>
  )
}

export default TeamIntro
