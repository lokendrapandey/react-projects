import React, { useState } from 'react';

const Addproduct = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('');
  const [company, setcompany] = useState('');
  const [error, setError] = useState('');

  async function addProduct() {
    // Check if any field is empty
    if (!name || !price || !category || !company) {
      setError('Please fill in all fields.');
      return;
    }

    console.table({ name, price, category, company });
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    try {
      const result = await fetch('http://localhost:1000/add-product', {
        method: 'POST',
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await result.json();
      console.log(data);
      // Reset form fields after successful submission
      setname('');
      setprice('');
      setcategory('');
      setcompany('');
      setError('');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        placeholder="Enter product category"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
      />{' '}
      <br />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Addproduct;















// import React, { useState } from 'react'

// const Addproduct = () => {
//   const [name, setname] = useState('');
//   const [price, setprice] = useState('');
//   const [category, setcategory] = useState('');
//   const [company, setcompany] = useState('');
//   async function  addProduct() {
//     console.table({name,price,category,company});
//     const userId =JSON.parse(localStorage.getItem('user'))._id;
//     const result = await fetch('http://localhost:1000/add-product',{
//       method:'POST',
//       body:JSON.stringify({name,price,category,company,userId}),
//       headers:{
//         "Content-Type":"application/json"
//       }
//     });
//     result = await result.json();
//     console.log(result);

//   }

//   return (
//     <div>
//         <h1>aDD product</h1>
//         <input type="text" placeholder='enter product name' value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> <br />
//         <input type="text" placeholder='enter product price ' value={price} onChange={(e)=>{setprice(e.target.value)}} /> <br /> <br />
//         <input type="text" placeholder='enter product catogary ' value={category} onChange={(e)=>{setcategory(e.target.value)}} /> <br /> <br />
//         <input type="text" placeholder='enter product company ' value={company} onChange={(e)=>{setcompany(e.target.value)}} /> <br /><br />
//         <button onClick={addProduct}>  Add product</button>

//     </div>
//   )
// }

// export default Addproduct
