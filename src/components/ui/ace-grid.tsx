import { cn } from '@/lib/utils'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

export const AceGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export const AceGridCard = ({
  className,
  title,
  description,

  image,
  icon,
  href,
  cta,
}: {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode

  image?: string
  icon?: ReactNode
  href?: string
  cta?: string
}) => {
  return (
    <div
      className={cn(
        'group/bento light:shadow-input light:border-transparent light:bg-white row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-white/[0.2] bg-black p-4 shadow-none transition duration-200 hover:shadow-xl',
        className
      )}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'border-box',
      }}
    >
      <div className="bottom-0 z-10 translate-y-10 transform-gpu bg-slate-400 transition-all duration-200 group-hover/bento:translate-y-0 group-hover/bento:opacity-100">
        <div className="pb-6">
          {icon}
          <div className="light:text-neutral-600 mb-2 font-sans font-bold text-neutral-800">
            {title}
          </div>
          <div className="light:text-neutral-600 font-sans text-xs font-normal text-neutral-800">
            {description}
          </div>
        </div>
        <div>
          <Button
            variant="ghost"
            asChild
            size="2" //size="sm"
            className="pointer-events-auto flex items-center"
          >
            <a href={href} className="text-gray-50">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export const MarqueeCard = ({
  className,
  title,
  description,
  image,
  href,
}: {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  image?: ReactNode
  href?: string
}) => {
  return (
    <div
      className={cn(
        'group/bento light:shadow-input light:border-transparent light:bg-white auto-row-auto flex max-h-[400px] flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-white/[0.2] bg-black p-4 shadow-none transition duration-200 hover:shadow-xl',
        className
      )}
    >
      <div className="flex h-full min-h-[20rem] w-[200px] min-w-[20rem] rounded-xl">
        {image}
      </div>

      <div className="bottom-0 z-10 translate-y-16 transform-gpu transition-all duration-200 group-hover/bento:translate-y-0 group-hover/bento:opacity-100">
        <div className="flex flex-row">
          <div className="cols-span-1 justify-items-start pb-1">
            <div className="light:text-neutral-600 mb-2 font-sans font-bold text-neutral-200">
              {title}
            </div>
            <div className="light:text-neutral-600 font-sans text-xs font-normal text-neutral-300">
              {description}
            </div>
          </div>
          <div className="cols-span-2 justify-items-end pl-10">
            <Button
              variant="ghost"
              asChild
              size="2" //size="sm"
              className="pointer-events-auto flex items-center"
            >
              <a href={href} className="text-gray-50">
                <p>
                  Know More!
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </p>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
