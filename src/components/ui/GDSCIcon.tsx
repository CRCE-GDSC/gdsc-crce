// Icon.tsx

import React from 'react'
import { ReactSVG } from 'react-svg'
import { cn } from '@/lib/utils'

interface IconProps {
  width?: number
  height?: number
  className?:any
}

const GDSC: React.FC<IconProps> = ({ width, height, className}) => {
 const iconPath = require('@/components/ui/gdsc-f.svg') // Assuming your SVG files are in the /icons folder

  return <ReactSVG src={iconPath} width={width} height={height} className={cn(
    className
  )} />
}

export default GDSC
