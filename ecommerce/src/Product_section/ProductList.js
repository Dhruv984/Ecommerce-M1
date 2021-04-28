import React,{useContext} from 'react'

import Product from './Product'
import './ProductList.css'

import {DataContext} from '../context/Context'

function ProductList({loading}) {

    const data=useContext(DataContext);
     return (
        <div className='outer_container'> 
        <div className='loading'>{loading && <p >Loading....</p>}</div>
        
        <ul className='container'>
            
            {
                       data.products.map(product =>{
                          return <Product key={product.id} id={product.id} product={product}/>
                        })
                        
                        
                        
            }
 
        </ul>
        </div>
    )
}

export default ProductList
