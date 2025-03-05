import { Breadcrumb } from '@/components/breadcrumb'
import { CardContainer } from '@/components/card-container'

type Props = {
  children: React.ReactNode
  default?: boolean
}

export function Container({ children, default: isDefault = false }: Props) {
  return (
    <CardContainer
      cardContent={children}
      title={
        <Breadcrumb
          default={isDefault}
          path={[
            { label: 'Parent' },
            { label: '2', slot: true },
            { label: 'Dashboard' },
            { label: 'Card', slot: true }
          ]}
        />
      }
      color="green"
      showLinks={['dashboard/archive']}
    />
  )
}
