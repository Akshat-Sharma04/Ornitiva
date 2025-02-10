import React, { createContext, useState, useEffect } from 'react';
import all_product from '../Components/Assets/all_product';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = { quantity: 0, selectedSize: null }; // Added size and quantity
    });
    return cart;
};

const HomeContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, selectedSize) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                quantity: (prev[itemId]?.quantity || 0) + 1,
                selectedSize: selectedSize || prev[itemId]?.selectedSize, // Keep size if already set
            }
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                quantity: Math.max((prev[itemId]?.quantity || 0) - 1, 0) // Prevent negative values
            }
        }));
    };

    // Debugging: Log cartItems after state updates
    useEffect(() => {
        console.log("Updated Cart:", cartItems);
    }, [cartItems]);

    const getTotalCartAmount = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item]; // Multiply price by quantity
            }
        }
    }

    return totalAmount; // Return the total amount
};

    
    
    
    const contextValue = { all_product, cartItems, setCartItems, addToCart, removeFromCart };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;
