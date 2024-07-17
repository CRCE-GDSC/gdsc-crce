import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import GoogleLoader from '@/components/ui/goggleloader'
import AllEvents from '@/components/allevents'

const DesktopView: React.FC = () => {
  const router = useRouter()
  const [slug, setSlug] = useState<string | string[] | undefined>()

  useEffect(() => {
    if (router.isReady) {
      setSlug(router.query.slug)
    }
  }, [router.isReady, router.query.slug])

  if (!slug) {
    return <GoogleLoader/> // or a loading indicator
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-inherit bg-inherit">
        {/* <p className="text-center text-xl font-semibold">
          This is the desktop view for {slug}. The full event viewer is only
          available on mobile devices.
        </p> */}
        <AllEvents/>
      </div>
    </>
  )
}

export default DesktopView