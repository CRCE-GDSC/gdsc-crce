import { Example } from './Example'
import * as React from 'react'
import SideHeader from './SideHeader'

const Sidebar = () => {
  return (
    <div className="sticky">
      <Example />
      <SideHeader  />
    </div>
  )
}

export default Sidebar
