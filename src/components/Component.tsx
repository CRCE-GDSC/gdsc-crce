'use client'
import { useState } from 'react'
import { EvervaultCard, Icon } from './ui/evervault-card'

export default function MyComponent() {
  return (
    <div>
      <div className="items start > * px-space-x-6 > * m-8 flex max-w-min flex-row space-x-2">
        <div className="relative m-2 mx-auto flex h-[30rem] max-w-sm flex-col items-start p-4 px-1 ">
          <EvervaultCard imgsrc="/gdsc-f.png" />
        </div>
        <div className="relative m-2 mx-auto flex h-[30rem] max-w-sm flex-col items-start p-4 px-1">
          <EvervaultCard imgsrc="/gdsc-f.png" />
        </div>
        <div className="relative m-2 mx-auto flex h-[30rem] max-w-sm flex-col items-start p-4 px-1">
          <EvervaultCard imgsrc="/gdsc-f.png" />
        </div>
      </div>
    </div>
  )
}
