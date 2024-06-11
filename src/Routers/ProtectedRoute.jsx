import React from 'react'
import  useAuth  from '../custom-hook/UseAuth'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  
    const {currentUser} = useAuth();
    return currentUser ? children :<Navigate to="/Login"/>
}

export default ProtectedRoute