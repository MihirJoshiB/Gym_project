// import React from 'react'
import AdminDashboard from './AdminDashboard'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function VEquipment() {
  const [user, setUser] = useState([]);
   
 
    const fetchData = () => {
        axios.get('http://localhost:5000/equipment').then((response)=>{
            console.log(response);
            console.log(response.data.data);
            setUser(response.data.data);
        });
    };
    useEffect(() => {
        fetchData()
    }, []);
 
 
    // const fetchData = () => {
    //     fetch(URL)
    //         .then((res) =>
    //             res.json())
 
    //         .then((response) => {
    //             console.log(response);
    //             getData(response);
    //         })
 
    // }
 
   
  
  return (
    <>
    <AdminDashboard/>
    <div className='mt-5 bg-black' style={{paddingTop:'40px',paddingBottom:'100px'}}>
        <div class="container">
            <h2 className='h2 h2-white' style={{color:'white',marginBottom:'50px'}}>VIEW EQUIPMENT DETAILS</h2>
                        
            <table class="table table-dark table-striped table-hover" style={{border:'10px solid grey',textAlign:'center'}}>
                <thead>
                <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>QUANTITY</th>
                    <th>VIEW</th>
                    <th>Delete</th>
                    
                   
                </tr>
                </thead>
                <tbody>
                {user.map((data)=>{
                    return(
                        <tr>
                            <td>{data.eqname}</td>
                            <td>{data.eqdescription}</td>
                            <td>{data.eqcategory}</td>
                            <td>{data.eqquantity}</td>
                            <td><Link to="/admindashboard/ueq"><button type="submit" className="btn btn-outline-primary btn-sm ms-2">UPDATE</button></Link></td>
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

export default VEquipment
