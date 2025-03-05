import 'server-only'

export async function getDataFromDatabase() {
  await new Promise(resolve => {
    setTimeout(() => resolve(true), 500)
  })
  return 'This is a test data from the database'
}
