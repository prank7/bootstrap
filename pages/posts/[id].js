import Link from 'next/link';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import Layout from '../../components/HomeLayout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import blogConfig from '../../blog.config';

// import PostCTA from '../../../components/Community/PostCTA';
import { TwitterAltIcon, FacebookIcon } from '../../components/Icons';


export default function Post({ postData }) {

  return (
    <Layout>
      {postData.scriptTag ? (
        <Head>
          <script type="text/javascript" src={postData.scriptTag}></script>
        </Head>
      ) : null}

      <NextSeo
        title={postData.title + ' |' + blogConfig.siteMeta.siteName}
        description={postData.description}
        openGraph={{
          title: postData.title + ' |' + blogConfig.siteMeta.siteName,
          url: `https://${blogConfig.siteMeta.siteURL}/` + postData.id,
          description: postData.description,
          images: [
            {
              url: postData.photo,
              alt: postData.title
            }
          ]
        }}
      />

      <section className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container mb-16">
        <div className=" col-span-12 sm:col-start-3 sm:col-span-8 md:px-6 ">
          <h2 className="mt-16 my-4 font-bold text-indigo-700 text-4xl">
            {postData.title}
          </h2>
          {postData.hideCover ? null : (
            <div className="relative w-full py-8">
              <Image
                // className="w-full h-full"
                layout="responsive"
                src={postData.photo}
                alt=""
                width="1600"
                height="900"
              />
            </div>
          )}
          <div
            className="prose "
            dangerouslySetInnerHTML={{
              __html: postData.contentHtml
            }}
          />
          {/* {postData.cta ? <PostCTA ctaText={postData.ctaText} /> : null} */}

          <div className="flex items-center justify-between mt-8">
            {/* <div className="flex items-center space-x-2 lg:space-x-4">
              <img
                className="w-12 h-12 rounded-full lg:w-12 lg:h-12"
                src={authorInfo.avatar}
                alt={authorInfo.name}
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3 className="font-bold">{authorInfo.name}</h3>
                <a
                  href={`https://twitter.com/${authorInfo.twitter}`}
                  target="_blank"
                >
                  <p className="text-indigo-600">{`@` + authorInfo.twitter}</p>
                </a>
              </div>
            </div> */}

            <div>
              <p className="text-md text-gray-800 font-semibold">Share</p>
              <div className="flex items-center space-x-2">
                <a
                  className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${postData.title + ` - ${blogConfig.siteMeta.twitter.handle}`
                    }&url=${`https://${blogConfig.siteMeta.siteURL}/${postData.id}`}`}
                >
                  <TwitterAltIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Twitter</span>
                </a>
                <a
                  className="twitter-share-button"
                  href={`https://facebook.com/sharer/sharer.php?u=${`https://${blogConfig.siteMeta.siteURL}/${postData.id}`}`}
                >
                  <FacebookIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}
