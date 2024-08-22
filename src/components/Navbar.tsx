'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sun, Moon } from 'lucide-react'
import { ThemeToggle } from './ToogleButton'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'What We Do', href: '#services' },
  { name: 'Events', href: '#events' },
  { name: 'Our Team', href: '#team' },
  { name: 'Contact Us', href: '#contact' },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setVisible(visible)
      setPrevScrollPos(currentScrollPos)
      setHasScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])


  return (
    <>
      <nav
        className={` w-full fixed left-0 right-0 top-0 z-50 text-center transition-transform duration-300 ease-in-out ${hasScrolled
          ? visible
            ? 'translate-y-0'
            : '-translate-y-full'
          : '-translate-y-full'
          }`}
      >
        <div
          className={`shadow-vn mx-4 my-2 rounded-full border-2 border-gray-200 bg-white transition-all duration-300 ease-in-out hover:shadow-xl dark:border-gray-700 dark:bg-black`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 vn:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-shrink items-center vn:flex-1">
                <Link href="/" className="flex justify-center vn:justify-start">
                  <Image
                    src="/gdsc_logo.png"
                    alt="Google Developer Student Clubs Logo"
                    width={10000}
                    height={10000}
                    className="hidden max-h-[50%] w-full min-w-[180px] max-w-[450px] dark:block"
                    quality={100}
                  />
                  <Image
                    src="/gdsc_logo_black.png"
                    alt="Google Developer Student Clubs Logo"
                    width={10000}
                    height={10000}
                    className="max-h-[50%] w-full min-w-[180px] max-w-[450px] dark:hidden"
                    quality={100}
                  />
                </Link>
              </div>

              {/* Desktop navigation */}
              <div className="hidden vn:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-vn hero-text rounded-md px-3 py-2 text-center text-black transition-colors duration-200 hover:bg-gray-700 hover:text-white dark:text-white`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Dark mode toggle for desktop */}
              <div className="hidden vn:block vn:pl-4">
                <ThemeToggle />
              </div>

              {/* Mobile menu and dark mode toggle */}
              <div className="flex items-center vn:hidden">
                {/* Dark mode toggle for mobile */}
                <ThemeToggle />

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`inline-flex items-center justify-center rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white 
                    dark:text-white dark:hover:bg-gray-700
                      text-black hover:bg-gray-200
                  `}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-50' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-24 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        <div
          className={`mx-4 overflow-hidden rounded-3xl border-2 dark:border-gray-700 dark:bg-black border-gray-200 bg-white
           shadow-vn transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[calc(100vh-7rem)]' : 'max-h-0'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 pb-4 pt-5 sm:px-6">
            <div className="mt-6">
              <nav className="grid gap-y-8 text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-vn rounded-md px-3 py-2 font-medium transition-colors duration-200 hover:bg-gray-700 hover:text-white 
                      dark:text-white text-black
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
