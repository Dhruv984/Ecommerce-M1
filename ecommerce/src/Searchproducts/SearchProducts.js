import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './SearchProducts.css'

function SearchProducts({inputValue,inputHandler}) {
    
    
    return (
            <form className='input_form'>
            <div className='input_container'>
                <input className='input_form_input' placeholder='Search Products' value={inputValue} onChange={inputHandler} ></input>
                <Link to={`/category/${inputValue}`}><button className='input_form_button' type='submit' ></button> </Link>
               </div>
            </form>
            
        
    )
}

export default SearchProducts
