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
    description:
      '',
    date: "2024 - 2025"

  },
  {
    img: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Team 2023',
    description:
      '',
    date: "2023 - 2024"

  },
  {
    img: 'https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Team 2022',
    description:
      '',
    date: "2022 - 2023"
  },
]

export function TeamComponent() {
  return (
    <div className="h-full w-full flex-1">
      <VerticalTimeline lineColor="rgba(100,100,100,0.5)">
        {data.map((item, idex) => (
          <VerticalTimelineElement
            key={idex}
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'transparent',
              boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.16)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #4285F4' }}
            dateClassName="date"
            date={item.date}
            iconStyle={{ background: 'rgb(19, 19, 19)', color: '#fff' }}
            icon={<img src="./gdsc-f.png" />}
          >
            {' '}
            <BackgroundGradient key={idex}>
              <div
                key={idex}
                className="max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-zinc-900"
              >
                <img className="rounded-t-lg" src={item.img} alt="" />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  <Link
                    href={`/team/${item.title}`}
                    className=" mt-4 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Team
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
