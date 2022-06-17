import React, { useState } from 'react'
import styles from '../style/AddUser.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate=useNavigate();
    const[inputText,setInputText]=useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {name,username,email,phone,website}=inputText;
    const inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputText((lastValue)=>{
            return{
                ...lastValue,
                [name]:value
            }
        })
    }

    // const addUserData=()=>{
    //     axios.post(`${http://localhost:5000/user}`,inputText)
    // }

    const submitDetails=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/user',inputText);
        navigate('/home');
        console.log('Values',inputText)
    }
  return (
    <div>
        <div className={styles.adduserContainer}>
            <div className={styles.adduserBox}>
                <h2 className={styles.heading}>Add User</h2>
                <form onSubmit={submitDetails}>
                <div className={styles.text_div}>
                    <TextField name='name' value={name} onChange={inputEvent} style={{width:'100%'}} id="standard-basic" label="Enter your name" variant="standard" />
                </div>
                <div className={styles.text_div}>
                    <TextField name='username' value={username} onChange={inputEvent} style={{width:'100%'}} id="standard-basic" label="Enter your username" variant="standard" />
                </div>
                <div className={styles.text_div}>
                    <TextField name='email' value={email} onChange={inputEvent} style={{width:'100%'}} id="standard-basic" label="Enter your email address" variant="standard" />
                </div>
                <div className={styles.text_div}>
                    <TextField name='phone' value={phone} onChange={inputEvent} type='number' style={{width:'100%'}} id="standard-basic" label="Enter your phone number" variant="standard" />
                </div>
                <div className={styles.text_div}>
                    <TextField name='website' value={website} onChange={inputEvent} style={{width:'100%'}} id="standard-basic" label="Enter your website url" variant="standard" />
                </div>
                <div className={styles.btn}>
                    <Button type='submit' style={{textTransform:'capitalize',fontSize:'16px'}} variant="contained">Add User</Button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddUser