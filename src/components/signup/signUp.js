import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext}from '../../context/userContext'
function signUp() {
    let navigate=useNavigate()
    const {userExist,setUserExist}=useContext(UserContext)
        console.log(userExist);
        useEffect(()=>{
            // if(localStorage.getItem('email')){
            //     navigate('/home')
            // }
            axios.get('http://localhost:3000',{headers:{token:window.sessionStorage.getItem('token')}}).then((status)=>{
        if(status.data.status){
          navigate('/home')
        }
      })
           
        })
        let [exist,setExist]=useState('')
    let [fname,setFname]=useState('')
    let [lname,setLname]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [passwordConfirm,setPasswordConfirm]=useState('')
    let [wrong,setWrong]=useState('')
    function sign_Up(){
     
        let data={fname,lname,email,password,status:'active'}
        if((fname,lname,email,password)!=''){
          if(password===passwordConfirm){
        axios.post('http://localhost:3000/userSignUp',data).then((done)=>{
            console.log(done.data.user);
            
            if(done.data.user.exist){

              setExist('email you entered already exists')
            }else{
              //localStorage.setItem('token',done.data.user.token)
            navigate('/')
            }
          })}else{
            setExist('password doesnt match')
          }
         }else{
          setWrong(' all fields are required')
         }
    }
  return (
    <div> 
     <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}} id="form3Example1c"  className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your First Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example2c" value={lname} onChange={(e)=>{setLname(e.target.value)}} className="form-control" />
                      <label className="form-label" htmlFor="form3Example2c">Your Last Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" value={passwordConfirm}  onChange={(e)=>{setPasswordConfirm(e.target.value)}} className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>
    <p className='text-danger'>{wrong}</p>
    <p className='text-danger'>{exist}</p>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={()=>{sign_Up()}}
                        
                             className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt=""/>

              </div>
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

export default signUp
