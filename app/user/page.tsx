import { fakeAuth } from '@/lib/fakeAuth'
import { getDataFromDatabase } from '@/lib/getDataFromDatabase'
import { Container } from './container'

export default async function Page() {
  const isAuthenticated = await fakeAuth('random', 0.5)
  if (!isAuthenticated) throw new Error('Not authenticated')

  const data = await getDataFromDatabase()

  return <Container variant="page">{data}</Container>
}
