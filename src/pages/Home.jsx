import React, { useEffect, useState } from 'react'
import { add,removefromCart } from '../slice/CartSlice';
import './Home.css'
import { useDispatch } from 'react-redux';
const Home = () => {
    const [product,setProducts]= useState([]);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    },[])

    const dispatch = useDispatch();

    const handleAdd = (item)=>{
      dispatch(add(item))
    }
  return (
    <div className='productsMain'>
      {product.map((item)=>(
        <div className='card' key={item.id}>
            <img src={item.image} alt="image" />
            <h4>{item.title}</h4>
            <h4 className='price'>{item.price}$/-</h4>
            <button className='btnCart' onClick={()=>handleAdd(item)}>Add to Cart</button>
        </div>
      )
        )}
    </div>
  )
}

export default Home
