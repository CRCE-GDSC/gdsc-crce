'use client'
import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CanvasRevealEffect } from './canvasreveal'
import Title from './Title'

export function CanvasRevealEffectDemo() {
  return (
    <>
      <Title>ABOUT US</Title>
      <div className="mx-auto flex w-full select-none flex-col items-center justify-center gap-4 bg-white px-8 py-20 dark:bg-inherit lg:flex-row">
        <Card
          title="The GDSC program is a grassroots channel through which Google
                provides development, mobile &amp; web development skills for
                students, towards employability."
          icon={<AceternityIcon1 />}
          context="Concept of GDSC"
          lightColor="bg-gray-200"
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
            dotSize={2}
          />
        </Card>
        <Card
          title=" For students to learn development skills, solve problems through
                technology and inspire them to be world className developers and
                change makers."
          icon={<AceternityIcon2 />}
          context="Why GDSC?"
          lightColor="bg-gray-200"
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
            dotSize={2}
          />
        </Card>
        <Card
          title="GDSC activities are targeted at University students and any
                others including faculty members who want to learn development
                skills &amp; work to solve real-life problems."
          icon={<AceternityIcon3 />}
          context=" Target audience"
          lightColor="bg-gray-200"
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  )
}

const Card = ({
  title,
  icon,
  children,
  context,
  lightColor,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
  context: string
  lightColor: string
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center justify-center rounded-xl border border-gray-200 ${lightColor} p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-300 dark:border-white/[0.1] dark:bg-black dark:hover:shadow-white/5`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 transition-opacity duration-300 group-hover/canvas-card:opacity-20 dark:from-blue-500 dark:to-blue-500" />

      {/* Render the children (CanvasRevealEffect) only when hovered and in dark mode */}
      {hovered && (
        <div className="absolute inset-0 hidden dark:block">{children}</div>
      )}

      <div className="relative z-20" id="about">
        <div className="mt-15 mx-auto flex w-full items-center justify-center text-center">
          {icon}
        </div>
        <div className="mx-auto mt-10 flex w-full items-center justify-center text-center text-2xl font-semibold text-gray-800 transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 dark:text-white">
          {context}
        </div>
        <h2 className="relative z-10 m-4 text-xl font-bold text-gray-800 opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
      </div>

      {/* Radial gradient for the fade effect */}
      <div className="absolute inset-0 bg-white/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
    </div>
  )
}
const AceternityIcon1 = () => {
  return (
    <svg
      className="h-12 w-12 text-xl text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      ></path>
    </svg>
  )
}
const AceternityIcon2 = () => {
  return (
    <svg
      className="h-12 w-12 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M22 12h-4l-3 9L9 3l-3 9H2"
      ></path>
    </svg>
  )
}

const AceternityIcon3 = () => {
  return (
    <svg
      className="h-12 w-12 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
