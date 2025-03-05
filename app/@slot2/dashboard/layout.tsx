import { Breadcrumb } from '@/components/breadcrumb'
import { CardContainer } from '@/components/card-container'

export default function RootLayout({
  children,
  slotCard
}: Readonly<{
  children: React.ReactNode
  slotCard: React.ReactNode
}>) {
  return (
    <CardContainer
      title={
        <Breadcrumb
          layout={true}
          path={[
            { label: 'Parent' },
            { label: '2', slot: true },
            { label: 'Dashboard' }
          ]}
        />
      }
      color="inherit"
      showLinks={['', 'dashboard', 'common']}
    >
      <div className="flex gap-4 h-full">
        <div className="flex-1">{children}</div>
        <div className="flex-1">{slotCard}</div>
      </div>
    </CardContainer>
  )
}
