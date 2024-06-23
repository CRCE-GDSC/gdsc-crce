

'use server'
import DotPattern from '@components/ui/dot-pattern'
import { cn } from '@lib/utils'
import TeamView from '@/components/TeamView'
export default async function Home({ params }: { params: { slug: string } }) {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <main className="flex flex-col gap-2 items-center justify-between h-[100svh] w-screen p-12 md:p-12">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-semibold text-4xl md:text-6xl' >GDSC {params.slug.replace("%20", " ")}</h1>
        <h4 className='text-gray-200 text-2xl'>Meet Our Team</h4>
      </div>
      <TeamView />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />


    </main>
  )
}
