import Head from 'next/head'
import Image from 'next/image'
import { NextSeo } from 'next-seo';

import HomeLayout from '../components/HomeLayout';
// import styles from '../styles/Home.module.css'

export default function Home() {

  // TODO: CHANGE THIS
  var title = "";
  var description = "";
  var url = "";

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <HomeLayout>
        <main>
          <h1>
            Hello Alphabet
          </h1>
        </main>
      </HomeLayout>
    </div>
  )
}
