import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    const addProduct = product => {
        if (cart.find(prod => prod.id === product.id)) {
            return true;
        } else {
            setCart([...cart, product]);
            return false;
        }
    }


    const getProductsQuantity = () => {
        const total = cart.map(prod => prod.cantidad).reduce((acc, current) => acc+current,0);
        return total;
    } 


    const updateCartQuantity = (updatedProduct) => {
        setCart(prevCart => 
                prevCart.map(prod => prod.id === updatedProduct.id ? updatedProduct : prod
                )
        );
    };


    const cartTotalAmount = () => cart.map(prod => prod.price*prod.cantidad)
                                    .reduce((acc, current) => acc+current, 0).toFixed(2);


    const removeProduct = (product) => {
        setCart(prevCart => prevCart.filter(prod => prod.id !== product.id));
    }


    const clearCart = () =>{
        setCart([]);
    }


    return(
        <CartContext.Provider value={{
                                        cart, 
                                        addProduct, 
                                        getProductsQuantity, 
                                        updateCartQuantity, 
                                        cartTotalAmount, 
                                        removeProduct,
                                        clearCart
                                    }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider