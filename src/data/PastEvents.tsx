/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from '@radix-ui/react-icons'
import {EvervaultCard} from  '../components/ui/evervault'
//import { Button } from '@radix-ui/themes'

// this is the data for the upcoming events
export const events = [
  {
    Icon: () => (
      <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" />
    ),

    name: 'Event 1',
    description: 'hey there',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      //the image or event poster goes here
      <div className="m-2 rounded-3xl p-2">
        <img src="/postman_event_poster.webp" alt="" className="rounded-2xl" />
      </div>
    ),
    className: ' h-fit',
  },
  {
    Icon: () => (
      <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" />
    ),
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 rounded-3xl p-2">
        <img src="/postman_event_poster.webp" alt="" className="rounded-2xl" />
      </div>
    ),
    className: '',
  },
  {
    Icon: () => (
      <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" />
    ),
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 rounded-3xl p-2">
        <img src="/postman_event_poster.webp" alt="" className="rounded-2xl" />
      </div>
    ),
    className: '',
  },
  {
    Icon: () => (
      <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" />
    ),
    name: 'Event 4',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 rounded-3xl p-2">
        <img src="/postman_event_poster.webp" alt="" className="rounded-2xl" />
      </div>
    ),
    className: '',
  },
]

// this is the data for the past events image Gallery

export const MarqeeEvents = [ 
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 1',
    description: 'hey there',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-1 p-1">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className: ' h-fit',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-1 h-fit p-1">
        <EvervaultCard
          imgsrc="/Bit-N-Build.jpg"
          className="h-auto w-full"
        />
      </div>
    ),
    className: '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-1 h-fit p-1">
        <EvervaultCard
          imgsrc="/HackOver3.0.jpg"
          className="h-auto w-full"
        />
      </div>
    ),
    className:
      '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 4',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="min-w- m-1 h-fit p-1">
        <EvervaultCard
          imgsrc="/mathday.jpeg"
          className="h-auto w-auto"
        />
      </div>
    ),
    className: '',
  },
  
]

export const PastEvents = [
  
]
