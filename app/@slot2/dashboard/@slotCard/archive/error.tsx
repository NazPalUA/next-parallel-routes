'use client'

import ErrorBoundary from '@/components/error-boundary'
import { Container } from './container'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Container variant="error">
      <ErrorBoundary error={error} reset={reset} />
    </Container>
  )
}
