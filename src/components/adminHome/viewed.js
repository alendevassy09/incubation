import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function viewed() {
    let color
    let navigate = useNavigate()
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
                if(obj.status=='pending'||obj.status=='approved'){
                    return obj
                }
            }))
        })
    },[])
    function newOpen(id){

        // localStorage.setItem('new',id)
        // navigate('/viewNew')
        localStorage.setItem('new',id)
         navigate('/viewPending')
    }
    function approve(id){
        axios.get('http://localhost:3000/approve',{params:{id:id}}).then((response)=>{
                    console.log(response.data);
                    setPending(pending.filter((obj)=>{
                        console.log('==============');
                        if(obj._id==id){
                            obj.status='approved'
                            return obj
                        }else{
                            return obj
                        }
                        
                    }))
                })
    }
    if(pending[0]){
  return (
    <div className="container text-center mt-3"> 
    <h4 className='text-danger'>Applications</h4>
    <div className="row justify-content-center">
        <div className="col-12 col-md-10 ">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Status</th>
      <th scope="col">View</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        pending.map((app)=>{
            return(
                <tr>
                <td>{app.name}</td>
                <td>{app.companyName}</td>
                <td style={{color:app.status=='pending'?'red':'green'}}>{app.status}</td>
                <td><button onClick={()=>{newOpen(app._id)}} className='btn btn-info'>View</button></td>
                <td><button onClick={()=>{approve(app._id)}} style={{visibility:app.status=='pending'?'visible':'hidden'}} className='btn btn-danger'>Approve</button></td>
              </tr>
            )
        })
    }
   
    
  </tbody>
</table>
        
        </div>
    </div>
</div>
  )}else{
    return(
        <div>
           <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                <h4 className='text-danger mt-5'>There Are No Pending Requests</h4>
                </div>
            </div>
           </div>
        </div>
    )
}
}

export default viewed
