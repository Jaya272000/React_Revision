// import React, { useState } from 'react'
// import "./App.css"
// import Form from "./Components/Form"
// import ListRender from "./Components/ListRender"
// import Tailwindcss from "./Components/Tailwindcss"
// import Props from "./Components/Props"
// import Login from "./Components/Login"
// const App = () => {
  // const [name,setname]=useState('jaya')
  // const[cname,changename]=useState('')
  // const handleclick=()=>{
  //   setname(cname)
  // }

  // const changehandle=(event)=>{
  //   changename(event.target.value);
  // }
  // const mouseHouver=()=>{
  //   alert('images')

  // }
  // return (
    
    <>
    {/* <Login/> */}
    {/* <Form/>
    <ListRender/> */}
    {/* <Props name='jaya' age='20'/> */}
    {/* <h1 className="text-3xl color-blue font-bold underline">
      Hello world!
    </h1>
    <Tailwindcss/> */}
    {/* <h1>Welcome {name}</h1>
    <input type="text" placeholder='Enter Name' onChange={changehandle} />
    <button onClick={handleclick}>Change Name</button>
    <img src="https://picsum.photos/200" alt="random" onMouseOver={mouseHouver} /> */}


    </>
//   )
// }

// export default App

// import React from 'react';
// import {Routing} from './Components/Routing'
// import Home from './Components/Home';
// import Login from './Components/Login'
// import About from './Components/About'
// import './App.css'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// const App = () => {
//   const router=createBrowserRouter([
//     {path:"/",element:<> <Routing />
// <Home/></>},
//     {path:"/Login",element:<><Routing /><Login/></>},
//     {path:"/About",element:<><Routing /><About/></>}
// ])

//   return (
//     <>
//     <div>He hoo hee</div>
//       <RouterProvider router={router}/>
      
//     </>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Page404 from './Components/page404'
import User from './Components/user'
import Useparam from './Components/Useparam'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      {/* <Link to={'/*'}>Contact</Link> */}
      {/* <Link to={'/'}>Home</Link> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/user/:name' element={<User/>}></Route>
        <Route path='/user/:name' element={<Useparam/>}></Route>


        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App