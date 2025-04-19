import './ItemCount.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Slide, toast} from 'react-toastify';

function ItemCount({product = {}, addCartBtn = true, style = {}, value = 1, onCountChange}){

    const {addProduct} = useContext(CartContext);
    const [count, setCount] = useState(value);

    const handleCountDown = () => {
        if (count > 1) {
            setCount(count - 1);
            onCountChange?.(count - 1);
        }
    };

    const handleCountUp = () => {
        setCount(count +1);
        onCountChange?.(count +1);} ;
    
    const handleAddProduct = () => {
        const alreadyInCart = addProduct({...product, cantidad: count})

        if (alreadyInCart){
            const customId = "custom-id";
            toast.error('El producto ya se encuentra en el carrito',{
                            position: 'bottom-center',
                            autoClose: 1000,
                            hideProgressBar: true,
                            transition: Slide,
                            closeOnClick: true,
                            toastId: customId,
                        });
        }
    }


    return(
        <div className='container-itemcount'>
            <button className='btn-down' onClick={handleCountDown} style={style}>-</button>
            <input type="text" value={count} readOnly style={style}/>
            <button className='btn-up' onClick={handleCountUp} style={style}>+</button>
            {addCartBtn && (<button  className='btn-addcarrito' onClick={handleAddProduct} style={style}>Agregar al carrito</button>)}
        </div>
        
    )
}

export default ItemCount