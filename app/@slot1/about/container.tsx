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
      color="indigo"
      path={[
        { label: 'Parent' },
        { label: '1', slot: true },
        { label: 'About' }
      ]}
      showLinks={['', 'info', 'common']}
    />
  )
}
