import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>
            <Link to={'/about'}>about</Link>
            </li>
            <li><Link to={'/'}>Home</Link>
            </li>
            <li><Link to={'/Contact'}>Contact</Link>
            </li>
            <li><Link to={'/user/anil'}>Anil</Link>
            </li>
            <li><Link to={'/user/peter'}>Peter</Link>
            </li>





        </ul>     
    </div>
  )
}

export default Navbar