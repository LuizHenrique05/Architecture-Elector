import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shareds/Topbar'
import Bottombar from '@/components/shareds/Bottombar'

import styles from './layout.module.css'
import FloatingResults from '@/components/shareds/FloatingResults'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Best Architectures for Your Software',
  description: 'Search with this app for the best architecture for your software.',
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

          <FloatingResults />
          <Bottombar />
        </body>
      </html>
  )
}