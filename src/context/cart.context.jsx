import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
    clearItemFromCart: () => {},
    cartTotal: 0,
});

const INITIAL_STATE = {
    isCartOpen: true,
    cartItems:[],
    cartCount:0,
    cartTotal:0
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}
const cartReducer = (state, action) =>{
    const {type, payload} = action;
    switch (type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen:payload
            }
        default:
            throw new Error(`Unhandled type ${type} in Reducer`);
    }
}

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
   const[state, dispach] = useReducer(cartReducer, INITIAL_STATE);
   const{cartItems, cartCount, cartTotal, isCartOpen } = state;
    
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total,cartItem) =>  total + cartItem.quantity,0);
        const newCartTotal = newCartItems.reduce((total,cartItem) =>  total + cartItem.quantity * cartItem.price ,0);
        dispach(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount} )
            )

    }

    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItems(cartItems,productToAdd);
        updateCartItemReducer(newCartItems);
    }

    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItems(cartItems,productToRemove);
        updateCartItemReducer(newCartItems);
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems,productToClear);
        updateCartItemReducer(newCartItems);
    }

    const setIsCartOpen = (bool)=>{
        dispach(
            createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
            )
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemFromCart, cartItems, cartCount, cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}