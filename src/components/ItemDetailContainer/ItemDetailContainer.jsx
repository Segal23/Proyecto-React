import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){
    const [itemDetail, setItemDetail] = useState([]);
    const {productId} = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(res => setItemDetail(res))
    },[productId]);

    return(
        <div>
            <ItemDetail item={itemDetail}/>
        </div>

    )
}

export default ItemDetailContainer