import * as React from 'react'
import InteractiveCircle from './ui/InteractiveCircle'
import Title from './Title'

const WhatWeDo = () => {
  return (
    <section className="bg-inherit dark:bg-transparent" id="WwD">
      <div>
        <Title >WHAT WE DO</Title>
        <div className='visible vn:invisible mx-[20%] w-[60%]'>
          <p className="text-wrap text-center dark:text-white">
            <span className="font-bold">GDSC CRCE</span> boasts of a
            multifaceted community with members from various disciplines working
            together. By joining <span className="font-bold">GDSC CRCE</span>{' '}
            students get to work with an exceptionally skilled group of
            developers, connect with developers around the world, make
            projects,organized workshops and many more.
          </p>
        </div>

        <div className="md:flex">
          <div className="min-h-screen pl-20 md:pl-72 vn:pl-32">
            <InteractiveCircle />
          </div>
          <div className="invisible sticky top-0 mx-20 h-screen w-[40%] pt-[43vh] vn:visible">
            <p className="text-wrap text-center dark:text-white">
              <span className="font-bold">GDSC CRCE</span> boasts of a
              multifaceted community with members from various disciplines
              working together. By joining
              <span className="font-bold">GDSC CRCE</span> students get to work
              with an exceptionally skilled group of developers, connect with
              developers around the world, make projects,organized workshops and
              many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
