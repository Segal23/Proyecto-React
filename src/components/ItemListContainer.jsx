import './ItemListContainer.css'

function ItemListContainer({itemListText}){
    return(
        <div className='container-main'>
            <p>{itemListText}</p>
        </div>
        
    )
}

export default ItemListContainer