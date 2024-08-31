import React, { useState } from 'react'

const Props = (props) => {
    const [name,setname]=useState(props.name)
    const[age,setage]=useState(props.age)

    const arr=['jaya','priya','abc','w3schools']
    

    function changename(){
        setname('priya')
        setage('21')

    
    }
    const myarr=arr.map((i)=>{
        return <li>{i}</li>
    })

  return (
    <div>
        <h1>My name is {name} and my age is {age}</h1>
        <button onClick={changename}>Click </button>
        <ul>{myarr}</ul>

    </div>
  )
}

export default Props