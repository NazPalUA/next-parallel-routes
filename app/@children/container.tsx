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
          path={[{ label: 'Parent' }, { label: 'children', slot: true }]}
        />
      }
      color="amber"
      showLinks={['user']}
    />
  )
}
