import React from 'react'
import { TypographyWrapper } from './Typography.styled'

interface TypographyProps {
  variant?: 'body' | 'bodyEmphasized' | 'bodySmall' | 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  color?: string
  subdued?: boolean
  className?: string
  ref?: React.Ref<HTMLSpanElement>
  style?: React.CSSProperties
}

function Typography({
  variant = 'body',
  children,
  color,
  subdued,
  className,
  ref,
  style,
}: TypographyProps) {
  return (
    <TypographyWrapper
      variant={variant}
      color={color}
      subdued={subdued}
      className={className}
      style={style}
      ref={ref}
    >
      {children}
    </TypographyWrapper>
  )
}

export default Typography
