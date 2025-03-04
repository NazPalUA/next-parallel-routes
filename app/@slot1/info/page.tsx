import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentPageSlot1Info() {
  return (
    <Card className="w-full h-full bg-violet-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>1</Slot>
          <Slash />
          Info
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['', 'about', 'common']} />
      </CardContent>
    </Card>
  )
}
