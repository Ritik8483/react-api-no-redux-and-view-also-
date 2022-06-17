import React, { useEffect, useState } from 'react'
import styles from '../style/AddUser.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    console.log('ID',id);
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
    const loadEditUser=()=>{
        axios.get(`http://localhost:5000/user/${id}`)
        .then((resp)=>{
            setInputText(resp.data);
            console.log(resp.data);
        })
    }

    useEffect(()=>{
        loadEditUser();
    },[])

    const submitDetails=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/user/${id}`,inputText);
        navigate('/home');
        // console.log('Values',inputText)
    }
  return (
    <div>
        <div className={styles.adduserContainer}>
            <div className={styles.adduserBox}>
                <h2 className={styles.heading}>Edit User</h2>
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
                    <Button type='submit' style={{textTransform:'capitalize',fontSize:'16px'}} variant="contained">Submit Details</Button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditUser