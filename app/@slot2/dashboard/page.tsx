import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentPageSlot2Dashboard() {
  return (
    <Card className="w-full h-full bg-lime-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>2</Slot>
          <Slash />
          Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['', 'common']} />
      </CardContent>
    </Card>
  )
}
