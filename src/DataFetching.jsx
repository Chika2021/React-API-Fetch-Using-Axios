import axios from 'axios'
import React , {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function DataFetching() {

    const navigate = useNavigate();

    const [posts , setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButtonClick])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


  return (
    <div>
        <input type='text' value={id}  onChange={(e) => setId(e.target.value)}/>

        <button type='button' onClick={handleClick}>Fetch Post</button>
        <ul>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            {/* {
                posts.map(post => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    )
                })
            } */}
        </ul>

        <button onClick={() => navigate(-1)}>Get All Post</button>
      
    </div>
  )
}

export default DataFetching
