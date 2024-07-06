import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateComponent = () => {
  const auth = localStorage.getItem('user');
  return(
      auth ? <Outlet /> : <Navigate to="/signup" />
    )
}

export default PrivateComponent



// auth ? <Outlet /> : <Navigate to="/signup" />

// const auth = localStorage.getItem('user');