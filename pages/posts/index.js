import React from 'react'
import axios from 'axios';
import domain from '@/utils/config';
import PostItem from '@/components/PostItem';
import Link from 'next/link';
function index({postsdata}) {
    console.log(postsdata)

    const postitems = postsdata.map((post)=>{
        return <PostItem post={post} />
    })

    return ( <div>


      <div className='text-end m-5'>
          <Link className='btn btn-primary' href="/posts/addpost">Add new post</Link>
      </div>
        <div className='row justify-content-center'>
            {postitems}
        </div>

    </div> );
}

export default index

export async function getStaticProps(){
    try {
      const response = await axios.get(`${domain}/posts`)
      
      return {
        props: {
          postsdata : response.data
        }
      }
    } catch (error) {
      console.log(error)
    }
   }