import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
        <span className='line'></span>
        <a href="" className='nav--link'>About</a>
        </li>
        <li>
        <span className='line'></span>
        <a className='nav--link' href="">Skills</a>
        </li>
        <li>
        <span className='line'></span>
        <a className='nav--link' href="">Projects</a>
        </li>
        <li>
        <span className='line'></span>
        <a className='nav--link' href="">Contact</a>
        </li>
      </ul>
     

    </nav>
  )
}

export default Navbar