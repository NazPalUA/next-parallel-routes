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
      color="lime"
      path={[
        { label: 'Parent' },
        { label: '2', slot: true },
        { label: 'Dashboard' },
        { label: 'children', slot: true }
      ]}
      showLinks={[]}
    />
  )
}
