import Image from 'next/image';
import tinytime from 'tinytime';
import Link from 'next/link';


import { NextSeo } from 'next-seo';

import generateSitemap from '../../lib/generateSitemap';
import Layout from '../../components/HomeLayout';
import { getSortedPostsData } from '../../lib/posts';
// import authors from '../../../lib/author.json';

let dateFormatter = tinytime('{MMMM} {DD}, {YYYY}');

const Posts = ({ allPostsData }) => {

  // TODO: CHANGE_THIS
  var title = '';
  var description = '';
  var url = '';

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="relative pt-12 pb-16 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-3xl max-w-4xl mx-auto tracking-tight font-extrabold text-gray-700 sm:text-4xl">
              Posts
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
              Subtitle
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {allPostsData.map((post, i) => {
              return <Cards key={i} post={post} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

function Cards({ post }) {
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-md border border-1 hover:translate-x-1 hover:shadow-lg overflow-hidden"
    >
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {/* <a href={post.category.href} className="hover:underline">
            {post.category.name}
          </a> */}
          </p>
          <Link href={`/posts/${post.id}`}>
            <a className="block mt-2">
              <p className="text-xl font-extrabold text-gray-800 hover:underline">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-600">
                {post.description}
              </p>
            </a>
          </Link>
        </div>

        {/* <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{author?.name}</span>
            <img
              className="h-10 w-10 rounded-full"
              src={author?.avatar}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 font-semibold">
              {author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-600">
              <time dateTime={post.date}>
                {dateFormatter.render(new Date(post.date))}
              </time>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  await generateSitemap();
  return {
    props: {
      allPostsData
    }
  };
}

export default Posts;
