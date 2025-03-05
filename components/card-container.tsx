import Links, { type Link } from '@/components/links-list'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Breadcrumb, type PathItem } from './breadcrumb'

export type CardContainerProps = {
  variant: 'default' | 'layout' | 'page' | 'loading' | 'error'
  children: React.ReactNode
  routePath: PathItem[]
  className?: string
  showLinks?: Link[]
  backLink?: boolean
}

export function CardContainer({
  variant,
  children,
  className,
  routePath,
  showLinks,
  backLink
}: CardContainerProps) {
  const cardColor = {
    'bg-green-50': variant === 'default',
    'bg-blue-50': variant === 'layout',
    'bg-amber-50': variant === 'page',
    'bg-gray-50': variant === 'loading',
    'bg-red-50': variant === 'error'
  }

  return (
    <Card className={cn('w-full h-full', cardColor, className)}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-2">
          <Breadcrumb path={routePath} />
          {variant === 'default' && (
            <span className="text-red-500 font-bold">default.tsx</span>
          )}
          {variant === 'layout' && (
            <span className="text-blue-500 font-bold">layout.tsx</span>
          )}
          {variant === 'page' && (
            <span className="text-green-500 font-bold">page.tsx</span>
          )}
          {variant === 'loading' && (
            <span className="text-gray-500 font-bold">loading.tsx</span>
          )}
          {variant === 'error' && (
            <span className="text-red-500 font-bold">error.tsx</span>
          )}
        </CardTitle>

        <CardDescription>
          <Links showLinks={showLinks} backLink={backLink} />
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        {variant === 'layout' ? (
          children
        ) : (
          <div className="h-full flex justify-center items-center">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
