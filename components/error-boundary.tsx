'use client'

import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  if (error) console.error(error)

  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <AlertCircle className="h-5 w-5 text-destructive" />
      <h2 className="text-xl font-semibold text-destructive">
        Something went wrong!
      </h2>
      <Button
        variant="outline"
        onClick={reload}
        className="mt-2 cursor-pointer"
      >
        {isPending ? 'Loading...' : 'Try again'}
      </Button>
    </div>
  )
}
