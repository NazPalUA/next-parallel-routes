import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RootLayout({
  children,
  slotCard
}: Readonly<{
  children: React.ReactNode
  slotCard: React.ReactNode
}>) {
  return (
    <Card className="w-full h-full ">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>2</Slot>
          <Slash />
          Dashboard
        </CardTitle>
        <Links showLinks={['', 'dashboard', 'common']} />
      </CardHeader>
      <CardContent className="flex gap-4 h-full">
        <div className="flex-1">{children}</div>
        <div className="flex-1">{slotCard}</div>
      </CardContent>
    </Card>
  )
}
