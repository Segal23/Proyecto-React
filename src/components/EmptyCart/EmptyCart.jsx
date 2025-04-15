import './EmptyCart.css';
import emptycart from '../../assets/empty-cart.png';

function EmptyCart(){

    return (
            <div className='container-carrito-vacio'>
                <img src={emptycart} height={200} width={200}/>
                <p className="p-carrito-vacio" id="p-carrito-vacio">No hay productos agregados al carrito</p>
            </div>
    )
}

export default EmptyCart