import {
  CardContainer,
  type CardContainerProps
} from '@/components/card-container'

export function Container({
  children,
  variant
}: Pick<CardContainerProps, 'variant' | 'children'>) {
  return (
    <CardContainer
      variant={variant}
      routePath={[{ label: 'Parent' }, { label: 'children', slot: true }]}
      showLinks={['', 'user']}
    >
      {children}
    </CardContainer>
  )
}
