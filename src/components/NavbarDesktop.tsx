import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavbarDesktop = () => {
  return (
    <header className="bg-gray-900 text-gray-400 sticky top-2 z-50 rounded-full mx-4 px-5 dark:drop-shadow-md">
      <div className="container justify-center mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row md:justify-center xl:justify-between md:p-4  " >
        <Link
          className="mb-4 flex items-center font-medium text-white md:mb-0 md:pl-4 "
          href="/"
        >
          <Image
            src="/assets/gdsc_logo.png"
            height={50}
            width={50}
            alt="logo"
          />
          <span className="ml-3">
            <Image
              src="/assets/gdsc_crce_title_white.png"
              height={100}
              width={400}
              alt="title"
            />
          </span>
        </Link>
        <nav className="flex p-2 items-center justify-center text-base md:pt-0">
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            Home
          </Link>
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            About Us
          </Link>
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            What We Do
          </Link>
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            Events
          </Link>
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            Our Team
          </Link>
          <Link
            className="gradient-background nav-text mr-5 duration-75 ease-in-out hover:scale-110 hover:text-transparent "
            href="#"
          >
            Contact Us
          </Link>
        </nav>
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

export default NavbarDesktop
