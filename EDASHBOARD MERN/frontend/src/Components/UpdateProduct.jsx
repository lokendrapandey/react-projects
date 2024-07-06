import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [company, setcompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
getProductDetails();
    },[])
    const  getProductDetails = async () =>{
      console.log(params)
      let result = await fetch(`http://localhost:1000/product/${params.id}`);
      result = await result.json();
      setname(result.name);
      setprice(result.price);
      setcategory(result.category);
      setcompany(result.company); 
    }

    const Updateproduct = async () =>{
        console.log({name,price,category,company})
        let result = await fetch(`http://localhost:1000/product/${params.id}`,{
          method:'Put',
          body: JSON.stringify({name, price, category, company }),
          headers:{
            'Content-Type' : "application/json"
          }
        }) 
        result = await result.json()
        console.log(result)
        navigate('/')

    }
  return (
    <div>
    <h1>
      UpdateProduct app 
    </h1>

         <input type="text" placeholder='enter product name' value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product price ' value={price} onChange={(e)=>{setprice(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product catogary ' value={category} onChange={(e)=>{setcategory(e.target.value)}} /> <br /> <br />
        <input type="text" placeholder='enter product company ' value={company} onChange={(e)=>{setcompany(e.target.value)}} /> <br /><br />
        <button onClick={Updateproduct}>  Add product</button>
    </div>
  )
}

export default UpdateProduct 