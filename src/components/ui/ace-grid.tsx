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
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[24rem] md:grid-cols-3',
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
  
  image?: ReactNode
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
    >
      <div className="flex h-full min-h-[10rem] w-full flex-1 rounded-xl">
        {image}
      </div>

      <div className="bottom-0 z-10 translate-y-10 transform-gpu transition-all duration-200 group-hover/bento:translate-y-0 group-hover/bento:opacity-100">
        <div className='pb-6'>
          {icon}
          <div className="light:text-neutral-600 mb-2  font-sans font-bold text-neutral-200">
            {title}
          </div>
          <div className="light:text-neutral-600 font-sans text-xs font-normal text-neutral-300">
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
