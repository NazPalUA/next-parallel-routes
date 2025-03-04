import { DefaultParentheses } from '@/components/DefaultParentheses'
import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentDefaultSlot2() {
  return (
    <Card className="w-full h-full bg-green-100">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>2</Slot>
          <DefaultParentheses />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['', 'dashboard', 'common']} />
      </CardContent>
    </Card>
  )
}
