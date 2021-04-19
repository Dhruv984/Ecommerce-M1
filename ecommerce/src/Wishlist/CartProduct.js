import React,{useContext} from 'react'

import {CartContext} from '../context/Context'
function CartProduct({cartItem}) {
    const cart = useContext(CartContext);
    return (
        <div>
           <img  src={cartItem.thumbnailUrl}  alt={cartItem.id}/>
           <p>{cartItem.title}</p>
          
           <button onClick={()=>{
               cart.addToCart(cartItem)
               }}> increment </button>
           <p>{cartItem.qty}</p>
           <button onClick={()=>{cart.removeFromCart(cartItem)}}> decrement </button>
        </div>
    )
}

export default CartProduct
