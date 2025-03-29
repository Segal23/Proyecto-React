import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemDetail({item}){
    
    return(
    <Container fluid>
        <Card className='item_detail mx-auto'>
        <Card.Img variant="top" src={item.thumbnail}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Container className='container-addcarrito'>
                <ItemCount className='itemcount'/>
                <Button variant="primary" className='btn-addcarrito'>Agregar al carrito</Button>
            </Container>
        </Card.Body>
        </Card>

    </Container>
    )
}

export default ItemDetail