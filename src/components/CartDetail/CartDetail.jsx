import './CartDetail.css';
import { CartContext } from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { formatoMoneda } from '../../utils/utilities';

function CartDetail(){

    const { cart, updateCartQuantity, removeProduct } = useContext(CartContext);

    const removeProd = (product) => {
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
                    removeProduct(product)
                    MySwal.fire({title: 'Remover Producto',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#ec128f',
                        text: 'El producto seleccionado ha sido eliminado del carrito',
                        icon: 'success'
                    })
                }
            })
    }
    
    
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
                                            <button className='btn-remover' onClick={() => {removeProd(prod)}}>Eliminar</button>
                                        </div>
                                        <div className='cantidad-producto'>
                                            <ItemCount addCartBtn={false} 
                                                        value={prod.cantidad} 
                                                        style={{height: '25px', fontSize: '14px', width: '35px'}}     
                                                        onCountChange={(newCount) => updateCartQuantity({...prod, cantidad: newCount})}>
                                            </ItemCount>
                                        </div>
                                        <div className='total-producto'>
                                            <p>{formatoMoneda('ARS', (prod.price*prod.cantidad).toFixed(2))}</p>
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