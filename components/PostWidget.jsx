import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ( {categories, slug} ) => {
  const [relatedPosts, setrelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((results) => setrelatedPosts(results))
    } else {
      getRecentPosts()
        .then((results) => setrelatedPosts(results))
    }
  
    // return () => {
    //   second
    // }
  }, [slug])
  
  console.log(relatedPosts)

  return (
    <div>PostWidget</div>
  )
}

export default PostWidget