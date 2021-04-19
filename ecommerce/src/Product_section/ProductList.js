import React,{useEffect,useState} from 'react'


// import dummyProducts from '../dummy_data/dummy'
 import Product from './Product'
import './ProductList.css'

function Product_list() {
    const [products,setproducts]=useState([]);
    const [loading, setLoading]=useState(true);
    try{
        useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setproducts(json);
            })
            
        },[])
        
    }catch(error){
        console.log('error ',error);
        setLoading(false);
    }
     



    return (
        <div className='Home_page'> 
        {loading && <p>Loading....</p>}
        <ul className='container'>
            
            {
              
              products.map(product =>{
                          console.log(product)
                          return <Product key={product.id} product={product}/>
                        })
            }
             {
                //  console.log(products)
             }
 
        </ul>
        </div>
    )
}

export default Product_list
