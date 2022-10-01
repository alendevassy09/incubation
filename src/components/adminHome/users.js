import React from 'react'
import AdminNav from './adminNav'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function users() {
    let navigate=useNavigate()
    const [check,setCheck]=useState(1)
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/adminLogin')
        }
    },[])
    console.log('sdfsd');
    const [pending,setPending]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users').then((pending)=>{
            console.log(pending.data);
            
            setPending(pending.data.filter((obj)=>{
                return obj
            }))
        })
    },[check])
    function block(id){
        console.log('block');
        axios.get('http://localhost:3000/block',{params:{id:id}}).then((res)=>{
            console.log(res);
            setCheck(0)
        })
    }
    function unblock(id){
        axios.get('http://localhost:3000/unblock',{params:{id:id}}).then((res)=>{
            console.log(res);
            setCheck(2)
        })
    }
    if(pending[0]){
  return (
   <div>
    <AdminNav></AdminNav>
    <div className="container text-center mt-3"> 
    <h4 className='text-danger'>Users</h4>
    <div className="row justify-content-center">
        <div className="col-12 col-md-8 ">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {
        pending.map((app)=>{
            return(
                <tr>
                <td>{app.fname}</td>
                <td>{app.email}</td>
                <td className={app.status=='active'? 'text-success':'text-danger'}>{app.status}</td>
                <td>{app.status=='active'? <button onClick={()=>{block(app._id)}} className='btn btn-danger'>Block</button>:<button onClick={()=>{unblock(app._id)}} className='btn btn-success'>Unblock</button>}</td>
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
                <h4 className='text-danger mt-5'>There Are No Users</h4>
                </div>
            </div>
           </div>
        </div>
    )
}
}

export default users
