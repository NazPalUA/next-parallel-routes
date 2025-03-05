import { CardContainer } from '@/components/card-container'

type Props = {
  children: React.ReactNode
  default?: boolean
}

export function Container({ children, default: isDefault = false }: Props) {
  return (
    <CardContainer
      cardContent={children}
      default={isDefault}
      color="amber"
      path={[{ label: 'Parent' }, { label: 'children', slot: true }]}
      showLinks={['user']}
    />
  )
}
