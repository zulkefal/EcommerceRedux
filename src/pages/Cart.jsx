import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { removefromCart } from '../slice/CartSlice'

const Cart = () => {
  const dispatch= useDispatch();
    const cartItems= useSelector((state)=>state.cart.products)
  const handleRemove=(id)=>{
    dispatch(removefromCart(id))
  }
  return (
<div>
    <h3>Cart Page</h3>
<div >
      {cartItems.map((item)=>(
        <div className='cartItem'> 
            <img src={item.image} className='cartImg' alt="image" />
            <div className='cartInternal'>
            <h4>{item.title}</h4>
            <h4>{item.price}$/-</h4>
            <button className='removeCart' onClick={()=>handleRemove(item.id)}>Remove Cart</button>
            </div>
        </div>
      ))}
    </div>
</div>
  )
}

export default Cart
