import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
<>
<nav className='navbar'>
    <div className="container">
        <span className="logo">Booking Adviser</span>
        <div className="Navitem">
            <button className="navbtn">Ragister</button>
            <button className="navbtn">Login</button>
        </div>
    </div>

</nav>
</>  )
}

export default Navbar