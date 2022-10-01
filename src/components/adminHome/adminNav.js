import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Pending from './pending'
import Viewed from './viewed'
function adminNav() {
    let navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/adminLogin')
        }
    },[])
    function adminLogout() {
        localStorage.removeItem('AdminEmail')
        navigate('/adminLogin')
    }
    function newapp(){
        navigate('/new')
    }
    function adminHome(){
        navigate('/adminHome')
    }
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <button onClick={()=>{adminHome()}} class="btn" >Home</button>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn" onClick={()=>{newapp()}} aria-current="page">New</button>
        </li>
        <li class="nav-item">
          <button class="btn" onClick={()=>{navigate('/slots')}} aria-current="page">Slots</button>
        </li>
        <li class="nav-item">
          <button class="btn" onClick={()=>{navigate('/completed')}} aria-current="page">list</button>
        </li>
        <li class="nav-item">
          <button class="btn" onClick={()=>{navigate('/users')}} aria-current="page">users</button>
        </li>
      </ul>

        <button class="btn btn-outline-success" onClick={()=>{adminLogout()}} type="submit">logout</button>
  
    </div>
  </div>
</nav>
    </div>
  )
}

export default adminNav
