import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = ({name}) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/about')

  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Go to about page</button>
    </div>
  )
}

export default home
