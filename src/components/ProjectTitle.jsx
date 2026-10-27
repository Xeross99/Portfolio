import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid'

export function ProjectTitle({ logo, tagline, href, children }) {
  return (
    <div className="mt-8! flex items-center gap-4">
      <Image src={logo} alt="" className="size-14 shrink-0 rounded-md" />
      <div className="min-w-0 flex-1">
        <h2 className="mt-0!">{children}</h2>
        <p className="mt-0.5! text-sm text-gray-500 dark:text-gray-400">
          {tagline}
        </p>
      </div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={
            new URL(href).hostname === 'github.com'
              ? 'Zobacz na GitHubie'
              : 'Zobacz stronę'
          }
          title={new URL(href).hostname.replace(/^www\./, '')}
          className="flex! size-9 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700! hover:bg-gray-200 dark:bg-white/10 dark:text-white! dark:hover:bg-white/15"
        >
          <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-4" />
        </a>
      )}
    </div>
  )
}
