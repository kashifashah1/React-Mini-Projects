import React from 'react'
import styles from "./Navigation.module.css"

const Navbar = () => {
  return (
    <nav className={`container ${styles.navigation}`}>
        <div className='logo'>
            <img src="/images/Frame 2 1.png" alt="do some coding logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
