/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from '@radix-ui/react-icons'
import {EvervaultCard} from  '../components/ui/evervault'


export const features = [
  {
    Icon: GlobeIcon,
    name: 'GDSC Ideathon',
    description: 'in seminar hall',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 h-auto p-2">
        <img src="/ideation.jpg" alt="" />
      </div>
    ),
    className: ' auto-rows-auto col-span-4 lg:col-span-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Mathday',
    description: 'in Samwaad',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 h-fit w-auto p-2">
        <EvervaultCard imgsrc="/mathday.jpeg" className="h-auto w-auto" />
      </div>
    ),
    className: ' auto-rows-auto col-span-4 lg:col-span-2',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 3',
    description: 'in seminar hall',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 p-2">
        <EvervaultCard imgsrc="/gdsc-f.png" className="h-[50vh]" />
      </div>
    ),
    className: ' auto-rows-auto col-span-4 lg:col-span-2',
  },
  {
    Icon: GlobeIcon,
    name: 'hachover 3.0',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 p-2">
        <img src="/HackOver3.0.jpg" alt=" hey" className="h-auto w-auto" />
      </div>
    ),
    className: ' auto-rows-auto col-span-4 lg:col-span-2',
  },
]

const events = [
  {
    Icon: GlobeIcon,
    name: 'Event 1',
    description: 'hey there' ,
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-[200px]"
        />
      </div>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1',
  },
]