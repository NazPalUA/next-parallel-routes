import { DefaultParentheses } from '@/components/DefaultParentheses'
import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentDefault() {
  return (
    <Card className="w-full h-full bg-amber-100">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>children</Slot>
          <DefaultParentheses />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['user']} />
      </CardContent>
    </Card>
  )
}
