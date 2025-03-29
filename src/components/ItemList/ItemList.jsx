import './ItemList.css';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemList({items}){
    console.log(items.thumbnail);
    return(
        <Container>
            <Row className="g-3">
                {items.map(item => <Item item={item} key={item.id}/>)}
            </Row>
        </Container>
    )
}

export default ItemList