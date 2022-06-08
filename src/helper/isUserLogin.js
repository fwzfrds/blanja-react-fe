import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

const IsUserLogin = ({children}) => {
  const isAuth = localStorage.getItem('BlanjaUser')
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

export default IsUserLogin