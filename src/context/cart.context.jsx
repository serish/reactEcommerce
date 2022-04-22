import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const[cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem) =>  total + cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems,productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}