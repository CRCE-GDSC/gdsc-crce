import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WhatWeDo = () => {
  return (
    <section id="WwD">
      <div>
        <div className="Title text-center">
          <h2>What we do</h2>
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis
          facere neque rem earum minima magnam totam cupiditate! Sapiente
          numquam earum dolor voluptate quas laboriosam qui illum perspiciatis
          assumenda iusto!
        </p>
      </div>
      <div className="flex w-screen justify-around">
        <div className="grid-rows-* grid grid-cols-2 gap-10 gap-x-16 p-4">
          <Link
            href={'#'}
            className=" bg-gray-700 rounded-full p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            Blockchain
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            App development
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            Web development
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            Machine learning
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            Cyber secruity
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            Cloud computing
          </Link>
          <Link
            href={'#'}
            className="rounded-full bg-red-600 p-3 duration-200 ease-in-out hover:scale-110 hover:bg-blue-500"
          >
            IOT
          </Link>
        </div>
        <div className="flex items-center justify-center">gif img</div>
      </div>
    </section>
  )
}

export default WhatWeDo
