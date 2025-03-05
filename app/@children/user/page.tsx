import { fakeAuth } from '@/lib/fakeAuth'
import { getDataFromDatabase } from '@/lib/getDataFromDatabase'
import { Container } from './container'

export default async function Page() {
  await fakeAuth(true, 0.2)
  const data = await getDataFromDatabase()

  return <Container variant="page">{data}</Container>
}
