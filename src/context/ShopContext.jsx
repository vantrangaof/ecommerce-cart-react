/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

// define all the states and logic for our project

export const ShopContext = createContext(null)

// init an empty cart array
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };

      const checkout = () => {
        setCartItems(getDefaultCart());
      };

      const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
      };

    console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}

export default ShopContextProvider