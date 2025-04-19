import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductByCategory } from '../../firebase/db';


function ItemListContainer(){
    const [itemList, setItemList] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId !== undefined) {
            getProductByCategory(categoryId)
            .then(data => setItemList(data)) 
        }else {
            getProducts()
            .then(data => setItemList(data)) 
        }        
    },[categoryId])

    return(
        <div className='container-main'>
            <ItemList items={itemList} />
        </div>    
    )
}

export default ItemListContainer