import { fetchArchitechture } from '@/lib/actions/architechture.action'
import { redirect } from 'next/navigation'

import styles from './page.module.css'

export default async function Architechture({ params }: { params: { architechture: string } }) {
  const architechtureInfo: any = await fetchArchitechture(params.architechture)

  if (architechtureInfo.length == 0) redirect('/architechtures')
  return (
    <section className={styles.architechture__infos}>
      <h1>Architechture - {architechtureInfo.name}</h1>

      <section>
        <h3>Explanation and Behavior</h3>
        <p>{architechtureInfo.description}</p>
      </section>

      <section>
        <h3>History</h3>
        <p>{architechtureInfo.history}</p>
      </section>

      <section className={styles.pros__cons}>
        <div>
          <h3>Pros</h3>
          <ul>
            {architechtureInfo.pros.map((pro: string, index: any) => {
              return <li key={index}>{pro}</li>
            })}
          </ul>
        </div>
        <div>
          <h3>Cons</h3>
          <ul>
            {architechtureInfo.cons.map((con: string, index: any) => {
              return <li key={index}>{con}</li>
            })}
          </ul>
        </div>
      </section>

      <section className={styles.use__cases}>
        <h3>Examples of Use Cases</h3>
        <ul>
          {architechtureInfo.cases.map((cases: string, index: any) => {
            return <li key={index}>{index + 1}. {cases}</li>
          })}
        </ul>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>{architechtureInfo.conclusion}</p>
      </section>
    </section>
  )
}
