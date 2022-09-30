
import './App.css';

import React,{useEffect,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ViewPending from './components/adminHome/viewPending';
import Pending from './components/adminHome/pending'
import New from './components/adminHome/view'
import Login from './components/login/login' 
import {Routes,Route} from 'react-router-dom'
import { UserState } from './context/userContext';
import UserHome from './components/userHome/userHome';
import SignUp from './components/signup/signUp';
import ViewMore from './components/viewMore/viewMore'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Slots from './components/adminHome/slots'
import Nav from './components/userNavBar/userNavBar'
import AdminLogin from './components/adminLogin/adminLogin'
import AdminHome from './components/adminHome/adminHome'
import Completed from './components/adminHome/completed';
function App() {
  //const [email,setEmail]=useState('')
 const [login,setLogin] = useState(false)
 const [name,setName]=useState('')
 const naviagte=useNavigate()
 
 let page
 useEffect(()=>{
  if(localStorage.getItem('email')){

    axios.get('http://localhost:3000/user',{params:{email:localStorage.getItem('email')}}).then((fullName)=>{
      console.log(fullName.data.name);
      setName(fullName.data.name)
      setLogin(true)
    })
  }
},[])
  return(
    <div>
      
<UserState>
  <Routes>
      <Route path='/' exact element={<Login />}>
          
      </Route>
      <Route path='/register'  element={<SignUp/>}>
          
      </Route>
      <Route path='/home' element={<UserHome/>}>

      </Route>
      <Route path='/view' element={<ViewMore/>}>

      </Route>
      <Route path='/adminLogin' element={<AdminLogin/>}>

      </Route>
      <Route path='/adminHome' element={<AdminHome/>}>

      </Route>
      <Route path='/new' element={<Pending/>}>

      </Route>
      <Route path='/viewNew' element={<New/>}>

      </Route>
      <Route path='/viewPending' element={<ViewPending/>}>

      </Route>
      <Route path='/slots' element={<Slots/>}>

</Route>
<Route path='/completed' element={<Completed/>}>

</Route>
      
    </Routes>
</UserState>  
    </div>
  )
  
}

export default App;
