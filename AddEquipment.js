import React,{useState} from 'react'
import AdminDashboard from './AdminDashboard'
import axios from 'axios';
import img1 from '../components/images/addeqp.png'
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function AddEquipment() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        eqname: "",
        eqdescription: "",
        eqcategory: "",
        eqquantity: ""
     
    });
  
    const { eqname, eqdescription, eqcategory ,eqquantity} = formData;
  
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    // Submit Click
    const onSubmit = async(e) => {
      e.preventDefault();
      console.log(formData);
      
        const newEquip = {
            eqname, eqdescription, eqcategory ,eqquantity
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newEquip);
             const res = await axios.post('http://localhost:5000/equipment', body, config);
             swal({
                 title:'Done',
                 text:'Equipment Added Successfully',
                 icon:'success'
             }).then(function(){
                 window.location='/admindashboard';
             });
                
              
            console.log(res.data);
            
        } catch (err) {
           // alertify.error(err.response.data['errors'][0].msg);
            console.error(err.response.data);
        }
        // console.log(eqname,eqquantity,eqdescription);
    
        // You can write API Code Here.... 
    };

  return (
    <>
        <AdminDashboard/>
        <div className='mt-5'>
        <section className="h-100 bg-black">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src={img1} alt="register" className="img-fluid" 
                        style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' ,width: "800px",height:"80%",objectFit:"cover"}}
                    />
                    </div>
                    <div className="col-xl-6">
                        {/* Form Tag */}
                    <form onSubmit={e => onSubmit(e)} method="post">
                    <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">ADD EQUIPMENTS</h3>
                        {/* Name  */}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqname" value={eqname} onChange={e => onChange(e)} placeholder="Enter Equipment Name.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Name</label> */}
                        </div>
                        {/* Quantity  */}                        
                        <div className="form-outline mb-4">
                            <input type="number" name="eqquantity" value={eqquantity} onChange={e => onChange(e)}  min="0" max="100"  placeholder="Enter Equipment Quantity.." id="form3Example97" className="form-control form-control-lg" required/>
                            {/* <label className="form-label">Quantity</label> */}
                        </div>
                         {/* Category*/}
                         <div className="form-outline mb-4">
                            <input type="text" name="eqcategory" value={eqcategory} onChange={e => onChange(e)} placeholder="Enter Equipment Category.." className="form-control form-control-lg" required/>
                            {/* <label className="form-label" for="form3Example8">Description</label> */}
                        </div>
                        {/* Description*/}
                        <div className="form-outline mb-4">
                            <input type="text" name="eqdescription" value={eqdescription} onChange={e => onChange(e)} placeholder="Enter Equipment Description.." className="form-control form-control-lg" required/>
                            {/* <label className="form-label" for="form3Example8">Description</label> */}
                        </div>

                        {/* Buttons  */}
                        <div className="d-flex justify-content-end pt-3">
                            <button type="submit" className="btn btn-warning btn-lg ms-2">Submit</button>
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
    </>
  )
}

export default AddEquipment
