import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StickyScrollComponent } from './StickyScrollComponent'
import InteractiveCircle from './ui/InteractiveCircle'
const WhatWeDo = () => {
  return (
    <section className="my-28" id="WwD">
      <div>
        <div className="mb-16 flex items-center justify-center">
          <Image
            src="/assets/gdsc_logo_left.png"
            height={50}
            width={50}
            alt="left_logo"
            className="moveLeft z-10 translate-x-[105px]"
          />
          <h2 className="title fadeInOut">WHAT WE DO</h2>
          <Image
            src="/assets/gdsc_logo_right.png"
            height={52}
            width={52}
            alt="right_logo"
            className="moveRight z-10 -translate-x-[105px]"
          />
        </div>
        <p className="visible text-wrap px-5 text-center md:invisible">
          GDSC CRCE boasts of a multifaceted community with members from various
          disciplines working together. By joining GDSC CRCE students get to
          work with an exceptionally skilled group of developers, connect with
          developers around the world, make projects,organized workshops and
          many more.
        </p>
        <div className="md:flex">
          <div className="min-h-screen pl-20 md:pl-32">
            <InteractiveCircle />
          </div>
          <p className="invisible sticky top-0 h-screen text-wrap px-10 pt-[42vh] text-center md:visible">
            GDSC CRCE boasts of a multifaceted community with members from
            various disciplines working together. By joining GDSC CRCE students
            get to work with an exceptionally skilled group of developers,
            connect with developers around the world, make projects,organized
            workshops and many more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
