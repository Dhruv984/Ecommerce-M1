import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import {CartContext} from '../context/Context'
import SearchProducts from '../Searchproducts/SearchProducts';

import './MainNavigation.css'
export default function MainNavigation({ inputValue,inputHandler}) {
    const cart= useContext(CartContext);
    let Total_items_in_cart=0,i;
    for(i=0;i<cart.cartItems.length;i++){
        Total_items_in_cart = Total_items_in_cart+ cart.cartItems[i].qty;
    }
    return (
        <>
        <nav className='navbar'>
            <div className='navbar_logo'>ECOMMERCE</div>
            <SearchProducts inputValue={inputValue} inputHandler={inputHandler} />
            <div className='navbar_button'>
             <NavLink to='/cart'>
                <button className='btn' > Cart :{Total_items_in_cart} </button>
                </NavLink>
            
             {/* <NavLink to='/'>
            <button className='btn' > Home</button>
            </NavLink> */}
            </div>
        </nav>
        <hr />
        </>
    )
}
