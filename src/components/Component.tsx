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
      <button onClick={handleClick} className="text-xl text-red-500">
        Click me
      </button>
    </div>
  )
}
