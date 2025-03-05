import {
  CardContainer,
  type CardContainerProps
} from '@/components/card-container'
import { slot2Links } from '../_lib/slot2-links'

export function Container({
  children,
  variant
}: Pick<CardContainerProps, 'variant' | 'children'>) {
  return (
    <CardContainer
      variant={variant}
      routePath={[
        { label: 'Parent' },
        { label: '2', slot: true },
        { label: 'Common' }
      ]}
      showLinks={slot2Links}
    >
      {children}
    </CardContainer>
  )
}
