import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './css/blog.css';




export default function Blogs() {
  return (
    <>
        <div className="blog-main-container">
            <div className="blog-container">
            <h1>Coming Soon..</h1>
            <Link to="/"><button className='btn-blog'>Back to Home</button></Link>
            
            </div>
        </div>
    </>
  )
}
