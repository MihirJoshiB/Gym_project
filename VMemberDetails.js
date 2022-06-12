import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import axios from 'axios';
import moment from 'moment';

// import { Link } from 'react-router-dom';

function VMemberDetails() {
  const[member, setmember] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:5000/member_reg/').then((response)=>{
      console.log(response);
      console.log(response.data.data);
      setmember(response.data.data);
    });
  };

  useEffect(() => {
    fetchData()
  },[]);
    
  return (
      <>
    <AdminDashboard/>
    <div className='mt-5 bg-black' style={{paddingTop:'40px',paddingBottom:'100px'}}>
        <div class="container">
            <h2 className='h2 h2-white' style={{color:'white',marginBottom:'50px'}}>VIEW MEMBER DETAILS</h2>
                        
            <table class="table table-dark table-striped table-hover" style={{border:'10px solid grey',textAlign:'center'}}>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th style={{width:'112px'}}>CONTACT NO</th>
                    <th>GENDER</th>
                    <th style={{width:'105px'}}>BIRTH DATE</th>
                    <th>HEIGHT</th>
                    <th>WEIGHT</th>
                    <th>ADDRESS</th>
                    <th>View</th>
                    <th>Delete</th>
                  
                </tr>
                </thead>
                <tbody>
                    {member.map((data)=>{
                      return(
                        <tr>
                          <td>{data.member_Name}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>{data.Gender}</td>
                          <td>{moment(data.DOB).format('MMMM Do YYYY')}</td>
                          <td>{data.Height}</td>
                          <td>{data.Wight}</td>
                          <td>{data.Address}</td>
                          <td><button type="button" class="btn btn-primary">VIEW</button></td>
                          <td><button type="button" class="btn btn-primary">Remove</button></td>                        </tr>
                      );
                    })}
                </tbody>
            </table>
            </div>    
    </div>
    </>
  )
}
export default VMemberDetails