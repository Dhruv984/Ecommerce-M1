import React,{useContext} from 'react'

import {CartContext} from '../context/Context'
import CartProduct from './CartProduct';
function Cart(){
    const cart = useContext(CartContext);
    return (
        <div>
            {
                cart.cartItems.map(cartItem=>{
                    return <CartProduct key= {cartItem.id} cartItem={cartItem}/>
                })
            }
        </div>
    )
}

export default Cart
