import React, { createContext, useState } from 'react'
import { Products } from '../Products'

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
    const getDefaultCart = () =>{
        let cart = {}
        for(let i=1; i<Products.length + 1; i++){
            cart[i] = 0;
        }
        return cart
    }
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) =>{
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateProductAmount = (newAmount, itemId) =>{
        setCartItems(prev => ({...prev, [itemId]: newAmount}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateProductAmount}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
