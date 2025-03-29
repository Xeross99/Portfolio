import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Providers } from '@/app/providers'
import '@/styles/tailwind.css'

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
  title: 'Michał Krzysteczko - Full Stack Developer | Tworzenie Stron i Aplikacji Webowych',
  description:
    'Portfolio Michała Krzysteczko - doświadczonego Full Stack Developera. Tworzę nowoczesne strony internetowe, aplikacje webowe i sklepy online. Sprawdź moje projekty i doświadczenie!',
  author: 'Michał Krzysteczko',
  creator: 'Michał Krzysteczko',
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
