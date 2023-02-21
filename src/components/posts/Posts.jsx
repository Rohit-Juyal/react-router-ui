import React, { useEffect, useState } from 'react'
import './posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  },[] )
  return (
    <div className='posts'>
      <h1 className='section-padding'>Posts</h1>
      <div className="posts-container section-padding">
        {
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-number">
                <h2>Post {post.id}</h2>
              </div>
              <div className="post-title">
                <h3>{post.title}</h3>
              </div>
              <div className="post-body">
                <p>{post.body}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Posts