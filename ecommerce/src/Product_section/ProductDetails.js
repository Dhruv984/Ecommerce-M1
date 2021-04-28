import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Context'

import './ProductDetails.css'
import { DataContext } from '../context/Context'

function ProductDetails() {
    const cart = useContext(CartContext)

    const data = useContext(DataContext);
    const productId = useParams().pid;
    const product = data.products.find(p => {
        return productId == p.id;
    });
    console.log(product);


    return (
        <div className='product-details-container'>
            <div className='product-details-image'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='product-delails-content'>
                <h2 className='product-detail-content-title'>{product.title}</h2>
                <h3 className='product-detail-content-description'>{product.description}</h3>
                <p className='product-detail-content-price'>${product.price} USD</p>
                <button className='product-detail-content-button' onClick={
                    () => {
                        cart.addToCart(product);
                    }
                }>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetails
