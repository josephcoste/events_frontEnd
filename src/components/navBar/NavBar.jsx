import React from 'react'
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate()
  return (
    <div className='navBar'>
      <div className='logo'>Logo</div>
      <div className='searchBar'>Search Bar</div>
      <div className='navBarMenu'>
          <div className='computerOptions'>
            <button onClick={()=> navigate('/favorite') } className='navFavorites navBarMenuBtn'>Favorites</button>
            <button  onClick={()=> navigate('/signup') } className='navSignUp navBarMenuBtn'>SignUp</button>
            <button onClick={()=> navigate('/login') } className='navLogin navBarMenuBtn'>Login</button>
          </div>
          <button onClick={()=> navigate('/help') } className='helpBtn'></button>
      </div>

    </div>
  )
}

export default NavBar