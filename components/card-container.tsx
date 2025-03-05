import Links, { Link } from '@/components/links'
import { Slash } from '@/components/slash'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'

type PathItem = {
  label: string
  slot?: boolean
}

type Props = {
  cardContent?: React.ReactNode
  children?: React.ReactNode
  label?: string
  default?: boolean
  color?:
    | 'green'
    | 'blue'
    | 'amber'
    | 'lime'
    | 'red'
    | 'purple'
    | 'cyan'
    | 'teal'
    | 'gray'
    | 'violet'
    | 'fuchsia'
    | 'indigo'
    | 'inherit'
  path?: PathItem[]
  showLinks?: Link[]
}

export function CardContainer({
  cardContent,
  children,
  default: isDefault = false,
  color = 'gray',
  path,
  label,
  showLinks
}: Props) {
  const cardColor = {
    'bg-green-100': color === 'green',
    'bg-blue-100': color === 'blue',
    'bg-amber-100': color === 'amber',
    'bg-lime-100': color === 'lime',
    'bg-red-100': color === 'red',
    'bg-purple-100': color === 'purple',
    'bg-cyan-100': color === 'cyan',
    'bg-teal-100': color === 'teal',
    'bg-gray-100': color === 'gray',
    'bg-violet-100': color === 'violet',
    'bg-fuchsia-100': color === 'fuchsia',
    'bg-indigo-100': color === 'indigo',
    'bg-inherit': color === 'inherit'
  }

  return (
    <Card className={cn('w-full h-full', cardColor)}>
      <CardHeader>
        <CardTitle>
          {label ||
            path?.map((item, index) => (
              <Fragment key={item.label + !!item.slot}>
                <span>
                  {item.slot && '@Slot '}
                  {item.label}
                </span>
                {index !== path.length - 1 && <Slash />}
              </Fragment>
            ))}
          {isDefault && <span className="text-red-500"> (Default)</span>}
        </CardTitle>
        <CardDescription>
          <Links showLinks={showLinks} />
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        {children || (
          <div className="h-full flex justify-center items-center border-1 rounded-md">
            {cardContent}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
