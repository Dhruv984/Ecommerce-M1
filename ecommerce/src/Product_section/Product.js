import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Product.css'
import { CartContext } from '../context/Context';

function Product({ product }) {
    const cart = useContext(CartContext)
    const [button, setButton] = useState(false);
    const [state,setState]=useState(false);
    
    useEffect(()=>{
        let existingCartproduct= cart.cartItems.find(p=>product.id === p.id);
        if(existingCartproduct){
            setButton(true);
        }
        else{
            setButton(false);
        }
    },[state])
    
    return (

        <div className='product'>
            <Link to={`${product.id}/productDetails`}>
                <img className='product_image' src={product.image} alt={product.title} />
                <div className='product_description'><h3 className='product_text'>{product.title}</h3></div>

            
            </Link>
            <div className='product-btn'>
            <button className='btn-1' onClick={() => {
                 setState(!state);
                cart.addToCart(product)
            }} >{!button?'Add to Cart':'Added...ADD MORE?'}</button>
            <button className='btn-2' disabled={!button} onClick={() => {
                 setState(!state)
                cart.removeFromCart(product)
            }} >Remove from cart</button>
            </div>
            
        </div >
        
    )
}

export default Product
