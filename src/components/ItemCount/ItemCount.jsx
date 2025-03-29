import './ItemCount.css'

function ItemCount({}){
    return(
        <div className='container-itemcount'>
            <button className='btn-down'>-</button>
            <input type="text" defaultValue={0}/>
            <button className='btn-up'>+</button>
        </div>
        
    )
}

export default ItemCount