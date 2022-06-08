import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const IsAdminLogin = ({children}) => {
  const isAuth = localStorage.getItem('BlanjaAdmin')
  if (isAuth){
    swal({
        title: "Good job!",
        text: `Anda Sudah Login!`,
        icon: "error",
    });
     
    return (
      <Navigate to={-1} replace />
    )
  }
  return children
}

export default IsAdminLogin