//import React from 'react'
import AdminDashboard from './AdminDashboard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


function VTrainerDetails() {
    const [trainer, gettrainer] = useState([])
    
 
    const fetchData = () => {
       axios.get('http://localhost:5000/trainer/').then((response)=>{
        console.log(response);
        console.log(response.data.data);
        gettrainer(response.data.data);
       });

    };
    useEffect(() => {
        fetchData()
    }, []);
 
 
    
  return (
      <>
          <AdminDashboard/>
    <div className='mt-5 bg-black'style={{paddingTop:'40px',paddingBottom:'100px'}}>
    <div class="container">
    <h2 className='h2 h2-white' style={{color:'white',marginBottom:'50px'}}>VIEW TRAINER DETAILS</h2>
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
                <th style={{width:'128px'}}>REGISTER DATE</th>
                <th>ADDRESS</th>
                <th>View</th>
                <th>Delete</th>
                
            </tr>
            </thead>
            <tbody>
            {trainer.map((data) => {
                return(
                    <tr>
                    <td>{data.trainername}</td>
                    <td>{data.email}</td>
                    <td>{data.trainercontactno}</td>
                    <td>{data.trainergender}</td>
                    <td>{moment(data.trainerdob).format('MMMM Do YYYY')}</td>
                    <td>{data.trainerheight}</td>
                    <td>{data.trainerweight}</td>
                    <td>{data.trainerrdate}</td>
                    <td>{data.traineraddress}</td>
                    <td><button type="button" class="btn btn-primary">VIEW</button></td>
                    <td><button type="button" class="btn btn-primary">Remove</button></td>                      
                      
                </tr>
                );
            })}
                    
            
            </tbody>
        </table>
        </div>    
</div>
</>
  )
}

export default VTrainerDetails