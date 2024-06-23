import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideHeader = () => {
  return (
    <header className="body-font w-screen bg-gray-900 text-gray-400">
      <div className="container mx-auto items-center flex flex-col flex-wrap p-4 md:flex-row">
        <Link
          className="title-font mb-0 flex items-center font-medium text-white md:mb-0"
          href="/"
        >
          <Image
            src="/assets/gdsc_logo.png"
            height={30}
            width={30}
            alt="logo"
          />
          <span className="ml-1">
            <Image
              src="/assets/gdsc_crce_title_white.png"
              height={100}
              width={250}
              alt="title"
            />
          </span>
        </Link>

        {/* <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  )
}

export default SideHeader
