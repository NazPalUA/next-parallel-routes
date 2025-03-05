import { CardContainer } from '@/components/card-container'

import { slot2Links } from '../_lib/slot2-links'

export default function Layout({
  children,
  slotCard
}: {
  children: React.ReactNode
  slotCard: React.ReactNode
}) {
  return (
    <CardContainer
      variant="layout"
      routePath={[
        { label: 'Parent' },
        { label: '2', slot: true },
        { label: 'Dashboard' }
      ]}
      showLinks={slot2Links}
    >
      <div className="flex gap-4 h-full">
        <div className="flex-1">{children}</div>
        <div className="flex-1">{slotCard}</div>
      </div>
    </CardContainer>
  )
}
