import React, {  useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'

function Signup() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user')
      if(auth){
        navigate('/')
      }
    })

     

    const collectdata = async () => {
      console.table({ name, email, password })
      let result = await fetch("http://localhost:1000/register", {
        method: 'post',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
  
      });
      result = await result.json()
      console.log(result)
      localStorage.setItem("user",JSON.stringify(result.result))
      localStorage.setItem("token",JSON.stringify(result.auth))
      // sessionStorage.setItem("user",JSON.stringify(result))
      navigate('/')
      // if(result){
      // }
    }
  

  return (
    <div class='register'>
    <h1>Signup</h1>
    <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} /> <br />
    <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} /> <br />
    <input type="text" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} /> <br />
    <button onClick={collectdata}>Submit</button>
  </div>
)
}

export default Signup
