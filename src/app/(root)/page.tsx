import SpecsForm from '@/components/forms/SpecsForm'

import styles from './page.module.css'

export default async function Home() {

  return (
    <>
      <h2 className={styles.title}>Input your project specifications</h2>

      <SpecsForm />
    </>
  )
}