import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import './ProductList.css'

function DisplayCategoryProduct({setInputvalue}) {
    const category = useParams().input;
    const [searchedProducts, setSearchedproducts] = useState([]);
    const [loading, setLoading] = useState(true);
        try{
            useEffect(()=>{
                fetch(`https://fakestoreapi.com/products/category/${category.toLowerCase()}`)
                .then(response => response.json())
                .then(json => {
                    setLoading(false);
                    setSearchedproducts(json);
                    console.log('data fetched');
                })
                 setInputvalue('')   
            },[category])
    }catch(error){
        setLoading(false);
        console.log('error',error)
    }

    return (
        <div className='outer_container'>
            {loading && <p>Loading....</p>}
            <ul className='container'>
                {searchedProducts.map(product => {
                    return <Product key={product.id} product={product} />
                })}

            </ul>
           
        </div>
    )
}

export default DisplayCategoryProduct
