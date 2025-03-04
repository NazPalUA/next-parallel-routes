import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentPageSlot1() {
  return (
    <Card className="w-full h-full bg-blue-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>1</Slot>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['', 'about', 'info', 'common']} />
      </CardContent>
    </Card>
  )
}
