import { api, API_BASE_URL } from '@/services/api'
import Link from 'next/link';
import styles from './page.module.css'

//lado servidor
export interface INew{
  id: number;
  category: string;
  title: string;
  content: string;
  author: string;
}

async function getNews(): Promise<INew[] | null>{
  try {
    //O axios ele não está 100% compátivel com as requisições de lado servidor do nextJS
    const response = await fetch(`${API_BASE_URL}/news`, { next: { revalidate: 60 }});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//Home
export default async function Home() {
  const newsList = await getNews();

  return (
    <main className={styles.main}>
      <div>
        <h1>Home Page</h1>
        {newsList?.map(currentNew => (
          <li key={currentNew.id}>
            <span>{currentNew.category}</span>
            <h3>{currentNew.title}</h3>
            <p>{currentNew.author}</p>
            <Link href={`/post/${currentNew.id}`}>Ler mais</Link>
          </li>
        ))}
      </div>
    </main>
  )
}
