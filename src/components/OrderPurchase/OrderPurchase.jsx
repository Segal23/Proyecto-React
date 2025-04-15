import './OrderPurchase.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function OrderPurchase(){

    return(
        <Form className='container-formPurchase'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su dirección de correo electrónico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre y apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su número de teléfono" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Finalizar compra
            </Button>
        </Form>
    )
}

export default OrderPurchase