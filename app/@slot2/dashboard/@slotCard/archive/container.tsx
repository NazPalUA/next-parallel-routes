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
      color="green"
      path={[
        { label: 'Parent' },
        { label: '2', slot: true },
        { label: 'Dashboard' },
        { label: 'Card', slot: true },
        { label: 'Archive' }
      ]}
      showLinks={['dashboard']}
    />
  )
}
