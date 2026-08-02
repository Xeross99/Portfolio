import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
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
    default: 'Michał Krzysteczko - Tworzenie stron internetowych i aplikacji webowych',
    template: '%s - Michał Krzysteczko',
  },
  description:
    'Tworzę szybkie strony internetowe, sklepy i aplikacje webowe w Next.js i Ruby on Rails - od projektu, przez kod, po wdrożenie na serwer. Zobacz moje realizacje.',
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
    title: 'Michał Krzysteczko - Tworzenie stron internetowych i aplikacji webowych',
    description:
      'Szybkie strony internetowe, sklepy i aplikacje webowe w Next.js i Ruby on Rails - od projektu, przez kod, po wdrożenie.',
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
    </html>
  )
}
