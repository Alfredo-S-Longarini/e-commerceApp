import React, { useContext} from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from 'reactstrap';

import './navBar.css';
import cartLogo from './shopping-cart.png';
import logo from './logoPag.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const NavBar = () => {

    const {total} = useContext(CartContext);

    // Función que se encarga de activar y mostrar el número equivalente a la cantidad de productos que hay en el carrito.
    const cartEnabled = () => {
        if(total>=1){
            return true;
        }else{
            return false;
        }
    }

    cartEnabled();

    return (
        <div>
            <Navbar
                expand="md"
                light
            >   
                <Link to={'/'}>
                        <img className='logoImage' src={logo} alt='logo'></img>
                </Link>

                <NavbarToggler onClick={function noRefCheck() { }} />

                <Collapse navbar>

                    <Nav className="me-auto" navbar>

                        <NavItem className='itemsNav'>
                            <Link to={'/favoritos'} style={{textDecoration:'none'}}>
                                    <h2>Favoritos</h2>
                            </Link>
                        </NavItem>

                        <NavItem className='itemsNav'>
                            <Link to={'/compras'} style={{textDecoration:'none'}}>
                                    <h2>Compras</h2>
                            </Link>
                        </NavItem>

                    </Nav>

                    <NavbarText>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <button type='button'><Link to={'/cart'}><img className='cartImage' src={cartLogo} alt='cart'></img></Link></button>
                            </div>
                            <div className='col-lg-6'>
                                <div className={cartEnabled() ? "prodsNumber" : "prodsNumberDisabled"}>
                                    <span>{total}</span>
                                </div>
                            </div>
                        </div>
                    </NavbarText>

                </Collapse>

            </Navbar>
        </div>
    );
};

export default NavBar;