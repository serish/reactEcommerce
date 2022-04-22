import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
    clearItemFromCart: () => {},
    cartTotal: 0,
});

const addCartItems = (cartItems, productToAdd)=> {
    //find if cart contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    //if found increment quantity
    if(existingCartItem){
        return cartItems.map(
            (cartItem) =>
            cartItem.id === productToAdd.id ? {...cartItem, quantity:cartItem.quantity + 1} : cartItem
            );
    }
    //else insert it to cart items
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItems = (cartItems, productToRemove) => {
    //find current cartItem
    const currentCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    if(currentCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== currentCartItem.id);
    }else{
        return cartItems.map(cartItem => cartItem.id === currentCartItem.id ? {...cartItem, quantity:cartItem.quantity - 1}:cartItem);
    }
}

const clearCartItem = (cartItems, productToClear) => cartItems.filter(cartItem => cartItem.id !== productToClear.id);


export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);
    const[cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem) =>  total + cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem) =>  total + cartItem.quantity * cartItem.price ,0);
        setCartTotal(newCartTotal);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems,productToAdd));
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItems(cartItems,productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems,productToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}