import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { siteMeta } from '../blog.config';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        twitter={siteMeta.twitter}
        openGraph={siteMeta.openGraph}
        title={siteMeta.title}
        description={siteMeta.description}
      />
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta name="author" content={siteMeta.twitter.handle} />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        <link
          rel='shortcut icon'
          type='image/png'
          href='/assets/favicon.png'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap'
          rel="stylesheet"
        />

        <script
          async={true}
          src={`https://www.googletagmanager.com/gtag/js?id=${siteMeta.GA_TRACKING_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteMeta.GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
