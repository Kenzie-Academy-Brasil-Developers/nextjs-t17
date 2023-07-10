import { Form } from '@/components/Form'
import styles from './page.module.css'

//Home
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        <Form />
      </div>
    </main>
  )
}
