'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

const FilterContext = createContext({ filter: 'all', setFilter: () => {} })

const filters = [
  { value: 'all', label: 'Wszystkie' },
  { value: 'app', label: 'Aplikacje' },
  { value: 'sklep', label: 'Sklepy internetowe', shortLabel: 'Sklepy' },
  { value: 'www', label: 'Strony internetowe', shortLabel: 'Strony' },
]

export function useProjectFilter() {
  return useContext(FilterContext).filter
}

export function ProjectFilterProvider({ children }) {
  const [filter, setFilter] = useState('all')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export function ProjectFilterBar() {
  const { filter, setFilter } = useContext(FilterContext)
  const [hidden, setHidden] = useState(false)
  const [stuck, setStuck] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const isStuck = barRef.current
        ? barRef.current.getBoundingClientRect().top <= 0
        : false

      setStuck(isStuck)
      if (y > lastY && isStuck) {
        setHidden(true)
      } else if (y < lastY) {
        setHidden(false)
      }
      lastY = y
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={barRef} className="pointer-events-none sticky top-0 z-[60] pt-4">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
            <div
              className={clsx(
                'inline-flex max-w-full flex-nowrap gap-1.5 overflow-x-auto rounded-2xl p-1.5 transition duration-300 ease-out [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                stuck
                  ? 'bg-gray-100/75 backdrop-blur-md dark:bg-gray-800/75'
                  : 'bg-gray-100 dark:bg-gray-800',
                hidden
                  ? 'pointer-events-none -translate-y-2 scale-90 opacity-0'
                  : 'pointer-events-auto translate-y-0 scale-100 opacity-100',
              )}
            >
              {filters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={clsx(
                    'shrink-0 rounded-xl px-3 py-1 text-sm font-medium whitespace-nowrap transition',
                    filter === f.value
                      ? 'bg-sky-500 text-white'
                      : 'text-gray-600 hover:bg-white dark:text-gray-300 dark:hover:bg-white/10',
                  )}
                >
                  {f.shortLabel ? (
                    <>
                      <span className="xl:hidden">{f.shortLabel}</span>
                      <span className="hidden xl:inline">{f.label}</span>
                    </>
                  ) : (
                    f.label
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
