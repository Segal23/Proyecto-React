import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../firebase/db';
import { ToastContainer } from 'react-toastify';

function ItemDetailContainer(){
    const [itemDetail, setItemDetail] = useState([]);
    const {productId} = useParams();

    useEffect(() => {
        getProductById(productId)
        .then(data => setItemDetail(data))

    },[productId]);

    return(
        <div>
            <ItemDetail item={itemDetail}/>
            <ToastContainer toastClassName={'customToast'}/>
        </div>
    )
}

export default ItemDetailContainer