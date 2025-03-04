import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentPageSlot2Common() {
  return (
    <Card className="w-full h-full bg-yellow-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>2</Slot>
          <Slash />
          Common
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['', 'dashboard']} />
      </CardContent>
    </Card>
  )
}
