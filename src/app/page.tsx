'use server'
import Image from 'next/image'
import { Theme } from '@radix-ui/themes'
import MainComponent from '@/components/MainComponent'
import React from 'react'

import MyComponent from '@/components/Component'
import Footer from '@/components/Footer'
import Sidebar from '@/components/sidebar/Sidebar'
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="flex max-h-screen flex-col items-center justify-between p-4 ">
      <main className="flex-grow">
        <Sidebar />
        <Theme appearance="dark">
          
          <div className="flex h-screen min-w-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="rounded-lg bg-white p-8 shadow-lg hover:shadow-xl">
              <h1 className="text-center text-5xl font-extrabold text-gray-800">
                Under Construction
              </h1>
              <p className="mt-4 text-center text-lg text-gray-600">
                Hey! Stay tuned for something amazing!
              </p>
            </div>
          </div>
          <div className='m-4 p-2 w-screen'> main component
          <MainComponent />
          </div>
        </Theme>
      </main>
      <div >
        <Footer />
      </div>
    </div>
  )
}
