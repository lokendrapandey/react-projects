import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Products from './Components/Products'
import Profile from './Components/Profile'
import Signup from './Components/Signup'
import UpdateProduct from './Components/UpdateProduct'
import AddProduct from './Components/AddProduct'
import Logout from './Components/Logout'
import Login from './Login'
import PrivateComponent from './Components/PrivateComponent'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
    <Routes>
    <Route  element={<PrivateComponent/>}>
      <Route path='/' element={<Products/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Route>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/*' element={<h1>404 page not found</h1>}/> // wrong route
    </Routes>
      </BrowserRouter>
      <h3>Dashborad</h3>
    </>
  )
}

export default App
