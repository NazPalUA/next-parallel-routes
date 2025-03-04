'use client'

import { useRouter } from 'next/navigation'

export function BackLink() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <div
      className="text-blue-500 hover:underline cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-sm">←</span> Back
    </div>
  )
}
