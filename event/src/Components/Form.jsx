import React, { useState } from 'react'

const Form = () => {
    // const[formdata,setFormdata]=useState({
    //     name:"",
    //     email:"",
    //     password:"",
    //     confirmPassword:""

    // });
    const[formdata,setFormdata]=useState({})

    const handleInput=(event)=>{
        setFormdata({...formdata,[event.target.name]:event.target.value})

    }
    // const handleEmail=(event)=>{
    //     setFormdata({...formdata,email:event.target.value})

    // }

  return (
    <>
    <input type="text" placeholder='Name' name='name' onChange={handleInput}/>
    <input type="email" placeholder='Email' name='Email'onChange={handleInput}/>
    <input type="password" placeholder='password' name='password' onChange={handleInput}/>
    <input type="password" placeholder='confirm Password' name='confirmPasword' onChange={handleInput}/>
     
    <button>Registration</button>
    </>
  )
}

export default Form