import React,{useEffect,useState} from 'react'
import AdminNav from './adminNav'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function slots() {
    let navigate=useNavigate()
    let [approved,setApproved]=useState([])
    let [slot,setSlot]=useState([])
    let [slotId,setSlotId]=useState('')
    let [option,setOption]=useState('')
    let [change,setchange]=useState('')
    useEffect(()=>{
        if(!localStorage.getItem('AdminEmail')){
            navigate('/adminLogin')
        }
    },[])
    useEffect(()=>{
        axios.get('http://localhost:3000/pending').then((pending)=>{
            console.log(pending.data);
            
            setApproved(pending.data.filter((obj)=>{
                console.log('==============');
                if(obj.status=='approved'){
                    return obj
                }
            }))
        })
    },[change])
    useEffect(()=>{
        axios.get('http://localhost:3000/slot').then((slots)=>{
            console.log(slots.data);
            setSlot(slots.data)
            // setchange(slots.data.filter((obj)=>{
            //     if(obj.app_id){
            //         return obj._id
            //     }
            // }))
        })
    },[change])
    function giveSlot(){
        console.log(slotId);
        console.log(option);
        if(option){axios.get('http://localhost:3000/giveslot',{params:{slotId:slotId,option:option}}).then((res)=>{
           console.log(res);
           setchange(slotId)
           setOption('')
        })}
    }
    // useEffect(()=>{
    //         navigate('/slots')
    // },[change])
  return (
    <div>
      <AdminNav></AdminNav>
        <div className="container vh-100 mt-4 text-center">
          <h1 className='text-danger'>Available Slots</h1>
            <div className="row h-25 w-100 justify-content-center">
                
                    
                    {slot.map((obj)=>{
                        console.log(obj,'obj');
                        return (
                           <div className="col-2 rounded" onClick={()=>{setSlotId(obj._id);}}>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{backgroundColor:obj.app_id?'green':'yellow'}} class="rounded ratio ratio-1x1 mt-2">
                            <div className='rounded'>
                                    </div>
                                   </div>
                                </div>
                        )
                    })}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Approve Slot</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
           <select  onChange={(e)=>{setOption(e.target.value)}} class="form-select" aria-label="Default select example">
           <option selected disabled hidden></option>
            {
                approved.map((obj)=>{

                    return(
                        
                            <option value={obj._id}>{obj.companyName}</option>
           
                    )
                })
            }
           
         </select>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss="modal" onClick={()=>{giveSlot()}} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default slots
