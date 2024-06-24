
'use server'
import Image from 'next/image'

import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import TeamComponent from '@/components/Team'
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <main className="flex flex-col gap-2 items-center justify-between p-2 py-6 md:p-12 md:py-0">
      <h1 className='font-semibold text-4xl md:text-6xl' >GDSC Timeline</h1>
      <h4 className='text-gray-200 text-2xl mb-8'>2022-2024</h4>
      <TeamComponent />
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />


    </main>
  )
}
