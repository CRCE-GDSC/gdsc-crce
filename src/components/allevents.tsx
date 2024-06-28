import { AceGrid, AceGridCard } from './ui/ace-grid'
import { Allitems } from '@/data/AceGridData'

export default function AllEvents() {
  return (
    <div className="m-2 p-2">
      <div className="flex items-center justify-center">
        <h2 className="title fadeInOut">All Events</h2>
      </div>
      <AceGrid className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Allitems.map((event) => (
          // eslint-disable-next-line react/jsx-key
          <AceGridCard {...event} />
        ))}
      </AceGrid>
    </div>
  )
}
