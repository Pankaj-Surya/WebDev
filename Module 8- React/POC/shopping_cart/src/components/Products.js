import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from '.././store/cartSlice'

function Products() {
  const [products , setProducts]= useState([])
  const dispatch = useDispatch();
  useEffect( ()=>{
    const fetchProducts= async ()=>{
    let res = await fetch('https://fakestoreapi.com/products');
    const data =await  res.json();
    console.log(data);
    setProducts(data)
    };
    fetchProducts()
  }
  ,[])

  function handleAdd (product){
    // console.log("click product")
    // console.log(product)
    dispatch(add(product))
    console.log("after dispatch")
  }
  return (
    <div className='productsWrapper'>
       {
        products.map((product)=>(
         <div className='card' key ={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=>{    
           handleAdd(product)
          }}>Add to Cart</button>
         </div>
        ))
       }
      
    </div>
  )
}

export default Products