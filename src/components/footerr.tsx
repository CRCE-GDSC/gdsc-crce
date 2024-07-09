import React from 'react'
import Image from 'next/image'
const Footerr = () => {
  return (
    <div className="mt-20 bg-inherit">
      <div className="flex-grow px-8 pt-14">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="lg:mt-8">
            <div className="pb-3 text-lg font-semibold uppercase dark:text-white">
              Useful Links
            </div>
            <div className="grid">
              <div className="pb-4 text-gray-900 ease-in-out hover:translate-x-1 hover:text-red-500 hover:underline dark:text-gray-200 dark:hover:text-red-500">
                {' '}
                <a href="/">Home </a>
              </div>
              <div className="pb-4 text-gray-900 ease-in-out hover:translate-x-1 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-500">
                {' '}
                <a href="#events">Events</a>
              </div>
              <div className="pb-4 text-gray-900 ease-in-out hover:translate-x-1 hover:text-green-500 hover:underline dark:text-gray-200 dark:hover:text-green-500">
                {' '}
                <a href="#team">Our Team</a>
              </div>
              <div className="pb-4 text-gray-900 ease-in-out hover:translate-x-1 hover:text-yellow-500 hover:underline dark:text-gray-200 dark:hover:text-yellow-500">
                <a href="https://developers.google.com/community-guidelines">
                  Community Guidelines
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:col-span-1 lg:mt-8">
            <div className="">
              <h1 className="pb-3 text-lg font-semibold uppercase dark:text-white">
                Contact us
              </h1>
              <h2 className="py-1 text-gray-900 dark:text-gray-200">
                crcegdsc@gmail.com
              </h2>
            </div>
            <div className="flex flex-row py-4" id="foot">
              <div className="mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-40 hover:bg-blue-300">
                <a
                  className=""
                  href="https://www.instagram.com/gdsc_crce/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
              <div className="mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-40 hover:bg-blue-300">
                <a
                  className=""
                  href="https://www.linkedin.com/company/gdsc-crce/mycompany/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.76 0H3.24C1.45 0 0 1.45 0 3.24v17.52C0 22.55 1.45 24 3.24 24h17.52c1.79 0 3.24-1.45 3.24-3.24V3.24C24 1.45 22.55 0 20.76 0zM7.48 19.27H4.67V9.71h2.81v9.56h-.01zM6.08 8.06a2.12 2.12 0 1 1 0-4.24 2.12 2.12 0 0 1 0 4.24zM19.27 19.27h-2.81v-4.99c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64v5.07h-2.81V9.71h2.7v1.4h.04c.37-.7 1.28-1.44 2.66-1.44 2.84 0 3.36 1.87 3.36 4.3v4.3z" />
                  </svg>
                </a>
              </div>
              <div className="mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-40 hover:bg-blue-300">
                <a
                  className=""
                  href="https://twitter.com/gdsc_crce"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="auto"
                    viewBox="0 0 24 24"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"
                    />{' '}
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4410136005313!2d72.81818181433687!3d19.04433805791724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1660900113753!5m2!1sen!2sin"
              width="100%"
              height="200px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mb-10 flex items-start justify-start rounded-3xl"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start py-6">
          <Image
            src="/gdsc_logo.png"
            height={10000}
            width={10000}
            alt="gdsc_logo"
            className="hidden dark:block min-w-[180px] max-w-[450px]"
          />
          <Image
            src="/gdsc_logo_black.png"
            height={10000}
            width={10000}
            alt="gdsc_logo"
            className="dark:hidden min-w-[180px] max-w-[450px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Footerr
