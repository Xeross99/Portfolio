import Image from 'next/image'
import michal from '@/images/michal.jpeg'

import { IconLink } from '@/components/IconLink'
import { RevealFx } from '@/once-ui/components/RevealFx'

function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

export function Intro() {
  return (
    <RevealFx speed="medium" delay={0} translateY={0}>
      <li className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0">
        <Image className="aspect-4/5 w-52 flex-none rounded-2xl object-cover object-left" src={michal} alt="" />
        <div className="max-w-xl flex-auto">
          <h3 className="text-lg/8 font-semibold tracking-tight text-white">Michał Krzysteczko</h3>
          <p className="text-base/7 text-gray-300">Full stack developer</p>
          <p className="mt-6 text-base/7 text-gray-300">
          Tworzę nowoczesne, wydajne strony internetowe i aplikacje webowe. Skupiam się na dostarczaniu rozwiązań, które są zarówno intuicyjne w obsłudze, jak i zoptymalizowane pod kątem wydajności.
          </p>
        </div>
      </li>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="https://www.linkedin.com/in/michał-krzysteczko-232927260/" icon={BookIcon} target="_blank" rel="nofollow" className="flex-none">
          LinkedIn
        </IconLink>
        <IconLink href="https://github.com/xeross99" icon={GitHubIcon} target="_blank" rel="nofollow" className="flex-none">
          GitHub
        </IconLink>
        <IconLink href="mailto:m.krzysteczko@icloud.com" icon={EmailIcon} target="_blank" className="flex-none">
          E-Mail
        </IconLink>
      </div>
    </RevealFx>
  )
}
