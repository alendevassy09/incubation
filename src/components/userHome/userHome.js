import React from 'react'
import { useEffect } from 'react'
import Nav from '../userNavBar/userNavBar'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function UserHome() {
    let [name,setSubName]=useState('')
    let [email,setEamil]=useState('')
    let [state,setState]=useState('')
    let [country,setCountry]=useState('')
    let [applied,setApplied]=useState(false)
    let [companyName,setComapanyName]=useState('')
    let [dTeam,setDTeam]=useState('')
    let [dCompany,setDCompany]=useState('')
    let [dProblemSolve,setDProblemSolve]=useState('')
    let [unique,setUnique]=useState('')
    let [valueProposition,setValueProposition]=useState('')
    let [competitorsAndAdvantage,setCompetitorsAndAdvantage]=useState('')
    let [revenueModel,setRevenueModel]=useState('')
    let [marketSize,setMarketSize]=useState('')
    let [marketPlan,setMarketPlan]=useState('')
    let [proposal,setProposal]=useState('')
    let [Error,setError]=useState('')
    let [progress,SetProgress]=useState('')
     //let [apply,setApp ly]=useState(false)
    let navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('email')){
            navigate('/')
        }
    })

    useEffect(()=>{
       
           axios.get('http://localhost:3000/getApplied',{params:{id:localStorage.getItem('user_id')}}).then((status)=>{
        console.log(status.data);
                if(status.data){
                    setApplied(true)
                    if(status.data=='new'){
                        SetProgress('25')
                    }else if(status.data=='approved'){
                        SetProgress('50')
                    }else if(status.data=='completed'){
                        SetProgress('100')
                    }
                    
                }else{
                    setApplied(false)
                }
        
        })
       
        
    })

    // useEffect(()=>{
    //     axios.get('http://localhost:3000/user',{params:{email:localStorage.getItem('email')}}).then((fullName)=>{
    //             console.log(fullName.data.name);
    //             setName(fullName.data.name)
    //         })
    // },[])

    function apply(){
        let data={
            name,
            email,
            state,
            country,
            dTeam,
            dCompany,
            companyName,
            dProblemSolve,
            unique,
            status:'new',
            valueProposition,
            competitorsAndAdvantage,
            revenueModel,
            marketSize,
            marketPlan,
            proposal,
            user:localStorage.getItem('user_id')
        }
        if((name,
            email,
            state,
            country,
            dTeam,
            dCompany,
            companyName,
            dProblemSolve,
            unique,
            valueProposition,
            competitorsAndAdvantage,
            revenueModel,
            marketSize,
            marketPlan,
            proposal)!=''){

        axios.post('http://localhost:3000/apply',{data}).then((done)=>{
                console.log(done);
                localStorage.setItem('application',done.data.response)
                setApplied(true)
            })
        }else{
            setError('all fields are required')
        }
    }
 if(applied){
    return (
        <div className='container-fluid vh-100'>
           <Nav></Nav>
           
          <div className="row h-75   justify-content-center">
            
            <div className="col-12 my-auto h-25 col-md-6 ">
            <div className="progress">
                {progress=='100'?<div className="progress-bar w-100" role="progressbar" aria-valuenow='100' aria-valuemin="0" aria-valuemax="100"></div>:''}
                {progress=='25'?<div className="progress-bar w-25" role="progressbar" aria-valuenow='25' aria-valuemin="0" aria-valuemax="100"></div>:''}
                {progress=='50'?<div className="progress-bar w-50" role="progressbar" aria-valuenow='50' aria-valuemin="0" aria-valuemax="100"></div>:''}

           
           
            </div>
            <div className='text-center'>
            <h3 className='mt-4 display-3'>Thank You</h3>
            
            {progress=='100'?<h4>Your Request Is Accepted</h4>:<h4>Your Request Is Processing...</h4>}
            <button onClick={()=>{navigate('/view')}} className='btn btn-outline-success'>View</button>
            </div>
            
            </div>
          </div>
        </div>
      )
 } else {
        return(<div>
            <Nav></Nav>
            <div className="container">
                <div className="row justify-content-center">
                   <div className="col-12 text-center ">
                   <p className='text-danger mt-3 '>{Error}</p>
                   </div>
                   
                    
                
                    <div className="col-4">
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full name</label>
                        <input value={name} type="text" onChange={(e)=>{setSubName(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={email} onChange={(e)=>{setEamil(e.target.value)}} class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-4">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">State</label>
                        <input type="text" class="form-control" value={state} onChange={(e)=>{setState(e.target.value)}} id="exampleInputEmail3" aria-describedby="emailHelp"/>
                       
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Country</label>
                        <input type="text" class="form-control" value={country} onChange={(e)=>{setCountry(e.target.value)}} id="exampleInputEmail4" aria-describedby="emailHelp"/>
                        
                    </div>
                    </div>
                    <div className="col-8">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Company Name</label>
                        <input   value={companyName} onChange={(e)=>{setComapanyName(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Describe Your Team And Backgound</label>
                        <textarea   value={dTeam} onChange={(e)=>{setDTeam(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">

                        <label for="exampleInputEmail1" class="form-label">Describe Your Company And Products</label>
                        <textarea  value={dCompany} onChange={(e)=>{setDCompany(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Describe The Problem Your Are Trying To Solve</label>
                        <textarea type="email" value={dProblemSolve} onChange={(e)=>{setDProblemSolve(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">What is Unique About Your solution</label>
                        <textarea type="text" value={unique} onChange={(e)=>{setUnique(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">What is Your value Propositions For Customer</label>
                        <textarea type="text" value={valueProposition} onChange={(e)=>{setValueProposition(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Who Are Your Competitors And What is Competative Advantage</label>
                        <textarea type="text" value={competitorsAndAdvantage} onChange={(e)=>{setCompetitorsAndAdvantage(e.target.value)}}  class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Explain Your Revenue Model </label>
                        <textarea type="text" value={revenueModel} onChange={(e)=>{setRevenueModel(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        
                        <label class="form-check-label" for="exampleCheck1">What is Potential Market Size Of The Product</label>
                        <textarea type="text" value={marketSize} onChange={(e)=>{setMarketSize(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">How Do You Market or Plan To Market Your Product And Services </label>
                        <textarea type="text" value={marketPlan} onChange={(e)=>{setMarketPlan(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 ">
                        
                        <label class="form-check-label" for="exampleCheck1">Detailed Business Proposal</label>
                        <textarea type="text" value={proposal} onChange={(e)=>{setProposal(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" onClick={()=>{apply()}} class="btn btn-primary">Submit</button>
                    </div>
                    
                    
                </div>
            </div>
        </div> )
 }
}

export default UserHome
