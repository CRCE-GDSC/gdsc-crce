import Typography from '../Typography'
import { FloatingLabelWrapper } from './FloatingLabel.styled'

interface FloatingLabelProps {
  variant?: 'body' | 'bodyEmphasized' | 'bodySmall' | 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  color?: string
  subdued?: boolean
  className?: string
  ref?: React.Ref<HTMLSpanElement>
  top?: string
  left?: string
  delay?: string
  opacity?: number
}

function FloatingLabel({
  variant = 'body',
  children,
  color,
  subdued,
  className,
  ref,
  top,
  left,
  delay,
  opacity,
}: FloatingLabelProps) {
  return (
    <FloatingLabelWrapper top={top} left={left} delay={delay} opacity={opacity}>
      <Typography
        variant={variant}
        color={color}
        subdued={subdued}
        className={className}
        ref={ref}
      >
        {children}
      </Typography>
    </FloatingLabelWrapper>
  )
}

export default FloatingLabel
