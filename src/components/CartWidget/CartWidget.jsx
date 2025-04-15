import cartIcon from '../../assets/cart_icon.png';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function CartWidget(){
    const { getProductsQuantity } = useContext(CartContext);

    const navigate = useNavigate();

    return (
            <div className="container-carrito-img-item" onClick={()=>navigate('/Cart')}>
                <div className="container-carrito-img">
                    <img src={cartIcon} alt="Carrito de compras" height="35" width="35"/>
                </div>
                <div className="container-carrito-item">
                    <p className="cant-items" id="items">{getProductsQuantity()}</p>
                </div>
            </div>
    )
}

export default CartWidget