import { useState } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    
    const addProduct = product => {
        if (cart.find(prod => prod.id === product.id)) {
            setCart(
                cart.map(prod => {
                    if (prod.id === product.id) {
                        return {
                            ...prod,
                            cantidad: prod.cantidad + product.cantidad
                        };
                    } else {
                        return prod;
                    }
                })
            );
        } else {
            setCart([...cart, product]);
        }
    }

    const getProductsQuantity = () => {
        const total = cart.map(prod => prod.cantidad).reduce((acc, current) => acc+current,0)
        return(
            total
        )
    } 

    const updateCartQuantity = (updatedProduct) => {
        setCart(prevCart => 
                prevCart.map(prod => 
                            prod.id === updatedProduct.id ? updatedProduct : prod
                )
        );
    };

    const cartTotalAmount = () => cart.map(prod => prod.price*prod.cantidad)
                                        .reduce((acc, current) => acc+current, 0).toFixed(2)

    const removeProduct = (product) => {

        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: 'Remover Producto',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            confirmButtonColor: '#ec128f',
            cancelButtonText: 'Cancelar',
            text: 'Desea eliminar este producto del carrito de compras?',
            icon: 'question',
        }).then((result) => {
            if (result.isConfirmed) {
                setCart(prevCart => prevCart.filter(prod => prod.id !== product.id));
                MySwal.fire({title: 'Remover Producto',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#ec128f',
                    text: 'El producto seleccionado ha sido eliminado del carrito',
                    icon: 'success'})
            }
        })
    }


    return(
        <CartContext.Provider value={{cart, addProduct, getProductsQuantity, updateCartQuantity, cartTotalAmount, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider