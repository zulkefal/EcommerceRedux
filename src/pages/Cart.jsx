import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
const Cart = () => {
    const cartItems= useSelector((state)=>state.cart.products)

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
            <button>Remove Cart</button>
            </div>
        </div>
      ))}
    </div>
</div>
  )
}

export default Cart
