'use client'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useRef,
} from 'react'

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string
  magnification?: number
  distance?: number
  children: React.ReactNode
}

const DEFAULT_MAGNIFICATION = 40
const DEFAULT_DISTANCE = 100
const dockVariants = cva(
  'mx-auto w-max h-[40px] p-1 flex items-end gap-1 rounded-xl border dark:border-[#707070]'
)

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      maxItems = 5,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity)
    const renderChildren = () => {
      return React.Children.toArray(children).slice(0, maxItems).map((child: any) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        })
      })
    }
    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), className)}
      >
        {renderChildren()}
      </motion.div>
    )
  }
)Dock.displayName = 'Dock'

export interface DockIconProps {
  size?: number
  magnification?: number
  distance?: number
  mouseX?: any
  className?: string
  children?: React.ReactNode
  props?: PropsWithChildren
  item?: any
  setSelectedMember?: Dispatch<SetStateAction<any>>
}

const DockIcon = ({
  size = 58,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  item,
  setSelectedMember,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  )
  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      onClick={() => setSelectedMember(item)}
      ref={ref}
      style={{ width, height: width }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full bg-neutral-400/40',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
DockIcon.displayName = 'DockIcon'

export { Dock, DockIcon, dockVariants }
