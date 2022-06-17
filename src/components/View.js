import React, { useEffect, useState } from 'react'
import styles from '../style/View.module.css'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const[user,setUser]=useState({
    name:'',
    username:'',
        email:'',
        phone:'',
        website:''
  })
  const {id}=useParams();
  const navigate=useNavigate();
  const handleBack=()=>{
    navigate('/home')
  }
  
  const viewUsers=()=>{
    axios.get(`http://localhost:5000/user/${id}`)
    .then((resp)=>{
      // console.log('View',resp.data);
      setUser(resp.data)
    })
  }
  
  useEffect(()=>{
    viewUsers();
  },[])

  return (
    <div>
        <div className={styles.viewBox}>
            <div className={styles.viewHeader}>
                <h1>User Id : {id}</h1>
                <Button onClick={handleBack} type='submit' style={{textTransform:'capitalize',fontSize:'16px'}} variant="contained">Back to Home</Button>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.viewTable}>
                <h3>Name : {user.name}</h3>
            </div>
            <div className={styles.viewTable}>
                <h3>Username : {user.username}</h3>
            </div>
            <div className={styles.viewTable}>
                <h3>Email : {user.email}</h3>
            </div>
            <div className={styles.viewTable}>
                <h3>Phone : {user.phone}</h3>
            </div>
            <div className={styles.viewTable}>
                <h3>Website : {user.website}</h3>
            </div>
        </div>
    </div>
  )
}

export default View