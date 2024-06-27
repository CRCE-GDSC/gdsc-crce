import React from 'react'
import { cn } from '@/lib/utils'
import { Meteors } from './Meteors'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div className='pb-20'>
      <div
        className="container mx-auto mt-8 scroll-mt-96 p-4 max-sm:mt-0 xl:py-16"
        id="about"
      >
        <div className="flex items-center justify-center">
          <Image
            src="/assets/gdsc_logo_left.png"
            height={50}
            width={50}
            alt="left_logo"
            className="moveLeft z-10 translate-x-[125px]"
          />
          <h3 className="fadeInOut x-shadow-yellow text-white-500 mx-0 w-auto items-center justify-center px-0 py-3 text-center text-5xl font-bold max-lg:text-4xl max-md:text-4xl max-sm:mt-0 max-sm:text-3xl">
            ABOUT US
          </h3>
          <Image
            src="/assets/gdsc_logo_right.png"
            height={52}
            width={52}
            alt="right_logo"
            className="moveRight z-10 -translate-x-[125px]"
          />
        </div>

        <div className="mt-28 grid grid-cols-1 gap-5 max-sm:px-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="feature-card d-shadow-blue transform overflow-hidden p-5 shadow-lg shadow-blue-900/50 transition-transform duration-300 hover:-translate-y-3">
            <div className="mx-4 mb-4 flex h-10 w-10 items-center justify-center rounded-full">
              <svg
                className="h-8 w-8 text-xl text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </div>
            <div className="font-poppins mb-3 text-xl font-bold">
              <h4 className="font-poppins mx-4 text-gray-500 hover:text-white">
                Concept of GDSC
              </h4>
            </div>
            <p className="font-poppins mx-4 pb-5 text-base text-gray-700">
              The GDSC program is a grassroots channel through which Google
              provides development, mobile &amp; web development skills for
              students, towards employability.
            </p>
            <Meteors number={5} />
          </div>
          <div className="d-shadow-green feature-card transform overflow-hidden p-5 shadow-lg shadow-green-900/50 transition-transform duration-300 hover:-translate-y-3">
            <div className="mx-4 mb-4 flex h-10 w-10 items-center justify-center rounded-full">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                ></path>
              </svg>
            </div>
            <div className="font-poppins mb-2 text-xl font-bold">
              <h4 className="mx-4 text-gray-500 hover:text-white">Why GDSC?</h4>
            </div>
            <p className="font-poppins mx-4 pb-5 text-base text-gray-700">
              For students to learn development skills, solve problems through
              technology and inspire them to be world className developers and
              change makers.
            </p>
            <Meteors number={5} />
          </div>
          <div className="d-shadow-red feature-card transform overflow-hidden p-5 shadow-lg shadow-red-900/50 transition-transform duration-300 hover:-translate-y-3">
            <div className="mx-4 mb-4 flex h-10 w-10 items-center justify-center rounded-full">
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="mb-2 text-xl font-bold">
              <h4 className="mx-4 text-gray-500 ease-in hover:text-white">
                Target audience
              </h4>
            </div>
            <p className="mx-4 text-base text-gray-700">
              GDSC activities are targeted at University students and any others
              including faculty members who want to learn development skills
              &amp; work to solve real-life problems.
            </p>
            <Meteors number={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
