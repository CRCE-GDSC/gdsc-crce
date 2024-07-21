'use client'
import Image from 'next/image'
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
]

export function HomeTeam() {
  return (
    <div className="mt-20 flex h-[30vh] w-full flex-col items-center justify-center">
      <div className="flex items-center justify-center py-4" id="team">
        <h3 className="h2">Meet Our Team</h3>
      </div>
      <div className="my-10 flex w-fit flex-1 scale-90 flex-row items-center justify-center md:scale-[200%]">
        <AnimatedTooltip items={people} />
        <Link href="/team">
          <button className="relative me-2 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200 dark:text-white dark:focus:ring-purple-800">
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-serif transition-all duration-75 ease-in dark:bg-gray-900">
              Our Team{' '}
              <ChevronRight className="h-6 w-6 text-black dark:text-white" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
