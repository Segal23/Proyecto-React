import './CartContainer.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCart from '../EmptyCart/EmptyCart';
import Cart from '../Cart/Cart';

function CartContainer(){
    const {cart} = useContext(CartContext);
    
    return (
        cart.length === 0 ? <EmptyCart /> : <Cart/>
    )
}

export default CartContainer