'use client'
import { useState } from 'react'

export default function MyComponent() {
  const [state, setState] = useState('')

  const handleClick = () => {
    setState('Button clicked')
  }

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
