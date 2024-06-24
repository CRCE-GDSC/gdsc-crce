import { RefObject, useRef } from 'react'

export function useDimensions<T extends HTMLElement>(
  ref: RefObject<T>
): { width: number; height: number } | null {
  const dimensions = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  if (ref.current) {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  } else {
    // Return null for unmeasured states
    return null
  }

  return dimensions.current
}
