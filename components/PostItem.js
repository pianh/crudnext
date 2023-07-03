import React from 'react'

function PostItem({post}) {
  return (
    <div className='col-md-7 p-3 m-3 bs'>
      <h3>{post.title}</h3>
      <img src={post.imageUrl} className='img-fluid' height='100px' />
      <p>{post.description}</p>
    </div>
  )
}

export default PostItem
