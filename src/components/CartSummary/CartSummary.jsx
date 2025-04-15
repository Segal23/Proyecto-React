import './CartSummary.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigate, useNavigate } from 'react-router-dom';

function CartSummary(){

    const {cart, cartTotalAmount} = useContext(CartContext);

    const navigate = useNavigate();

    return(
        <div className='container-cartsummary'>
            <div className='container-title'>
                <p>Resumen de Compra</p>
            </div>
            <div className="summary-separator"></div>
            <div className='container-amount'>
                <p>Total</p>
                <p>${cartTotalAmount()}</p>
            </div>
            <div className='container-purchasebutton'>
                <button onClick={()=>navigate('/purchase')}>Enviar Orden</button>
            </div>
        </div>
    )
}

export default CartSummary