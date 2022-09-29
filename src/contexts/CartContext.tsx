import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity : number;
}

interface CartContextType {
    cartItens: CartItem[];
    cartQuantity: number;
    cartItensTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (
        cartItemId: number, 
        type: "increase" | "decrease"
        ) => void;
        removeCartItem: (CartItemId: number) => void;
        cleanCart: () => void;
}

interface CartContentProviderProps {
    children:ReactNode;
}

const COFFEE_ITENS_STORGE_KEY = "coffeeDelivery:cartItens";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContentProviderProps) {
    const [cartItens, setCartItens]= useState<CartItem[]>(() => {
        const storedCartItens = localStorage.getItem(COFFEE_ITENS_STORGE_KEY);
        if(storedCartItens){
            return JSON.parse(storedCartItens);
        }
        return [];
    });

    const cartQuantity = cartItens.length;

    const  cartItensTotal = cartItens.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);

    function addCoffeeToCart(coffee: CartItem){
        const coffeeAlreadyExitsInCart = cartItens.findIndex(
            (cartItem) => cartItem.id === coffee.id
         );

         const newCart = produce(cartItens, (draft)=>{
            if(coffeeAlreadyExitsInCart < 0){
                draft.push(coffee);
            }else{
                draft[coffeeAlreadyExitsInCart].quantity += coffee.quantity;
            }
         });
         setCartItens(newCart);
    }

    function changeCartItemQuantity(
        cartItemId: number, 
        type: 'increase' | 'decrease'
        ) {
        const newCart = produce(cartItens, (draft)=>{
            const coffeeExistesInCart = cartItens.findIndex(
            (cartItem) => cartItem.id === cartItemId
            );

            if(coffeeExistesInCart >= 0) {
                const item = draft[coffeeExistesInCart];
                draft[coffeeExistesInCart].quantity = 
                type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
        });
        setCartItens(newCart);
    }

    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItens, draft => {
            const coffeeExitsInCart = cartItens.findIndex(
                (cartItem) => cartItem.id === cartItemId
             );

             if(coffeeExitsInCart >= 0){
                draft.splice(coffeeExitsInCart, 1);
             }
        });
        setCartItens(newCart);
    }

    function cleanCart(){
        setCartItens([])
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITENS_STORGE_KEY,JSON.stringify(cartItens));
    }, [cartItens]);

    return(
        <CartContext.Provider value={{
             cartItens,
             cartQuantity,
             cartItensTotal,
             addCoffeeToCart,
             changeCartItemQuantity,
             removeCartItem,
             cleanCart  
             }}
             >
            {children}
        </CartContext.Provider>
    );
}