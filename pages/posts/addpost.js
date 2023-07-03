import React, { useState } from 'react'
import axios from 'axios'
import domain from '@/utils/config'
function AddPost() {

    const[title, setTitle]= useState('')
    const[description, setDescription] = useState('')
    const[imageUrl, setImageUrl] = useState('')

async function addpost() {

        const post = {
            title,
            description,
            imageUrl
        }
        // console.log(post)
        try {
            await axios.post(`${domain}/posts`, post)
            alert('Post added Successfully')
            window.location.reload()
        } catch (error) {
            alert('Something went wrong')
        }
    }
  return (
    <div className='mt-5'>
      <div className='row justify-content-center  '>
        <div className='col-md-6 bs p-3'>
            <div className='d-flex justify-content-between'>
                <h1>Add Post</h1>
                <button className='btn btn-primary'>See Posts</button>
            </div>

            <div>
                <input type='text' className='form-control' placeholder='title' 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <input type='text' className='form-control' placeholder='image url' 
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
                />
                <textarea type='text' id="" cols="30" rows="10" placeholder='description'className='form-control' 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />
                <button className='btn btn-primary mt-3' onClick={addpost}>add post</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost;