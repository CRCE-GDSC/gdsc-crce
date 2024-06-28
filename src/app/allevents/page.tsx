'use server'
import { Theme } from '@radix-ui/themes'
import AllEvents from '@/components/allevents'
import RootLayout from '../layout'

export default async function Home({
  params,
}: {
  params: { slug: string }
}) {
  var isLoading = false // Set to true to show a loading state

  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)

  if (isLoading) {
    return <div>Loading...</div> // Or any other loading state you prefer
  }

  return (
      <main className=" flex flex-col max-h-screen justify-between p-6">
        <div className="h-screen">
          <AllEvents/>
        </div>
      </main>
   
  )
}
