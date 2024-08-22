
'use server'
import Image from 'next/image'

import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import { TeamComponent } from '@/components/Team'
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <main className="flex flex-col mt-[120px] gap-2 items-center justify-between p-2 py-6 md:p-12 md:py-0">
      <h1 className='font-semibold hero-text text-3xl md:text-6xl' >GDSC Timeline</h1>
      <h4 className='text-black text-2xl dark:text-white mb-8'>2022 - Present</h4>
      <TeamComponent />
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />


    </main>
  )
}
