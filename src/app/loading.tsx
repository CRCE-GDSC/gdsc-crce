import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-bounce">
        <Image src="/gdsc-fl.png" alt="gdsc-logo" width={500} height={500} />
      </div>
      <div className="animate-bounce-reverse">
        <Image src="/gdsc-fr.png" alt="gdsc-logo" width={500} height={500} />
      </div>
    </div>
  )
}
