import './Navbar.css'
import logo from '../../assets/gofix_logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavBar(){
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(res => setCategories(res));
    },[])

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid className="navbar-container"> 
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            />{' '}
                    </Navbar.Brand>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={NavLink}>Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {categories.map(cat => <NavDropdown.Item 
                                                        to={`/category/${cat}`} 
                                                        key={cat} as={NavLink}
                                                        >{cat}
                                                    </NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar