'use server'
import AboutUs from '@/components/Aboutus'
import ResponsiveCarousel from '@/components/Events'
import { HomeTeam } from '@/components/home-team'
import DotPattern from '@/components/ui/dot-pattern'
import WhatWeDo from '@/components/WhatWeDo'
import { cn } from '@/lib/utils'
import Hero from '@/components/Hero'
import { HeroParallax } from '@/components/ui/hero-parallax'

//import { HomeTeam } from '@/components/home-team'
const products = [
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/3.jpeg",
  },


  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/1.jpeg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/2.jpeg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/3.jpeg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/4.jpeg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/images/5.jpeg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/images/6.jpeg",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/4.jpeg",
  },

];
export default async function Home() {
  const delay = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))
  await delay(1000) // Add a delay of 1 second (adjust as needed)
  return (
    <div className="bg-white dark:bg-black">
      <DotPattern
        className={cn(
          'bg-inherit [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-black'
        )}
      />
      <HeroParallax products={products} />
      <AboutUs />
      <WhatWeDo />
      <div className="vn:my-10">
        <ResponsiveCarousel />
      </div>
      <HomeTeam />
    </div>
  )
}
