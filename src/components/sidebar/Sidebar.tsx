import { Example } from './Example'
import * as React from 'react'
import SideHeader from './SideHeader'

const Sidebar = () => {
  return (
    <div className="sticky top-0 z-50">
      <Example />
      <SideHeader  />
    </div>
  )
}

export default Sidebar
