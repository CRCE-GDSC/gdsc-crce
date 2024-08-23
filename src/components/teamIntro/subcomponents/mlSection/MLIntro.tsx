'use client'

import React, { useEffect } from 'react'
import {
  LogosWrapper,
  MLIntroContainer,
  PhoneContainer,
  ScreenContent,
} from './MLIntro.styled'
import { Phone } from '@/components/teamIntro/svg'
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
            <>
              <TypingEffect
                className="hidden md:block"
                interKeyStrokeDurationInMs={20}
              >
                The Machine Learning and Android Team at GDSC CRCE is a dynamic
                and versatile group of developers and data scientists,
                specializing in the powerful technologies of TensorFlow and
                Flutter.
              </TypingEffect>
              <TypingEffect
                className="md:hidden"
                interKeyStrokeDurationInMs={20}
              >
                The ML and Android Team at GDSC CRCE specializes in TensorFlow
                and Flutter.
              </TypingEffect>
            </>
          )}
        </ScreenContent>
      </PhoneContainer>
    </MLIntroContainer>
  )
}

export default MLIntro
