import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const AuthAdmin = ({children}) => {
  const isAuth = localStorage.getItem('BlanjaAdmin')
  if (!isAuth){
    swal({
        title: "Good job!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
    return (
      <Navigate to="/login-admin" replace />
    )
  }
  return children
}

export default AuthAdmin