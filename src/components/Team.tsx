'use client'
import Image from 'next/image'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { BackgroundGradient } from './ui/background-gradient'
import 'react-vertical-timeline-component/style.min.css'
import Link from 'next/link'

let data = [
  {
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Team 2024',
    description: 'Our latest team, driving innovation and growth.',
    date: "2024 - 2025"
  },
  {
    img: '/24.jpg',
    title: 'Team 2023',
    description: 'A year of challenges overcome and milestones achieved.',
    date: "2023 - 2024"
  },
  {
    img: '/23.jpg',
    title: 'Team 2022',
    description: 'Where our journey began, setting the foundation for success.',
    date: "2022 - 2023"
  },
]

export function TeamComponent() {
  return (
    <div className="w-full min-h-screen py-10">
      <VerticalTimeline lineColor="rgba(99,100,100,0.5)">
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'transparent',
              boxShadow: 'none',
              padding: 0,
            }}
            contentArrowStyle={{ borderRight: '7px solid #4285F4' }}
            date={item.date}
            iconStyle={{ background: 'rgb(19, 19, 19)', color: '#fff' }}
            icon={<img src="./gdsc-f.png" alt="GDSC Icon" className="w-full h-full object-contain rounded-full" />}
          >
            <BackgroundGradient className="w-full">
              <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-64 md:h-auto md:w-1/3 md:absolute md:top-0 md:bottom-0 md:left-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:w-2/3 md:ml-[33.333333%]">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <Link
                    href={`/team/${item.title}`}
                    className="inline-flex items-center mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    View Team
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </BackgroundGradient>          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
