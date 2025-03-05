import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPageCardSlot() {
  return (
    <Card className="w-full h-full bg-green-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>2</Slot>
          <Slash />
          Dashboard
          <Slash />
          <Slot>Card</Slot>
          <Slash />
          Archive
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['dashboard']} />
      </CardContent>
    </Card>
  )
}
