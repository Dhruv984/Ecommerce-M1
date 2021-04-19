import React,{useState,useCallback} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';

import ProductList from './Product_section/ProductList';
import ProductDetails from './Product_section/ProductDetails';
import Cart from './Wishlist/Cart';

import {CartContext} from './context/Context'
import MainNavigation from './Navigation/MainNavigation';


function App() {
  const [cartItems,setCartItems]=useState([]);
  const [cartPage, setCartpage]=useState(false);
  const pageHandler=()=>{
    setCartpage(!cartPage);
  }

  const addToCart=useCallback((product)=>{  //to add items into the cart
     const productExists= cartItems.find(cartItem=> cartItem.id===product.id);
     if(productExists){
         setCartItems(cartItems.map(cartItem=> cartItem.id===product.id?{...productExists, qty:productExists.qty+1}: cartItem))
     }else{
      setCartItems([...cartItems,{...product, qty:1}])
     }
     

     console.log(cartItems);
  },[cartItems])
 
 
  const removeFromCart=(product)=>{  
    const productExists= cartItems.find(cartItem=> cartItem.id===product.id);
    if(productExists.qty === 1){
      setCartItems(cartItems.filter(cartItem=> cartItem.id !== product.id))
    }else
    {setCartItems(cartItems.map(cartItem=> cartItem.id===product.id?{...productExists, qty:productExists.qty-1}: cartItem))
    }
 }
  return (
    <CartContext.Provider value={{cartItems:cartItems , addToCart:addToCart, removeFromCart:removeFromCart}}>
    <Router>
      <MainNavigation cartPage={cartPage} pageHandler={pageHandler}/>
      <Switch>
        <Route path='/' exact>
         <ProductList/>
        </Route>
        <Route path='/:pid/productDetails' exact>
          <ProductDetails/>
        </Route>
         <Route path='/cart'>
           <Cart/>
         </Route>
      </Switch>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
