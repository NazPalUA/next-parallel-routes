import { connection } from 'next/server'
import 'server-only'

/**
 * Simulates an authentication process with configurable success and delay
 *
 * This function is intended for development and testing purposes only.
 * It uses the Next.js connection() to ensure the page is dynamically rendered at runtime and not statically rendered at build time.
 *
 * @param succeed - Whether the authentication should succeed (defaults to true, 'random' gives 50% chance)
 * @param delay - The delay in seconds before resolving (defaults to 1 second)
 * @returns A promise that resolves to the succeed parameter value after the specified delay
 */

export async function fakeAuth(
  succeed: boolean | 'random' = true,
  delay: number = 1
) {
  await connection()

  // Handle the random case with 50% chance of success
  const shouldSucceed = succeed === 'random' ? Math.random() >= 0.5 : succeed

  const result = await new Promise(resolve => {
    setTimeout(() => resolve(shouldSucceed), delay * 1000)
  })

  return result
}
