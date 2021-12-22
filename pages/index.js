import Head from 'next/head'
import Link from 'next/link'
import { emotionStyles } from '../styles/index.ts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grid Training App</title>
      </Head>

      <main className={emotionStyles.main}>
        <h1 className={emotionStyles.h1}>
          Welcome to gridレイアウト!
        </h1>

        <ul className={emotionStyles.ul}>
          <li className={emotionStyles.li}>
            <Link href="/gridPages/page1"><a className={emotionStyles.a}>No.1</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.2</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.3</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.4</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.5</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.6</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.7</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.8</a></Link>
          </li>
          <li className={emotionStyles.li}>
            <Link href="/"><a className={emotionStyles.a}>No.9</a></Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
