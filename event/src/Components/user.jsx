import React from 'react'
import { useParams } from 'react-router-dom'

const user = () => {
    const params=useParams()
    const {name}=params
    console.log(name)

  return (
    <div>
        This is {name}'s page
    </div>
  )
}

export default user