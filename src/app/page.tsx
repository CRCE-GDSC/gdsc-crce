'use server'
import Image from 'next/image'
import MyComponent from '@/components/Component'
import { Theme } from '@radix-ui/themes'
import MainComponent from '@/components/MainComponent'

export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-800 p-24">
      {/* <div>
        <MyComponent />
      </div> */}
    <Theme appearance='dark' >
      <MainComponent />
    </Theme>

    </main>
  )
}
