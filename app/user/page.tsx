import Links from '@/components/Links'
import { Parent } from '@/components/Parent'
import { Slash } from '@/components/Slash'
import { Slot } from '@/components/Slot'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ChildPage() {
  return (
    <Card className="w-full h-full bg-gray-50">
      <CardHeader>
        <CardTitle>
          <Parent />
          <Slash />
          <Slot>children</Slot>
          <Slash />
          User
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Links showLinks={['']} />
      </CardContent>
    </Card>
  )
}
