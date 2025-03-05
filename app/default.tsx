import { fakeAuth } from '@/lib/fakeAuth'
import { getDataFromDatabase } from '@/lib/getDataFromDatabase'
import { Container } from './container'

export default async function ParentDefault() {
  await fakeAuth()
  const data = await getDataFromDatabase()

  return <Container default>{data}</Container>
}
