/* eslint-disable @next/next/no-img-element */
import { AceGrid, AceGridCard } from './ui/ace-grid'
import { Allitems } from '@/data/AceGridData'

const AllEvents = () => {
  return (
    <div className="mx-[15%] max-w-7xl flex-row items-center justify-center p-[2px]">
      <div className="flex items-center justify-center">
        <img src="/gdsc-fl.png" alt="" width={50} />
        <h2 className="title fadeInOut">All Events</h2>
        <img src="/gdsc-fr.png" alt="" width={50} />
      </div>
      <div className="flex items-center justify-center">
        <AceGrid className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
          {Allitems.map((event, i) => (
            <AceGridCard
              className={
                i === 3 || i === 6 ? 'md:col-span-2 md:row-span-1' : ''
              }
              key={i}
              title={event.title}
              description={event.description}
              image={event.image}
              href={event.href}
              cta={event.cta}
            />
          ))}
        </AceGrid>
      </div>
    </div>
  )
}
export default AllEvents
