import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from '../userNavBar/userNavBar'
import {useNavigate} from 'react-router-dom'
function viewMore() {
    const [data,setData]=useState({})
    const [applied,setApplied] = useState(false)
    
    let navigate=useNavigate()
   
   useEffect(()=>{
    if(!localStorage.getItem('email')){
        navigate('/')
    }
   })

   

        useEffect(()=>{
            
                axios.get('http://localhost:3000/viewMore',{params:{id:localStorage.getItem('user_id')}}).then((response)=>{
                    console.log(response.data);
                    setData(response.data)
                })
        },[])
  return (
    
    <div>
            <Nav></Nav>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full name</label>
                        <input value={data.name} type="text" disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={data.email} disabled class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-4">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">State</label>
                        <input type="text" class="form-control" value={data.state} disabled id="exampleInputEmail3" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Country</label>
                        <input type="text" class="form-control" value={data.country} disabled id="exampleInputEmail4" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-8">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Company Name</label>
                        <input value={data.companyName} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Describe Your Team And Backgound</label>
                        <textarea   value={data.dTeam} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">

                        <label for="exampleInputEmail1" class="form-label">Describe Your Company And Products</label>
                        <textarea  value={data.dCompany} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Describe The Problem Your Are Trying To Solve</label>
                        <textarea type="email" disabled  value={data.dProblemSolve} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">What is Unique About Your solution</label>
                        <textarea type="text" disabled  value={data.unique}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">What is Your value Propositions For Customer</label>
                        <textarea type="text" disabled  value={data.valueProposition}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Who Are Your Competitors And What is Competative Advantage</label>
                        <textarea type="text" disabled  value={data.competitorsAndAdvantage} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Explain Your Revenue Model </label>
                        <textarea type="text" disabled  value={data.revenueModel}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        
                        <label class="form-check-label" for="exampleCheck1">What is Potential Market Size Of The Product</label>
                        <textarea type="text" disabled  value={data.marketSize} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">How Do You Market or Plan To Market Your Product And Services </label>
                        <textarea type="text" disabled  value={data.marketPlan}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Detailed Business Proposal</label>
                        <textarea type="text" disabled  value={data.proposal}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
   
        
  )
}

export default viewMore
