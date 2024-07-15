'use client'

import React from 'react'
import Image from 'next/image'
import { MobileDesignSectionContainer } from './MobileDesignSection.styled'
import { TypingEffect } from '@/components/typography/typingEffect/TypingEffect'
import Typography from '@/components/typography/Typography'

const MobileDesignSection: React.FC = () => {
  return (
    <MobileDesignSectionContainer>
      <Image
        alt="design img"
        src="/images/design-team.svg"
        className="illustration"
      />
      <Typography variant="body">
        <TypingEffect interKeyStrokeDurationInMs={20}>
          The Design Team at GDSC MVJCE is the driving force behind our visual
          appeal. They craft compelling event posters and captivating graphics.
        </TypingEffect>
      </Typography>
    </MobileDesignSectionContainer>
  )
}

export default MobileDesignSection
