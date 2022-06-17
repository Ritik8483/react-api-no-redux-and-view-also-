import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from '../style/NavBar.module.css'
import Button from '@mui/material/Button';

const NavBar = () => {
  const navigate=useNavigate();
  const addUser=()=>{
    navigate('/adduser');
  }
  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.navSep}>
          <h2>React Routes</h2>
            <div className={styles.navRoute}>
              <p><NavLink style={({isActive})=>{return {color:isActive?'white':''}}} to='/home' className={styles.link}>Home</NavLink></p>
              <p><NavLink style={({isActive})=>{return {color:isActive?'white':''}}} to='/about' className={styles.link}>About</NavLink></p>
              <p><NavLink style={({isActive})=>{return {color:isActive?'white':''}}} to='/contact' className={styles.link}>Contact Us</NavLink></p>
            </div>
        </div>
        <div>
          <Button onClick={addUser} className={styles.addUserBtn} variant="outlined">Add User</Button>
        </div>
      </div>
    </div>
  )
}

export default NavBar