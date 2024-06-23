
"use client"

import { Dock, DockIcon } from '@components/ui/dock'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackgroundGradient } from './ui/background-gradient'

export default function TeamView() {
  const [selectedMember, setSelectedMember] = useState()

  useEffect(() => { console.log(selectedMember) }, [selectedMember])

  const data = [1, 2, 3, 4, 5]

  return (
    <div className="flex flex-col flex-1 items-center justify-between gap-8">
      <div className='flex-1 flex justify-center items-center '>
        <AnimatePresence mode='wait'>
          {selectedMember && (
            <motion.div
              key={selectedMember}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BackgroundGradient>
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-end px-4 pt-4">

                    <div className="flex flex-col items-center pb-10">
                      <img className="w-44 h-24 mb-3 aspect-square rounded-full shadow-lg" src="/gdsc-f.png" alt="Bonnie image" />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{selectedMember}</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      <div className="flex mt-4 md:mt-6">
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundGradient >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='flex gap-4 flex-row'>
          <ChevronLeft color='white' size={26} />
          <span className="text-xl font-semibold">GDSC Associate</span>
          <ChevronRight color='white' size={26} />
        </div>
        <Dock>
          {data.map((item, index) => (
            <DockIcon key={index} item={item} setSelectedMember={setSelectedMember} className='p-2'>
              <img src="/gdsc-f.png" />
            </DockIcon>
          ))}
        </Dock>
      </div>
    </div>
  )
}

