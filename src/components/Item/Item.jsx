import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetail from '../ItemDetail/ItemDetail';
import Col from 'react-bootstrap/Col';
import { Navigate, useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

function Item({item}){
    const navigate = useNavigate();
    return(
        <Col xl={3} lg={4} md={6} sm={12}>
            <Card>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                {/* <Button to={`/products/${item.id}`} variant="primary" as={NavLink}>Ver más...</Button> */}
                    <Button onClick={()=>navigate(`/products/${item.id}`)} variant="primary">Ver más...</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item