import React from 'react'
import image from './logo-removebg-preview (3).png'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', padding:'1rem', backgroundColor:'grey'}}>
       <img src={image} alt=""  style={{height: '80px', widows: '80px', backgroundColor:'red'}} />
       <h3 >Text Utility</h3>
       <p>About</p>
       <p>Contact</p>
    </div>
  )
}

export default Navbar
