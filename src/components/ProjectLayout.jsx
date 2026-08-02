import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { Intro } from '@/components/Intro'
import { Timeline } from '@/components/Layout'
import { StarField } from '@/components/StarField'
import { ThemeToggle } from '@/components/ThemeToggle'
import { FormattedDate } from '@/components/FormattedDate'

function Glow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-[80rem]" aria-hidden="true">
        <defs>
          <radialGradient id="project-glow-desktop" cx="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id="project-glow-mobile" cy="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#project-glow-desktop)" className="hidden lg:block" />
        <rect width="100%" height="100%" fill="url(#project-glow-mobile)" className="lg:hidden" />
      </svg>
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div>
  )
}

function FixedSidebar({ main }) {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:items-center lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20 mb-4 lg:mb-6">
            <div className="relative">
              <StarField className="top-14 -right-44" />
              {main}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectLayout({ title, date, children }) {
  return (
    <>
      <FixedSidebar main={<Intro />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="py-20 sm:py-32">
          <header className="relative">
            <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-[32rem] xl:h-8">
              {date ? (
                <FormattedDate
                  date={date}
                  className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
                />
              ) : null}
              <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
            </div>
          </header>
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
              <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 text-2xs/4 font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-white"
                >
                  <ArrowLeftIcon aria-hidden="true" className="size-3.5" />
                  Wróć do projektów
                </Link>
                {date ? (
                  <FormattedDate
                    date={date}
                    className="mt-6 block text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"
                  />
                ) : null}
                <div className="typography mt-4" data-mdx-content>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
