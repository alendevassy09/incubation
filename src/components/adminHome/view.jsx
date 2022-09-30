import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AdminNav from './adminNav'
import {useNavigate} from 'react-router-dom'
function view() {
    
    const [data,setData]=useState({})
    const [applied,setApplied] = useState(false)
    const [visibility,setVisibility]=useState('hidden')
    let navigate=useNavigate()
   
   useEffect(()=>{
    if(!localStorage.getItem('AdminEmail')){
        navigate('/adminLogin')
    }
   })

   

        useEffect(()=>{
            
                axios.get('http://localhost:3000/view',{params:{id:localStorage.getItem('new')}}).then((response)=>{
                    console.log(response.data);
                    setData(response.data)
                    if(response.data.status=='pending'){
                        setVisibility('visible')
                    }
                })
        },[])

        
        
  return (
    
    <div>
            <AdminNav></AdminNav>
            <div className="container mt-4"  >
                <div className="row justify-content-center">
                    <div className="col-4">
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5> Full name</h5></label>
                        <input value={data.name} type="text" disabled class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5> Email address</h5></label>
                        <input type="email" value={data.email} disabled class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-4">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5>State</h5></label>
                        <input type="text" class="form-control" value={data.state} disabled id="exampleInputEmail3" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5>Country</h5> </label>
                        <input type="text" class="form-control" value={data.country} disabled id="exampleInputEmail4" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-8">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5> Company Name</h5></label>
                        <input value={data.companyName} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"> <h5>Team And Backgound</h5></label>
                        <textarea   value={data.dTeam} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        
                        <label for="exampleInputEmail1" class="form-label"><h5> Company And Products</h5></label>
                        <textarea  value={data.dCompany} disabled  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h5> The Problems Trying To Solve</h5></label>
                        <textarea type="email" disabled  value={data.dProblemSolve} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"><h5> Unique About solution</h5></label>
                        <textarea type="text" disabled  value={data.unique}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Value Propositions For Customer</h5> </label>
                        <textarea type="text" disabled  value={data.valueProposition}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Competitors And Competative Advantage</h5> </label>
                        <textarea type="text" disabled  value={data.competitorsAndAdvantage} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Revenue Model</h5>  </label>
                        <textarea type="text" disabled  value={data.revenueModel}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Potential Market Size Of The Product</h5> </label>
                        <textarea type="text" disabled  value={data.marketSize} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Market or Plan To Market Product And Services</h5>  </label>
                        <textarea type="text" disabled  value={data.marketPlan}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1"><h5>Detailed Business Proposal</h5> </label>
                        <textarea type="text" disabled  value={data.proposal}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-3 bg-light text-center">
                        
                    </div>
                </div>
                </div>
        </div>
   
        
  )
}

export default view
