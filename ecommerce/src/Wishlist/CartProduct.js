import React, { useContext } from 'react'

import { CartContext } from '../context/Context'
import './CartProduct.css'
function CartProduct({ cartItem }) {
    const cart = useContext(CartContext);
    return (
        <div className='cart-container'>
            <img src={cartItem.image} alt={cartItem.title} />
            <div className='cart-content'>
                <p>{cartItem.title}</p>
                <p>{cartItem.price}$</p>
                <div className='cart-buttons'>
                    <button className='cart-btn-1 button' onClick={() => { cart.removeFromCart(cartItem) }}> Decrease qty </button>
                    <p>{cartItem.qty}</p>

                    <button className='cart-btn-2 button' onClick={() => {
                        cart.addToCart(cartItem)
                    }}> Increase qty </button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
