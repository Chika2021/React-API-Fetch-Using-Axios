import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function GetAllPost() {

    const [posts , setPost] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => setPost(res.data))
            .catch(err => {
                console.log(err)
            })
            
    })

  return (
    <div>
        <h1>Data Fetching</h1>
        <Link to= 'single-post'>Click to Fetch Single Post</Link>
        {
            posts.map((post) => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default GetAllPost