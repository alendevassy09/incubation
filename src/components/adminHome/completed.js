import React from 'react'
import AdminNav from './adminNav'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function completed() {
    let navigate=useNavigate()
    console.log('sdfsd');
    const [pending,setPending]=useState([])
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/adminLogin')
        }
    },[])
    useEffect(()=>{
        axios.get('http://localhost:3000/pending').then((pending)=>{
            console.log(pending.data);
            
            setPending(pending.data.filter((obj)=>{
                console.log('==============');
                if(obj.status=='completed'){
                    return obj
                }
                
            }))
        })
    },[])
    function newOpen(id){
        // localStorage.setItem('new',id)
        // navigate('/viewPending')
        localStorage.setItem('new',id)
        navigate('/viewNew')
    }
    if(pending[0]){
  return (
   <div>
    <AdminNav></AdminNav>
    <div className="container text-center mt-3"> 
    <h4 className='text-danger'>Completed Requests</h4>
    <div className="row justify-content-center">
        <div className="col-12 col-md-8 ">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Email</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      
    </tr>
  </thead>
  <tbody>
    {
        pending.map((app)=>{
            return(
                <tr>
                <td>{app.name}</td>
                <td>{app.companyName}</td>
                <td>{app.email}</td>
                <td>{app.state}</td>
                <td>{app.country}</td>
              </tr>
            )
        })
    }
   
    
  </tbody>
</table>
        
        </div>
    </div>
</div>
</div>
  )
}else{
    return(
        <div>
            <AdminNav></AdminNav>
           <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                <h4 className='text-danger mt-5'>There Are No Completed Requests</h4>
                </div>
            </div>
           </div>
        </div>
    )
}
}

export default completed
