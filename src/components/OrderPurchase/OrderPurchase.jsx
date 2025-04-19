import './OrderPurchase.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { sendOrder } from '../../firebase/db';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


function OrderPurchase(){
    const {cart, clearCart} = useContext(CartContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const nombre = form[0].value;
        const email = form[1].value;
        const telefono = form[2].value;
    
        const order = {
            user: {
                nombre: nombre,
                email: email,
                telefono: telefono
            },
            productos: cart,
            date: serverTimestamp()
        }

        let orderId = null;
        
        sendOrder(order)
        .then(data => {
        
            const MySwal = withReactContent(Swal)
        
            MySwal.fire({
                title: 'Compra finalizada',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ec128f',
                html: `Se ha generado su orden de compra. 
                El ID es <span style="color: #ec128f; font-weight: bold;">${data}</span>. <br/><br/>
                <i>Muchas gracias por su compra.</i>`,
                icon: 'success',
            })

            clearCart();
            navigate('/');

        })

        .catch(error => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: 'Error al generar la orden',
                confirmButtonText: 'Confirmar',
                confirmButtonColor: '#ec128f',
                text: 'Se ha producido un error al generar la orden de compra, por favor intente nuevamente',
                icon: 'error',
            })
        })
    }

    return(
        <Form className='container-formPurchase' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su dirección de correo electrónico" defaultValue={'seba.gallegos@gmail.com'}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre y apellido" defaultValue={'Sebastián Gallegos'}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su número de teléfono" defaultValue={'+54 11-6543-1234'}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Finalizar compra
            </Button>
        </Form>
    )
}

export default OrderPurchase