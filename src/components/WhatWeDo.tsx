import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StickyScrollComponent } from './StickyScrollComponent'

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


        <StickyScrollComponent />

      </div>
    </section>
  )
}

export default WhatWeDo




