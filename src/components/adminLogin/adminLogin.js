
import React,{ useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function adminLogin() {
    let navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [wrong,setWrong]=useState('')
    useEffect(()=>{
        if(localStorage.getItem('AdminEmail')){
          navigate('/adminHome')
        }
      })
   function user_login(){
    
        let data={
            email:email,
            password:password
            }

            if(email==''&& password==''){
                setWrong('check fields before submit')
              }else{
            
                axios.post('http://localhost:3000/adminLogin',{data}).then((result)=>{
                  console.log(result);
                  console.log(result.data.status);
                  
                  if (result.data.status) {
                    localStorage.setItem('AdminEmail', email)
                    //localStorage.setItem('admin_id',result.data.user)
                    navigate('/AdminHome')
                  }else{
                    setWrong('invalid username or password')
                  }
                  
                }
                
             )}
    }
  return (
    <div className='container vh-75 pt-5' >
      <div className="row align-middle  mt-5 justify-content-center">
        <div className="col-4 bg-light p-3">
        <div className="form-outline mb-4">
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="form2Example1" className="form-control" />
        <label className="form-label" for="form2Example1">Email address</label>
      </div>

      
      <div className="form-outline mb-4">
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="form2Example2" className="form-control" />
        <label className="form-label" for="form2Example2">Password</label>
      </div>

        <p className='text-danger'>{wrong}</p>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
        </div>

        
      </div>


      <button type="button" onClick={()=>{user_login()}} className="btn btn-primary btn-block mb-4">Sign in</button>

      
      <div className="text-center">
        
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>
 
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button"  className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default adminLogin
