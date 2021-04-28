import React,{useState,useCallback,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom'
import './App.css';

import ProductList from './Product_section/ProductList';
import ProductDetails from './Product_section/ProductDetails';
import Cart from './Wishlist/Cart';

import {CartContext} from './context/Context'  
import {DataContext} from './context/Context'


import MainNavigation from './Navigation/MainNavigation';
import DisplayCategoryProduct from './Product_section/DisplayCategoryProduct';

import NavForCartPage from './Navigation/NavForCartPage'

function App() {
  
  //FETCHING DATA

  const [products,setproducts]=useState([]);
  const [loading,setLoading]=useState(true);
 
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
}

  //CART FEATURE
  const [cartItems,setCartItems]=useState([]);
 
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


 //Handling input
 const [inputValue,setInputvalue]=useState('');
 const inputHandler=(event)=>{
  setInputvalue(event.target.value);
}


 return (
   
    <DataContext.Provider value={{products:products}}>
    <CartContext.Provider value={{cartItems:cartItems , addToCart:addToCart, removeFromCart:removeFromCart}}>
    <Router>
      
      <Switch>
      <Route path='/' exact>
      <MainNavigation inputValue={inputValue} inputHandler={inputHandler}/>
         <ProductList loading={loading} setLoading={setLoading}/>
        </Route>
        <Route path='/:pid/productDetails' >
        <MainNavigation inputValue={inputValue} inputHandler={inputHandler}/>
          <ProductDetails/>
        </Route>
        <Route path='/category/:pid/productDetails' >
        <MainNavigation inputValue={inputValue} inputHandler={inputHandler}/>
          <ProductDetails/>
        </Route>
         <Route path='/cart'>
           <NavForCartPage/>
           <Cart/>
         </Route>
         <Route path='/category/:input' exact >
         <MainNavigation inputValue={inputValue} inputHandler={inputHandler}/>
           <DisplayCategoryProduct setInputvalue={setInputvalue}/>
         </Route>
      </Switch>
    </Router>
 
    </CartContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
