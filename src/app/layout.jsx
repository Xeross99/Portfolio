import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'
import clsx from 'clsx'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'
import 'react-photo-view/dist/react-photo-view.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata = {
  metadataBase: new URL('https://krzysteczko-m.pl'),
  alternates: {
    canonical: './',
  },
  title: {
    default: 'Michał Krzysteczko - Strony internetowe, sklepy i aplikacje',
    template: '%s - Michał Krzysteczko',
  },
  description:
    'Strona internetowa, sklep czy aplikacja? Buduję je od pomysłu po wdrożenie - szybkie, dopracowane i widoczne w Google. Zobacz, co mogę zrobić dla Twojego biznesu.',
  keywords: [
    'tworzenie stron internetowych',
    'aplikacje webowe',
    'sklepy internetowe',
    'web developer',
    'Next.js',
    'Ruby on Rails',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Michał Krzysteczko' }],
  creator: 'Michał Krzysteczko',
  openGraph: {
    title: 'Michał Krzysteczko - Strony internetowe, sklepy i aplikacje',
    description:
      'Strona internetowa, sklep czy aplikacja? Buduję je od pomysłu po wdrożenie - szybkie, dopracowane i widoczne w Google.',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={clsx('h-full antialiased', inter.variable, monaSans.variable)} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Providers>{children}</Providers>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  )
}
