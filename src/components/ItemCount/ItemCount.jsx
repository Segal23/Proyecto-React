import './ItemCount.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

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
    
    const handleAddProduct = () => addProduct({...product, cantidad: count})

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