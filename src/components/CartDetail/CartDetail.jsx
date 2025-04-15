import './CartDetail.css';
import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


function CartDetail(){

    const { cart, updateCartQuantity, removeProduct } = useContext(CartContext);
    
    return(
        <div className='cartdetail-container'>
            <div className='header-prods-container'>
                <p>Productos</p>
            </div>
            <div className='separator'></div>
            <div className='items-container'>
            {cart.map(prod =>  <div key={prod.id}>
                                    <div className='item'>
                                        <div className='img-producto'><img src={prod.thumbnail} alt={prod.title}/>
                                        </div>
                                        <div className='detalle-producto'>
                                            <p className='product-title'>{prod.title}</p>
                                            <p className='product-description'>{prod.description}</p>
                                            <button className='btn-remover' onClick={() => {removeProduct(prod)}}>Eliminar</button>
                                        </div>
                                        <div className='cantidad-producto'>
                                            <ItemCount addCartBtn={false} 
                                                        value={prod.cantidad} 
                                                        style={{height: '25px', fontSize: '14px', width: '35px'}}     
                                                        onCountChange={(newCount) => updateCartQuantity({...prod, cantidad: newCount})}>
                                            </ItemCount>
                                        </div>
                                        <div className='total-producto'>
                                            <p>${(prod.price*prod.cantidad).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className='separator'></div>
                                </div>
            )}
            </div>
        </div>
    )
}

export default CartDetail