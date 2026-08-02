import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/16/solid'

export function ProjectLink({ href, children = 'Zobacz szczegóły' }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 font-semibold text-sky-500 no-underline hover:text-sky-600 dark:text-sky-400 dark:hover:text-white"
    >
      {children}
      <ArrowRightIcon aria-hidden="true" className="size-4" />
    </Link>
  )
}
