import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const AuthUser = ({children}) => {
  const isAuth = localStorage.getItem('BlanjaUser')
  if (!isAuth){
    swal({
        title: "Good job!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
    return (
      <Navigate to="/login" replace />
    )
  }
  return children
}

export default AuthUser