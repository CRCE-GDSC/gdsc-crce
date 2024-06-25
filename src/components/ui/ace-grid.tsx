import { cn } from '@/lib/utils'

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
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento light:shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border light:border-transparent light:bg-white p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none',
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold light:text-neutral-600 text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal light:text-neutral-600 text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}
