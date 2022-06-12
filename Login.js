import React,{useState,useEffect} from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
import img1 from '../components/images/login.jpg'
import swal from 'sweetalert';
import axios from 'axios';
function Login() {

    const [fromData, setFormData] = useState({
        useremail: "",
        userpassword: "",
      });
      const { useremail, userpassword } = fromData;
    
      const onChange = (e) =>
        setFormData({ ...fromData, [e.target.name]: e.target.value });
    
      let save = async (e) => {
        e.preventDefault();
        const newUser = {
          useremail,
          userpassword,
        };
        try {
          console.log(newUser);
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const body = JSON.stringify(newUser);
          console.log(body);
          const res = await axios.post("auth/login", body, config);
          if (res.status === 200) {
            console.log("Login success");
          } else {
            //put alert
          }
        } catch (err) {
          console.error(err.response.data);
        }
      };
  return (
   <div className='form-v6'>
   <div class="page-content bg-black">
       <div class="form-v6-content">
           <div class="form-left">
               <img src={img1} className='' style={{height:'100%',width:'550px',objectFit:"cover"}} alt="form"/>
           </div>
           {/* Form tag */}
           <form class="form-detail" onSubmit={save} action="#" method="post">
               <h2>LOGIN</h2>
               <div class="form-row">
                   <input type="text"
                   name="useremail"
                      value={useremail}
                      onChange={(e) => onChange(e)} id="your-email" class="input-text" placeholder="Enter Username Here..." />
                   </div>
               <div class="form-row">
                   <input type="password" name="userpassword" value={userpassword} onChange={(e) => onChange(e)} id="password" class="input-text" placeholder="Enter Password Here..." />
                      </div>

            
                            <div className="ui message fail" style={{textAlign:'center',fontFamily:'-moz-initial',fontSize:'20px',color:'blue'}}>Fill out Form</div> 
                       
               <div class="form-row-last">
                   <input type="submit" name="register" class="register" value="Login"/>
               </div>
               <div class="form-row-last" style={{display:'flex',justifyContent:'space-between'}}>
                    <Link className="imput-text" to="/ForgotPassword">Forgot Password</Link>
                    <Link className="imput-text" to="/RegistrationUser">Register First!</Link>
               </div>

           </form>
       </div>
   </div>

 </div>

   )
}

export default Login