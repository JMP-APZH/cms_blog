import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components'

import { getPosts, getCategories } from '../services'

import { FeaturedPosts } from '../sections/index'

type PostsProps = {
  title: string;
  slug: string;
}

// const Posts: React.FunctionComponent<PostsProps> = (props) => {
//   const {} = props
// }

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
];

// export default function Home({ props: PostsProps }) {
  const Home = (props: PostsProps) => {
    // const { title, slug } = posts;
  
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        

        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
              {/* <Posts {...} /> */}
            </div>
        </div>
      </div>

      

      
    </div>
  )
}


export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  }
}


