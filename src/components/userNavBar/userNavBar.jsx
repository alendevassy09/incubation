import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate}from 'react-router-dom'
import axios from 'axios'
function userNavBar() {
const [name,setName]=useState('')

        useEffect(()=>{
            axios.get('http://localhost:3000/user',{params:{email:localStorage.getItem('email')}}).then((fullName)=>{
                console.log(fullName.data.name);
                setName(fullName.data.name)
            })
        })
                    
   
   
    let navigate=useNavigate()
    function logout(){
        
        localStorage.removeItem('email')
        console.log('asfasfasfasdfasdfasfasdf');
        navigate('/')
    }
    if(localStorage.getItem('email')){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">{name}</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
      </ul>
        <button className="btn btn-outline-success" onClick={()=>{logout()}} type="submit">logout</button>
    </div>
  </div>
</nav>
    </div>
  )
}
}

export default userNavBar
