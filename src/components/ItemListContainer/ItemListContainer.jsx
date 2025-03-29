import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer({itemListText}){
    const [itemList, setItemList] = useState([]);
    const {categoryId} = useParams();
    const urlProducts = 'https://dummyjson.com/products';
    const urlCategories = `https://dummyjson.com/products/category/${categoryId}`;

    useEffect(() => {
        fetch(categoryId ? urlCategories : urlProducts)
        .then(res => res.json())
        .then(res => setItemList(res.products))    
    },[categoryId])

    return(
        <div className='container-main'>
            {/* {items.map(item => <Item img={item.thumbnail} title={item.title} text={item.description} key={item.id}></Item>)} */}
            <ItemList items={itemList} />
        </div>    
    )
}

export default ItemListContainer