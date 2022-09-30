import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Pending from './pending'
import AdminNav from './adminNav'
import Viewed from './viewed'
function adminHome() {
    let navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/adminLogin')
        }
    },[])
  return (
    <div>
    <AdminNav></AdminNav>
    <Viewed></Viewed>
    </div>
  )
}

export default adminHome
