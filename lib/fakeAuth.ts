import { connection } from 'next/server'
import 'server-only'

/**
 * Simulates an authentication process with configurable success and delay
 *
 * This function is intended for development and testing purposes only.
 * It uses the Next.js connection() to ensure the page is dynamically rendered at runtime and not statically rendered at build time.
 *
 * @param succeed - Whether the authentication should succeed (defaults to true)
 * @param delay - The delay in seconds before resolving (defaults to 1 second)
 * @returns A promise that resolves to the succeed parameter value after the specified delay
 */

export async function fakeAuth(succeed: boolean = true, delay: number = 1) {
  await connection()
  const result = await new Promise(resolve => {
    setTimeout(() => resolve(succeed), delay * 1000)
  })
  return result
}
