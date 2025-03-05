import Links, { type Link } from '@/components/links-list'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Props = {
  cardContent?: React.ReactNode
  children?: React.ReactNode
  title: React.ReactNode
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
  showLinks?: Link[]
}

export function CardContainer({
  cardContent,
  children,
  color = 'gray',
  title,
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
        <CardTitle>{title}</CardTitle>
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
