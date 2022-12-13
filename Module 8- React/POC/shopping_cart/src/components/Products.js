import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { add } from '.././store/cartSlice'
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Products() {
  // const [products , setProducts]= useState([])
  const { data: products, status } = useSelector((state) => state.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
    // const fetchProducts= async ()=>{
    // let res = await fetch('https://fakestoreapi.com/products');
    // const data =await  res.json();
    // console.log(data);
    // setProducts(data)

    //};
    //fetchProducts()
  }
    , [])

  function handleAdd(product) {
    // console.log("click product")
    // console.log(product)
    dispatch(add(product))
    console.log("after dispatch")
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={() => {
              handleAdd(product)
            }}>Add to Cart</button>
          </div>
        ))
      }

    </div>
  )
}

export default Products