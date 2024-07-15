'use client'

import React, { useEffect } from 'react'
import {
  LogosWrapper,
  MLIntroContainer,
  PhoneContainer,
  ScreenContent,
} from './MLIntro.styled'
import {Phone} from '@/components/teamIntro/svg'
import { TypingEffect } from '@/components/typography/typingEffect/TypingEffect'
import TensorFlowLogo from '../tensorflowlogo/TensorFlowLogo'

const MLIntro: React.FC = () => {
  const [showTyping, setShowTyping] = React.useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => setShowTyping(true), 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <MLIntroContainer>
      <PhoneContainer>
        <Phone />
        <ScreenContent>
          <LogosWrapper>
            <TensorFlowLogo />
          </LogosWrapper>
          {showTyping && (
            <TypingEffect interKeyStrokeDurationInMs={20}>
              The Machine Learning and Android Team at GDSC MVJCE is a dynamic
              and versatile group of developers and data scientists,
              specializing in the powerful technologies of TensorFlow and
              Flutter.
            </TypingEffect>
          )}
        </ScreenContent>
      </PhoneContainer>
    </MLIntroContainer>
  )
}

export default MLIntro
