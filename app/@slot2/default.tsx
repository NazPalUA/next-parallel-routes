import { fakeAuth } from '@/lib/fakeAuth'
import { getDataFromDatabase } from '@/lib/getDataFromDatabase'
import { Container } from './container'

export default async function Default() {
  const isAuthenticated = await fakeAuth('random')
  if (!isAuthenticated) throw new Error('Not authenticated')
  const data = await getDataFromDatabase()

  return <Container variant="default">{data}</Container>
}
