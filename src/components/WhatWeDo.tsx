import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StickyScrollComponent } from './StickyScrollComponent'

const WhatWeDo = () => {
  return (
    <section id="WwD">
      <div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/gdsc_logo_left.png"
            height={50}
            width={50}
            alt="left_logo"
            className="moveLeft z-10 translate-x-10"
          />
          <h2 className="title fadeInOut">What we do</h2>
          <Image
            src="/assets/gdsc_logo_right.png"
            height={50}
            width={50}
            alt="right_logo"
            className="moveRight z-10 -translate-x-10"
          />
        </div>
        <p className="text-center">
          GDSC CRCE boasts of a multifaceted community with members from various
          disciplines working together. By joining GDSC CRCE students get to
          work with an exceptionally skilled group of developers, connect with
          developers around the world, make projects,organized workshops and
          many more.
        </p>
      </div>
      <div className="flex w-screen justify-around">
        <StickyScrollComponent />
      </div>
    </section>
  )
}

export default WhatWeDo
