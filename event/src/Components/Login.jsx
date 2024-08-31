import React, { useState } from 'react'

const Login = () => {

  const[name,setname]=useState("")
  const[password,setpassword]=useState("")

  function handlelogin(e){
    e.preventDefault();
  }

  function userhandler(e){
    // setname(e.target.value);
    // console.log(e.target.value)
    // console.log(name)
    if(e.target.value.length<3){
      console.log('name is not shoet')
    }
  }
  
  return (
    <div>Login
        <form onSubmit={handlelogin}>
            <input type="text"  placeholder='Enter Name' onChange={userhandler} />
            <span>User Not Found</span>
             <br/><br/>
            <input type='password' placeholder='password'/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div> 
  )
}

export default Login