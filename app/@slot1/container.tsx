import {
  CardContainer,
  type CardContainerProps
} from '@/components/card-container'
import { slot1Links } from './_lib/slot1-links'

export function Container({
  children,
  variant
}: Pick<CardContainerProps, 'variant' | 'children'>) {
  return (
    <CardContainer
      variant={variant}
      routePath={[{ label: 'Parent' }, { label: '1', slot: true }]}
      showLinks={slot1Links}
    >
      {children}
    </CardContainer>
  )
}
