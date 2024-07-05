import React from 'react'
import  useAuth  from '../custom-hook/UseAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



const ProtectedRoute = () => {
  
    const {currentUser} = useAuth();
    return currentUser ? <Outlet/> :<Navigate to="/Login"/>
}

export default ProtectedRoute