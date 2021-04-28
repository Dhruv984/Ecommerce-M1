import {createContext} from 'react';

export const CartContext= createContext({cartItems:[] , addToCart: ()=>{}, removeFromCart:() =>{}})

// export const SearchContext= createContext({searchedProduct:[] , submitHandler:()=>{}}) //recent
export const DataContext=createContext({products:[]});