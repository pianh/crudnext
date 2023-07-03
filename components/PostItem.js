import React from 'react'
import { useRouter } from 'next/router'
function PostItem({post}) {
  const router = useRouter()
  return (
    <div className='col-md-7 p-3 m-3 bs'>
      <h3>{post.title}</h3>
      <img src={post.imageUrl} className='img-fluid' height='100px' />
      <p>{post.description}</p>

      <button className='btn btn-primary m-3 mt-3' onClick={()=> {router.push(`/posts/${post._id}`)}}>Edit</button>
      <button className='btn btn-primary  m-3 mt-3' onClick={()=> {router.push(`/posts/${post._id}`)}}>Delete</button>

    </div>
  )
}

export default PostItem
