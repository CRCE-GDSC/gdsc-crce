import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import Image from 'next/image'


const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
)
export const items = [
  {
    title: 'The Event 1',
    description: 'Rsvp for this Event now!',

    image: (
      //<Image src="/postman_event_poster.webp"  alt="" className="rounded-2xl" />
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: (
      <IconFileBroken
        height={4}
        width={4}
        className="h-4 w-4 text-neutral-500"
      />
    ),
  },
  {
    title: 'Event 2',
    description: 'Rsvp now!.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Event 3',
    description: 'Rsvp now!.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Event 4',
    description: 'Rsvp now!.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Event 5',
    description: 'Join the quest for understanding and enlightenment.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Event 6',
    description: 'Experience the thrill of bringing ideas to life.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-auto w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',

    image: (
      <img
        src="/postman_event_poster.webp"
        alt=""
        className="h-full w-full rounded-2xl"
      />
    ),
    href: '/',
    cta: 'Register now!',
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]
