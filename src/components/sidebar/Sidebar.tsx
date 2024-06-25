import { Example } from './Example'
import * as React from 'react'
import SideHeader from './SideHeader'

const Sidebar = () => {
  return (
    <header className="sticky top-0 z-50">
      <Example />
      <SideHeader  />
    </header>
  )
}

export default Sidebar
