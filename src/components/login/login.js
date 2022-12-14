import React,{useState,useContext} from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/userContext';
import { useEffect } from 'react';
function login() {
  let navigate=useNavigate()
  const {userExist,setUserExist}=useContext(UserContext)
  console.log('exist',userExist);
  useEffect(()=>{
    // if(localStorage.getItem('email')){
    //   navigate('/home')
    // }
      axios.get('http://localhost:3000',{headers:{token:window.sessionStorage.getItem('token')}}).then((status)=>{
        console.log(status.data);
        if(status.data.status){
          navigate('/home')
        }
      })

  })
  
  const [wrong,setWrong]=useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  useEffect(()=>{
    setWrong('')
    console.log('wrong');
  },[email,password])
function user_login(){
  console.log(localStorage.getItem('token'));
  let data={
  email:email,
  password:password,
  token:localStorage.getItem('token')
  }

  if(email==''&& password==''){
    setWrong('check fields before submit')
  }else{

    axios.post('http://localhost:3000',{data}).then((result)=>{
      console.log(result);
      console.log(result.data.exist);
      
      if (result.data.exist) {
        window.sessionStorage.setItem("token", result.data.token)
        //localStorage.setItem('token',result.data.token)
        localStorage.setItem('email', email)
        localStorage.setItem('user_id',result.data.user)
       navigate('/home')
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
          
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
            <label className="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>

        <div className="col">
          
          <a href="#!">Forgot password?</a>
        </div>
      </div>


      <button type="button" onClick={()=>{user_login()}} className="btn btn-primary btn-block mb-4">Sign in</button>

      
      <div className="text-center">
        <p>Not a member? <a  onClick={()=>{navigate('/register')}}>Register</a></p>
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
