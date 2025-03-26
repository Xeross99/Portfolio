import { IconLink } from '@/components/IconLink'
import { StarField } from '@/components/StarField'
import { RevealFx } from '@/once-ui/components/RevealFx'

export default function NotFound() {
  return (
    <div className="relative isolate flex flex-auto flex-col items-center justify-center overflow-hidden bg-gray-950 text-center">
      <svg aria-hidden="true" className="absolute top-[-10vh] left-1/2 -z-10 h-[120vh] w-[120vw] min-w-[60rem] -translate-x-1/2">
        <defs>
          <radialGradient id="gradient" cy="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)" />
      </svg>
      <StarField className="sm:-mt-16" />
      <RevealFx speed="medium" delay={0} translateY={0}>
        <p className="font-display text-4xl/tight font-light text-white">404</p>
        <h1 className="mt-4 font-display text-xl/8 font-semibold text-white">
          Strona nie znaleziona
        </h1>
        <p className="mt-2 text-sm/6 text-gray-300">
          Przepraszamy, nie mogliśmy znaleźć strony, której szukasz.
        </p>
        <IconLink href="/" className="mt-4 max-w-fit mx-auto">
          Wróć do strony głównej
        </IconLink>
      </RevealFx>
    </div>
  )
}
