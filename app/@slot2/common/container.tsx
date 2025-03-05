import { CardContainer } from '@/components/card-container'
import { Parent } from '@/components/Parent'
import { Slot } from '@/components/Slot'

type Props = {
  children: React.ReactNode
  default?: boolean
}

export function Container({ children, default: isDefault = false }: Props) {
  return (
    <CardContainer
      cardContent={children}
      default={isDefault}
      color="green"
      path={[<Parent key={1} />, <Slot key={2}>2</Slot>, 'Common']}
      showLinks={['', 'dashboard']}
    />
  )
}
