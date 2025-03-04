import './Navbar.css'
import logo from '../assets/gofix_logo.png';
import CartWidget from './CartWidget';

function Navbar(){
    return (
        <nav className='navbar'>
            <img className="img-logo" src={logo} alt="Logo Gofix" height={50} />
            <div className='container-navbar-ul'>
                <ul className='navbar-ul'>
                    <li className='ul-item'><a href="#">Celulares</a></li>
                    <li className='ul-item'><a href="#">Accesorios</a></li>
                    <li className='ul-item'><a href="#">Reparaciones</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar