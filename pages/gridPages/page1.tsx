import Head from 'next/head'
import Link from 'next/link'
import { cx } from "@emotion/css"
import { emotionStyles } from '../../styles/page1.ts'

const page1 = () => (
  <div>
      <Head>
        <title>Grid Training Page1</title>
      </Head>

      <main className={emotionStyles.main}>
        <h1 className={emotionStyles.h1}>
          Welcome to Page1!
        </h1>
        <Link href="/"><a className={emotionStyles.home}>HOME</a></Link>

        <ul className={emotionStyles.ul}>
          <li className={cx(emotionStyles.li, emotionStyles.box1)}>
            <Link href="/gridPages/page1"><a className={emotionStyles.a}>No.1</a></Link>
          </li>
          <li className={cx(emotionStyles.li, emotionStyles.box2)}>
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
          <li className={cx(emotionStyles.li, emotionStyles.box6)}>
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

export default page1