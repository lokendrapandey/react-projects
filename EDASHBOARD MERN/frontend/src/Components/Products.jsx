// import React, { useEffect, useState } from 'react'
// // import './App.css'
// import { Link } from 'react-router-dom'

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     getProducts();
//   }, [])

//   const getProducts = async () => {
//     let result = await fetch('http://localhost:1000/products');
//     result = await result.json(); 
//     setProducts(result);

//   }
//   // console.log("product",products)

//   const deleteProduct = async (id) => {
//     // console.log(id);
//     let result = await fetch(`http://localhost:1000/product/${id}`, {
//       method: "Delete"
//     });
//     result = await result.json()
//     if (result) {
//       alert("record is delete")
//       getProducts();
//     }
//   }

//   // async function searchHandle(event) {
//   //   // console.log(event.target.value)
//   //   let key = event.target.value;
//   //   if (key) {

//   //     let result = await fetch(`http://localhost:5000/search/${key}`);
//   //     result = await result.json();
//   //     if (result) {
//   //       setProducts(result)
//   //     }
//   //   } else {
//   //     getProducts()
//   //   }

//   // }

//   return (
//     <div className='product-list'>
//       <h1>product list</h1>
//       {/* <input className='search' onChange={searchHandle} type='text' placeholder='Search Product by Name Company Category' /> */}
//       <ul>
//         <li>S.No</li>
//         <li>Name</li>
//         <li>Price</li>
//         <li>Category</li>
//         <li>Company</li>
//         <li>Operation</li>
//       </ul>
//       {
//         products.length > 0 ?
//          products.map((item, index) =>
//           <ul key={item._id}>
//             <li>{++index}</li>
//             <li>{item.name}</li>
//             <li>{item.price}</li>
//             <li>{item.category}</li>
//             <li>{item.company}</li>
//             <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
//               {/* <button> <Link to={"update/" + item._id}>Update</Link></button> */}
//             </li>
//           </ul>
//         )
//           : <h1>No Product found </h1>
//       }
//     </div>
//   )
// }

// export default Products




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts = async () => {
    let result = await fetch('http://localhost:1000/products',{
      headers:{
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };
  
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:1000/product/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      alert('Record is deleted');
      getProducts();
    }
  };

  async function searchHandle(event) {
    // console.log(event.target.value)
    let key = event.target.value;
    if (key) {

      let result = await fetch(`http://localhost:1000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts()
    }

  }
  return (
    <div className='container'>
    {" "}<br/>
      <h1 className='text-center'>Product List</h1>
    <input  className='search w-100' onChange={searchHandle} type='text' placeholder='Search Product by Name Company Category' />
      <table className='table table-bordered border-primary table-dark'>

        <thead>
          <tr>
            <th scope='col'>S.No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Category</th>
            <th scope='col'>Company</th>
            <th scope='col'>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={item._id}>
                <td>{++index}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteProduct(item._id)}
                  >
                    Delete
                  </button>{"  "}
               <button className='btn btn-danger text-white'
                 > <Link className='text-white'
                 to={"update/" + item._id}>Update</Link></button>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='6' className='text-center'>No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;












// import React, { useEffect, useState } from 'react'

// function Products() {
//   const [products, setproducts] = useState();

//   useEffect(() => {
//     getProducts();
//   }, [])

//   const getProducts = async () => {
//     let result = await fetch('http://localhost:1000/products');
//     result = await result.json();
//     setproducts(result);
//   }
//   // console.log("products",products[0].name);
//   return (
//     <div >
//       <h1>product page</h1>
//       <ul className='table'>
//         <li>S.no</li>
//         <li>Name</li>
//         <li>Price</li>
//         <li>Category</li>
//         <li>Company</li>
//       </ul>
//       {
//         products.map((item, index) => 
//           <ul className='table'>
//             <li>{index + 1}</li>
//             <li>{item.name}</li>
//             <li>{item.price}</li>
//             <li>{item.category}</li>
//             <li>{item.company}</li>
//           </ul>
//         )
//       }
//     </div>
//   )
// }

// export default Products
