import React from 'react'
import {NavLink} from 'react-router-dom'

import './MainNavigation.css'
export default function MainNavigation({cartPage,pageHandler}) {
    return (
        <navbar className='navbar'>
            <div className='navbar_logo'>ECOMMERCE</div>
            <div className='navbar_button'>
            {!cartPage && <NavLink to='/cart'>
                <button className='btn' onClick={pageHandler}> Cart</button>
                </NavLink>}
            
            {cartPage && <NavLink to='/'>
            <button className='btn' onClick={pageHandler}> Home</button>
            </NavLink>}
            </div>
        </navbar>
    )
}
