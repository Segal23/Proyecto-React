import './Cart.css';
import CartDetail from '../CartDetail/CartDetail';
import CartSummary from '../CartSummary/CartSummary';

function Cart(){

    return(
        <div className='cart-container'>
            <CartDetail></CartDetail>
            <CartSummary></CartSummary>
        </div>
    )
}

export default Cart