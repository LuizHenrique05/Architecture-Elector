import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shareds/Topbar'
import Bottombar from '@/components/shareds/Bottombar'

import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Best Architechtures for Your Software',
  description: 'Search with this app for the best architechture for your software.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={styles.html}>
        <body className={inter.className}>
          <Topbar />

          <main>

            <section>
              <div>
                {children}
              </div>
            </section>

          </main>

          <Bottombar />
        </body>
      </html>
  )
}