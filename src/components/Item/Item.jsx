import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Navigate, useNavigate } from 'react-router-dom';

function Item({item}){
    const navigate = useNavigate();
    return(
        <Col xl={3} lg={4} md={6} sm={12} className='card-col'>
            <Card>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                    <Button onClick={()=>navigate(`/products/${item.id}`)} variant="primary">Ver más...</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item