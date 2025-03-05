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
      color="violet"
      path={[
        { label: 'Parent' },
        { label: '1', slot: true },
        { label: 'Info' }
      ]}
      showLinks={['', 'about', 'common']}
    />
  )
}
