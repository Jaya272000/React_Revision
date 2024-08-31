import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Useparam = () => {
    const[serachParam,setSearchPara]=useSearchParams()
    const age=serachParam.get('age')
    const city=serachParam('city')
  return (
    <div className='App'>
        <h1>UseParam</h1>
        <p>My age is {age} and {city}</p>



    </div>
  )
}

export default Useparam