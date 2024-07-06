import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Navbar() {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    function logout() {
        // console.log('apple')
        localStorage.clear();
        navigate('/signup')

    }
    return (

        <div className="d-flex justify-content-between list-unstyled fixed-top border bg-dark p-2" style={{ height: '50px' }}>
            {

                auth ? <>
                    <li style={{ marginRight: '10px' }}> <Link to='/'>Products</Link> </li>
                    <li style={{ marginRight: '10px' }}> <Link to='/add'>Add Product</Link> </li>
                    <li style={{ marginRight: '10px' }}> <Link to='/update'>Update</Link> </li>
                    <li style={{ marginRight: '10px' }}> <Link to='/profile'>Profile</Link> </li>
                    <li style={{ marginRight: '10px' }}> <Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link> </li>
                </>

                    : <div className="d-flex   list-unstyled fixed-top  bg-dark p-2">
                        <li style={{ marginRight: '10px' }}> <Link to='/signup'>Signup</Link> </li>
                        <li style={{ marginRight: '10px' }}> <Link to='/login'>Login</Link> </li>
                    </div>


            }
        </div>

    )
}
