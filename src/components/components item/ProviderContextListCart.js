import { useState } from "react";
import { createContext } from "react";
import Products from "../../Products"

export const listCartContext = createContext(null);

const ProviderContextListCart = ( {children} ) => {

    const [listCart, setListCart] = useState([]);

    const addProduct = (id) => {
        const productAdd = Products.find(product => product.id === id) 
        
        const productsToMaintain = listCart.filter(product => product.id !== id)

        let add = true;
        for(let product of listCart) {  
            if(product.id === id){
                let quantity = product.quantity;

                if(quantity < productAdd.stock){
                    const newQuantity = {...product, quantity: quantity + 1}
                    setListCart( [...productsToMaintain, newQuantity] )
                }

                add = false;
                break
            }  
        }

        add && setListCart( [...productsToMaintain, {...productAdd, quantity: 1}] )
    }

    const clearCart = () => {
        setListCart([]);
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id)
        setListCart(updateList);
    }
    
    return (
        <listCartContext.Provider value={ {removeFromCart ,listCart ,addProduct, clearCart} }>
            {children}
        </listCartContext.Provider> 
    );
}

export default ProviderContextListCart