import { cn } from '@/lib/utils'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

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
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
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
  header,
  icon,
  href,
  cta,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  href?: string
  cta?: string | React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento light:shadow-input light:border-transparent light:bg-white row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 shadow-none transition duration-200 hover:shadow-xl',
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="light:text-neutral-600 mb-2 mt-2 font-sans font-bold text-neutral-200">
          {title}
        </div>
        <div className="light:text-neutral-600 font-sans text-xs font-normal text-neutral-300">
          {description}
        </div>
        <div
          className={cn(
            'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300', //group-hover:
            'translate-y-0 group-hover:opacity-100'
          )}
        >
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
