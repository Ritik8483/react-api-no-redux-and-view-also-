import React, { useEffect, useState } from 'react'
import styles from '../style/NavBar.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Home = () => {
    const navigate=useNavigate();
    const[userData,setUserData]=useState([]);
    const handleView=()=>{
       navigate('/view')
    }
    useEffect(()=>{
      getUsers()
    },[]);

    const getUsers= ()=>{
      axios.get('http://localhost:5000/user')
      .then((response)=>{
        setUserData(response.data)
      })
    }

    const getDeleteUSer=(id)=>{
      axios.delete(`http://localhost:5000/user/${id}`)
      getUsers();
    }
    const handleEdit=(id)=>{
      navigate(`/edituser/${id}`)
    }

  return (
    <div>
        <div className={styles.homeBox}>
            <h1>Home Page</h1>
            <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">View Details</StyledTableCell>
            <StyledTableCell align="center">Edit Details</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((userItem,index) => (
            <StyledTableRow key={userItem.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="center">{userItem.name}</StyledTableCell>
              <StyledTableCell align="center">{userItem.username}</StyledTableCell>
              <StyledTableCell align="center">{userItem.email}</StyledTableCell>
              <StyledTableCell align="center"><Button onClick={()=>navigate(`/view/${userItem.id}`)} variant="contained">View</Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="outlined" onClick={()=>handleEdit(userItem.id)}>Edit</Button></StyledTableCell>
              <StyledTableCell align="center"><Button style={{backgroundColor:'red'}} onClick={()=>getDeleteUSer(userItem.id)} variant="contained">Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}

export default Home