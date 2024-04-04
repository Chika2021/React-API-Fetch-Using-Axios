import React, { useState } from 'react'
import Axios from 'axios'

function PostForm() {

  const url = ''
  const [data , setData] = useState({
    name: '',
    data:'',
    iduser:'',
  })

  let handleClick = (e) => {
    const newData = {...data}
    newData[e.target.iduser] = e.target.value
    setData(newData)
    console.log(newData)

  }
  let submit = (e) => {
    e.preventDefault();
    Axios.post(url , {
      name: data.name,
      date: data.date,
      iduser: parseInt(data.iduser)
    })
    .then(res =>  {
      console.log(res.data)
    })
    .catch(
      (err) => console.log(err)
    )
  }
  
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handleClick(e)} value={data.name} placeholder='name' type='text'></input>
        <input onChange={(e) => handleClick(e)} value={data.date} placeholder='data' type='date'></input>
        <input onChange={(e) => handleClick(e)} value={data.iduser} placeholder='iduser' type='number'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PostForm
