import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

import './navBar.css';
import cartLogo from './shopping-cart.png';
import logo from './logoPag.png';
import { Link } from 'react-router-dom';

const navBar = () => {
    return (
        <div>
            <Navbar
                expand="md"
                light
            >   
                <Link to={'/'}>
                    <NavbarBrand>
                        <img className='logoImage' src={logo} alt='logo'></img>
                    </NavbarBrand>
                </Link>

                <NavbarToggler onClick={function noRefCheck() { }} />

                <Collapse navbar>

                    <Nav className="me-auto" navbar>

                        <NavItem className='itemsNav'>
                            <Link to={'/favoritos'} style={{textDecoration:'none'}}>
                                <NavLink>
                                    <h2>Favoritos</h2>
                                </NavLink>
                            </Link>
                        </NavItem>

                        <NavItem className='itemsNav'>
                            <Link to={'/compras'} style={{textDecoration:'none'}}>
                                <NavLink>
                                    <h2>Compras</h2>
                                </NavLink>
                            </Link>
                        </NavItem>

                    </Nav>

                    <NavbarText>
                        <button type='button'><img className='cartImage' src={cartLogo} alt='cart'></img></button>
                    </NavbarText>

                </Collapse>

            </Navbar>
        </div>
    );
};

export default navBar;