'use client'

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DotPattern from "./ui/dot-pattern";

export default function TeamComponent() {

  let data = [
    {
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Team 2024",
      description: "Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book. onic typesetting, remaining essentially unchanged."
    },
    {
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Team 2023",
      description: "Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book. onic typesetting, remaining essentially unchanged."
    },
    {
      img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Team 2022",
      description: "Lorem when an unknown printer took a galley of type and scrambled it to make a type specimen book. onic typesetting, remaining essentially unchanged."
    },
  ]

  return (
    <div className="flex-1 h-full w-full">
      <VerticalTimeline lineColor="rgba(100,100,100,0.5)" >


        {data.map((item, idex) => (
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              boxShadow: "0px 0px 20px -2px rgba(0, 0, 0, 0.16)"
            }}
            contentArrowStyle={{ borderRight: "7px solid  #4285F4" }}
            dateClassName="date"
            date="2023 - present"
            iconStyle={{ background: "rgb(19, 19, 19)", color: "#fff" }}
            icon={<img src="./gdsc-f.png" />}
          >          <BackgroundGradient key={idex} >

              <div key={idex} className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-gray-700">

                <img className="rounded-t-lg" src={item.img} alt="" />

                <div className="p-5">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                  <Link href={`/team/${item.title}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Team
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          </VerticalTimelineElement>
        ))
        }

      </VerticalTimeline >
    </div>
  )

}
