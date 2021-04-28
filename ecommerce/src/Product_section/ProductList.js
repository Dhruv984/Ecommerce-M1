import React,{useContext,useState,useEffect} from 'react'

import Product from './Product'
import './ProductList.css'

import {DataContext} from '../context/Context'

function ProductList({loading}) {

    const data=useContext(DataContext);
    // const [products,setproducts]=useState([]);
    // const [loading, setLoading]=useState(true);
//   useEffect(()=>{
//     if(data.products){
//         setLoading(false);
//         console.log(data.products)
//      }
//   },[data])
    

    // try{
    //     useEffect(()=>{
    //         fetch('https://fakestoreapi.com/products')
    //         .then(response => response.json())
    //         .then(json => {
    //             setLoading(false);
    //             setproducts(json); 
    //         })
            
    //     },[])
        
    // }catch(error){
    //     console.log('error ',error);
    //     setLoading(false);
    // }
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
