import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'

import './Product.css'
import {CartContext} from '../context/Context'
// import AddtoWishlist from './AddtoWishlist';

function Product({product}) {
    const cart = useContext(CartContext)
    const [button , setButton]=  useState(false);
    return (
        <div className='product'>
        <Link to= {`${product.id}/productDetails`}>
        <div className='product_container'>
            <div className='product_container_content'>
               <img className='product_image' src={product.image} alt={product.title} />
               <p className='text'>
               {/* <h2>{product.name}</h2> */}
               <h3>{product.title}</h3>
               </p>
            </div>
            
        </div>
        </Link>
        <button onClick={()=>{
            setButton(true);
            cart.addToCart(product)}} >Add to Cart</button>
        <button disabled={!button} onClick={()=>{
            setButton(false)
            cart.removeFromCart(product)}} >Remove from cart</button>
        </div>
    )
}

export default Product
