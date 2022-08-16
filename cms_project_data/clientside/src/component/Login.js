import React,{useState} from 'react'
import Navbar from './Navbar'
import { Link,useNavigate } from 'react-router-dom';
import  { getUser } from '../service/api';
function Login() {
  const initial={
    email:'',
    password:''
  
  }
  const[user,setUser]=useState(initial);
  const navigate= useNavigate();

  const onValueChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  };
 
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    console.log("user add", user);
     await getUser(user);
     navigate('/home');
    
  }
  return (
   <>
    <Navbar />
     
    <center>
    <h1 className="mt-5">Login User</h1>
   <div className="container">
   <form  onSubmit={ handleSubmit } >
      
      
        <div className="row mt-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
               <label>Email</label>
               <input type="text"
                  name="email" 
                  onChange={(e)=>onValueChange(e)} 
                 className="form-control" />
            </div>
           <div className="col-lg-4"></div>
       </div>
       <div className="row mt-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
               <label>Password</label>
               <input type="text" 
                name="password"
                onChange={(e)=>onValueChange(e)}
               className="form-control" />
            </div>
           <div className="col-lg-4"></div>
       </div>
       <div className="row mt-3">
           <div className="col-lg-4"></div>
           <div className="col-lg-4">
           <input
              type="submit"
              value="Submit Here "
                className="btn btn-primary"
               />
           </div>
           <div className="col-lg-4"></div>
        </div>
        <div className="row mt-3">
           <div className="col-lg-4"></div>
           <div className="col-lg-4">
           
            </div>
           <div className="col-lg-4"></div>
        </div>
        <div className="row mt-3">
           <div className="col-lg-4"></div>
           <div className="col-lg-4">
           <Link to ="/register">Click here to Registration </Link>
                     </div>
           <div className="col-lg-4"></div>
        </div>
       
       </form>
       
       </div>
       </center>
    </>
  )
}

export default Login