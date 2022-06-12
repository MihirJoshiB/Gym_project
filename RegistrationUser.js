import React,{useState} from 'react';
import './css/registrationuser.css';
import img1 from '../components/images/gym_dark5.jfif';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function RegistrationUser() {

 // disable future dates....
        const disableDates=()=>{

            const today=new Date();
            const dd=String(today.getDate()+1).padStart(2,"0");
            const mm=String(today.getMonth()+1).padStart(2,"0");
            const yyyy=today.getFullYear();
            return  yyyy+"-"+mm+"-"+dd;
        }

        
        const [Gender,setGender]=useState();
    const [formData,setFormData]=useState(
        {member_Name:"",
        email:"",
        DOB:"",
        phone:"",
        Address:"",
        Gender:"",
        Height:"",
        Wight:"",
        password:"",});
        const { member_Name,email,DOB,phone,Address,Height,Wight,password } =formData;
 
        const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // Submit Event
    const onSubmit = async(e) => {
        e.preventDefault();

        const newUser = {
            member_Name,
            email,
            DOB,
            phone,
            Address,
            Gender,
            Height,
            Wight,
            password
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser);
             const res = await axios.post('http://localhost:5000/member_reg', body, config);
             swal({
                title:'Done',
                text:'Member Registration Successfully',
                icon:'success'
            }).then(function(){
                window.location='/login';
            });
               
            console.log(res.data);
            
        } catch (err) {
            console.error(err.response.data);
        }
        // console.log(
        //     membername,
        //     memberemail,
        //     memberdob,
        //     membercontactno,
        //     memberaddress,
        //     membergender,
        //     memberheight,
        //     memberweight,
        //     memberpassword
        // );

        //You can write API code Here.....


    }


    return (
    <div className='mt-5'>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid"
                        style={{borderTopLeftRadius: '.25rem', height:'100%',width:'550px',objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                        {/* Form Tag */}
                    <form onSubmit={e => onSubmit(e)} method="post">              {/*  onSubmit={e=> onSubmit(e)}*/}
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">REGISTER HERE..</h3>
                        {/* name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="member_Name" value={member_Name}  onChange={e => onChange(e)}  placeholder="Enter Name.." id="form3Example97" className="form-control form-control-lg" required/>   {/* value={membername}  onChange={e=>onChange(e)} */}
                            {/* <label className="form-label">Name</label> */}
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.membername}</label> */}
                        </div>
                        {/* Email  */}                        
                        <div className="form-outline mb-4">
                            <input type="email" name="email" value={email} onChange={e => onChange(e)}  placeholder="Enter Email-ID.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Email ID</label> */}
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberemail}</label>                             */}
                        </div>
                        {/* DOB and Contactno  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="date" name="DOB" max={disableDates()} value={DOB} onChange={e => onChange(e)} id="form3Example1m1" className="form-control form-control-lg" required/>
                                    <label className="form-label" for="form3Example1m1">DOB</label>
                                    {/* <label className="form-label" style={{color:'red'}}>{formErrors.memberdob}</label> */}
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="text" name="phone" value={phone} onChange={e => onChange(e)} minLength={10} maxLength={10} placeholder="Enter Contact Number.." id="form3Example1n1" className="form-control form-control-lg" required/>
                                    <label className="form-label" for="form3Example1n1" >Contact Number</label>
                                    {/* <label className="form-label" style={{color:'red'}}>{formErrors.membercontactno}</label> */}
                                </div>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="form-outline mb-4">
                            <input type="text" name="Address" value={Address} onChange={e => onChange(e)} placeholder="Enter Address.." className="form-control form-control-lg" required/>
                            {/* <label className="form-label" for="form3Example8">Address</label> */}
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberaddress}</label> */}
                        </div>
                        {/* Gender  */}
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                            <h6 className="mb-0 me-4">Gender: </h6>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Gender"
                                id="femaleGender"
                                value="F"
                                onChange={e=>setGender(e.target.value)}
                                required
                                />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>
                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Gender"
                                id="maleGender"
                                value="M"
                                onChange={e=>setGender(e.target.value)}
                                required
                                />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.membergender}</label> */}
                        </div>

                        {/* Height and Weight  */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                {/* <h3>{hselects}</h3> */}
                                {/* 1 foot = 12 inches */}
                                
                                <div className="form-outline">
                                    <input type="number" name="Height" value={Height} onChange={e => onChange(e)} maxLength={2} placeholder="Height ex.5 Feet" id="form3Example1n1" className="form-control form-control-lg" required/>
                                    {/* <label className="form-label" for="form3Example1n1" >Height</label> */}
                                    {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberheight}</label> */}
                                </div>                                
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input type="number" name="Wight" value={Wight} onChange={e => onChange(e)} maxLength={3} placeholder="Weight ex.80 Kg" id="form3Example1n1" className="form-control form-control-lg" required/>
                                    {/* <label className="form-label" for="form3Example1n1" >Weight</label> */}
                                    {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberweight}</label> */}
                                </div>
                            </div>
                        </div>
                        {/* Password  */}
                        <div className="form-outline mb-4">
                            <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="Enter Password.." className="form-control form-control-lg" required/>
                            {/* <label className="form-label" for="form3Example99">Password</label> */}
                            {/* <label className="form-label ml-5" style={{color:'red'}}>{formErrors.memberpassword}</label> */}
                        </div>

                        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message success" style={{fontSize:'20px',color:'blue'}}>Register Successfully..</div> 
                        ) : (
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}>Fill out Form</div> 
                        )} */}

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">Register</button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link className="" to="/Login">Already Have An Account? Login Here...</Link>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default RegistrationUser;