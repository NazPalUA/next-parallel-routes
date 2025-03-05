import { DefaultParentheses } from '@/components/DefaultParentheses'
import Links, { Link } from '@/components/Links'
import { Slash } from '@/components/Slash'
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
  cardContent: React.ReactNode
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
  path: PathItem[]
  showLinks: Link[]
}

export function CardContainer({
  cardContent,
  default: isDefault = false,
  color = 'gray',
  path,
  showLinks
}: Props) {
  const cardColor = {
    'bg-green-50': color === 'green',
    'bg-green-100': color === 'green' && isDefault,
    'bg-blue-50': color === 'blue',
    'bg-blue-100': color === 'blue' && isDefault,
    'bg-amber-50': color === 'amber',
    'bg-amber-100': color === 'amber' && isDefault,
    'bg-lime-50': color === 'lime',
    'bg-lime-100': color === 'lime' && isDefault,
    'bg-red-50': color === 'red',
    'bg-red-100': color === 'red' && isDefault,
    'bg-purple-50': color === 'purple',
    'bg-purple-100': color === 'purple' && isDefault,
    'bg-cyan-50': color === 'cyan',
    'bg-cyan-100': color === 'cyan' && isDefault,
    'bg-teal-50': color === 'teal',
    'bg-teal-100': color === 'teal' && isDefault,
    'bg-gray-50': color === 'gray',
    'bg-gray-100': color === 'gray' && isDefault,
    'bg-violet-50': color === 'violet',
    'bg-violet-100': color === 'violet' && isDefault,
    'bg-fuchsia-50': color === 'fuchsia',
    'bg-fuchsia-100': color === 'fuchsia' && isDefault,
    'bg-indigo-50': color === 'indigo',
    'bg-indigo-100': color === 'indigo' && isDefault
  }
  return (
    <Card className={cn('w-full h-full', cardColor)}>
      <CardHeader>
        <CardTitle>
          {path.map((item, index) => (
            <Fragment key={item.label + !!item.slot}>
              <span>
                {item.slot && '@Slot'}
                {item.label}
              </span>
              {index !== path.length - 1 && <Slash />}
            </Fragment>
          ))}
          {isDefault && <DefaultParentheses />}
        </CardTitle>
        <CardDescription>
          <Links showLinks={showLinks} />
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        <div className="h-full flex justify-center items-center border-1 rounded-md">
          {cardContent}
        </div>
      </CardContent>
    </Card>
  )
}
