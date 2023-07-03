import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import domain from '../../utils/config'

function Index({ post }) {
  const router = useRouter()

  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)
  const [imageUrl, setImageUrl] = useState(post.imageUrl)

  async function updatepost() {
    const updatedPost = {
      title,
      description,
      imageUrl
    }

    try {
      await axios.put(`${domain}/posts/${post._id}`, updatedPost)
      alert('Post updated successfully')
    } catch (error) {
      alert('Something went wrong')
      console.log(error)
    }
  }

  return (
    <div>
      <div className='mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bs p-3'>
            <div className='d-flex justify-content-between'>
              <h1>Update Post</h1>
              <button className='btn btn-primary'>See Posts</button>
            </div>

            <div>
              <input
                type='text'
                className='form-control'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type='text'
                className='form-control'
                placeholder='Image URL'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <textarea
                type='text'
                id=''
                cols='30'
                rows='10'
                placeholder='Description'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className='btn btn-primary mt-3' onClick={updatepost}>
                Update Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(`${domain}/posts/${context.query.id}`)

    return {
      props: {
        post: response.data
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        post: null
      }
    }
  }
}
