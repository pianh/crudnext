import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import domain from '@/utils/config';
function PostItem({post}) {
  const router = useRouter()


  async function deletePost() {
    try {
      await axios.delete(`${domain}/posts/${post._id}`);
      alert('Post deleted successfully');
      window.location.href = '/posts';
    } catch (error) {
      alert('Something went wrong');
      console.log(error);
    }
  }
  

  return (
    <div className='col-md-7 p-3 m-3 bs'>
      <h3>{post.title}</h3>
      <img src={post.imageUrl} className='img-fluid' height='100px' />
      <p>{post.description}</p>

      <button className='btn btn-primary m-3 mt-3' onClick={()=> {router.push(`/posts/${post._id}`)}}>Edit</button>
      <button className='btn btn-primary  m-3 mt-3' onClick={()=> {deletePost(post._id)}}>Delete</button>

    </div>
  )
}

export default PostItem
