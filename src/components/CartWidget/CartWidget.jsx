import cartIcon from '../../assets/cart_icon.png'
import './CartWidget.css'

function CartWidget(){
    return (
        <div className="container-carrito-img-item">
            <div className="container-carrito-img">
                <img src={cartIcon} alt="Carrito de compras" height="35" width="35"/>
            </div>
            <div className="container-carrito-item">
                <p className="cant-items" id="items">4</p>
            </div>
        </div>
    )
}

export default CartWidget