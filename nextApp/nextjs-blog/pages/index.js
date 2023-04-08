import Layout from '../components/layout';
import utilStyles from '../components/utils.module.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../libs/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am I and that's it.</p>
        <p>
          (This is a example website: {''}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.
          )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
  }