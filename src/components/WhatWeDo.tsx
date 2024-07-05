import * as React from 'react'
import InteractiveCircle from './ui/InteractiveCircle'
import Title from './Title'
const WhatWeDo = () => {
  return (
    <section className="my-28" id="WwD">
      <div>
        <Title>What We Do</Title>
        <p className="visible text-wrap px-5 text-center lg:invisible">
          <span className="font-bold">GDSC CRCE</span> boasts of a multifaceted
          community with members from various disciplines working together. By
          joining <span className="font-bold">GDSC CRCE</span> students get to
          work with an exceptionally skilled group of developers, connect with
          developers around the world, make projects,organized workshops and
          many more.
        </p>
        <div className="md:flex">
          <div className="min-h-screen pl-20 md:pl-32">
            <InteractiveCircle />
          </div>
          <p className="invisible sticky top-0 h-screen text-wrap px-10 pt-[42vh] text-center lg:visible">
            <span className="font-bold">GDSC CRCE</span> boasts of a
            multifaceted community with members from various disciplines working
            together. By joining <span className="font-bold">GDSC CRCE</span>{' '}
            students get to work with an exceptionally skilled group of
            developers, connect with developers around the world, make
            projects,organized workshops and many more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
