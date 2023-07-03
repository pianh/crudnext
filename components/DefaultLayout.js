import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DefaultLayout(props) {
  return (
    <div>
        <Header/>
      <div className='body'>{props.children}</div>
        <Footer/>
    </div>
  )
}
