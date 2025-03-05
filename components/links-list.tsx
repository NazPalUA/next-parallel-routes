import { BackLink } from '@/components/back-link'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const allLinks = [
  { href: '', label: 'Parent' },
  { href: 'user', label: 'User' },
  { href: 'common', label: 'Common' },
  { href: 'about', label: 'About' },
  { href: 'info', label: 'Info' },
  { href: 'dashboard', label: 'Dashboard' },
  { href: 'dashboard/archive', label: 'Archive' }
] as const

export type Link = (typeof allLinks)[number]['href']

type Props = {
  showLinks?: Link[]
  backLink?: boolean
}

export default function Links({ showLinks, backLink }: Props) {
  const links = !showLinks
    ? allLinks
    : allLinks.filter(link => showLinks.includes(link.href))

  return (
    <div
      className={cn(
        'flex gap-2 flex-col',
        backLink && 'flex-row justify-between'
      )}
    >
      {backLink && <BackLink />}
      <div className="flex gap-2 justify-end">
        {links.map(link => (
          <Link
            href={'/' + link.href}
            key={link.href}
            className="text-blue-500 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
