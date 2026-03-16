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
  title: 'Michał Krzysteczko - Strony internetowe i aplikacje webowe',
  description:
    'Zajmuję się tworzeniem stron internetowych i aplikacji webowych. Głównie Next.js, Tailwind CSS i Ruby on Rails. Zobacz moje projekty.',
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
