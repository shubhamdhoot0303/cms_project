import React,{  useState,useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import  { getAll } from '../service/api';
function Login_user() {
    const [userData, setUserData] = useState({"cod":"404"});
    useEffect(()=>{
        getAllUser();
      },[]);
    const getAllUser = async() =>{
       const user_data = await getAll();
           setUserData(user_data);
         console.log(user_data)
        console.log(user_data.data[0].fname)
        }


  return (
    <>
    <div>
    <div className="row">
        <div className="col-lg-12"><Navbar /> </div>  
      </div>
      <div className= "row">
     <div className="col-lg-3"><Sidebar /> </div>
     <div className="col-lg-9"> 
     <h3 className="text-center">Login user Details </h3>
     <div>
    
          { userData?.cod==='404' ? (
                     <div className="row mt-5">
                     <div className="card text-center">
                     <div className="card-header">
                          data not found
                     </div>
                 </div>
                 
                 
                 </div>

           ):(  
            <table className="table">
           
           <thead>
             <tr>
               <th>*</th>
                <th>First Name</th>
               <th >Last Name</th>
               <th >Email</th>
               <th >Phone</th>
               <th >DOB</th>
               </tr>
           </thead>

           <tbody>
               {
          userData.data.map((value,id)=> 
          <tr key={id}>  
          <td > *</td>
          <td > { value.fname } </td>
          <td > { value.lname } </td>
          <td > { value.email } </td>
          <td > { value.phone } </td>
          <td > { value.dob } </td>
          </tr>
          )
        }
               
             
           
           </tbody>
        </table>  
             ) }

        
    
          
      </div>
      </div>
      </div>
        
            

    </div>
    </>
  )
}

export default Login_user