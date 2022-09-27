
import './App.css';

import React,{useEffect,useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/login/login' 
import {Routes,Route} from 'react-router-dom'
import userContext from './context/userContext';
  import UserHome from './components/userHome/userHome';

function App() {

 
  return(
    
    <Routes>
      <Route path='/' exact element={<Login/>}>
          
      </Route>
      <Route path='/home' element={<UserHome/>}>

      </Route>
      
    </Routes>
    
  )
  
}

export default App;
