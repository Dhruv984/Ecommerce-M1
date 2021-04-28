import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import {CartContext} from '../context/Context'
import SearchProducts from '../Searchproducts/SearchProducts';

import './MainNavigation.css'
export default function MainNavigation({inputValue,inputHandler}){
    return (
        <>
        <nav className='navbar'>
            <div className='navbar_logo'>ECOMMERCE</div>
            <SearchProducts inputValue={inputValue} inputHandler={inputHandler} />
            <div className='navbar_button'>
            
             <NavLink to='/'>
            <button className='btn' > Home</button>
            </NavLink>
            </div>
        </nav>
        <hr />
        </>
    )
}
