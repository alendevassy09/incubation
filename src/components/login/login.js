import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function login() {
    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [exist,setExist]=useState()


let navigate=useNavigate()
function login(){
  let data={
    email:email,
    password:password
  }
axios.post('http://localhost:3000',{data}).then((result)=>{
  console.log(result);
  console.log(result.data.exist);

    if (result.data.exist) {
      setEmail('')
      setPassword('')
      navigate('/home')
    }else{
      setExist(false)
    }
  
 })
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

        <p>{exist ? "":"invalid user name or password"}</p>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
            <label className="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>

        <div className="col">
          
          <a href="#!">Forgot password?</a>
        </div>
      </div>


      <button type="button" onClick={()=>{login()}} className="btn btn-primary btn-block mb-4">Sign in</button>

      
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
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

export default login
