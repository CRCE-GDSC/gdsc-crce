'use server'
import Image from 'next/image'
import MyComponent from '@/components/Component'
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <MyComponent />
    </div>
    </main>
  )
}
