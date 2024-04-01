import { fetchArchitecture } from '@/lib/actions/architecture.action'
import { redirect } from 'next/navigation'

import styles from './page.module.css'
import Link from 'next/link'

export default async function Architecture({ params }: { params: { architecture: string } }) {
  const architectureInfo: any = await fetchArchitecture(params.architecture)

  if (architectureInfo.length == 0) redirect('/architectures')
  return (
    <section className={styles.architecture__infos}>
      <h1>Architecture - {architectureInfo.name}</h1>

      <section>
        <h3>Explanation and Behavior</h3>
        <p>{architectureInfo.description}</p>
      </section>

      <section>
        <h3>History</h3>
        <p>{architectureInfo.history}</p>
      </section>

      <section className={styles.pros__cons}>
        <div>
          <h3>Pros</h3>
          <ul>
            {architectureInfo.pros.map((pro: string, index: any) => {
              return <li key={index}>{pro}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Cons</h3>
          <ul>
            {architectureInfo.cons.map((con: string, index: any) => {
              return <li key={index}>{con}</li>
            })}
          </ul>
        </div>
      </section>

      <section className={styles.use__cases}>
        <h3>Examples of Use Cases</h3>
        <ul>
          {architectureInfo.cases.map((cases: string, index: any) => {
            return <li key={index}>{index + 1}. {cases}</li>
          })}
        </ul>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>{architectureInfo.conclusion}</p>
      </section>

      <Link href='/architectures'>&larr; Back to all architectures</Link>
    </section>
  )
}
