import { useEffect, useState } from 'react'
import { getPosts } from '../api/posts'
import Post from '../components/Post'

export default function Home() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    // Get all posts, then set it as the state var posts
    getPosts().then(setPosts)
  }, [])

  return (
    <div>
      {/* Loop posts, and create a new Post for each */}
      {posts.map(post => (
        <Post
          id={post._id}
          text={post.text}
          key={post._id}
          handle={post.author.handle}
          username={post.author.username}
        />
      ))}
    </div>
  )
}