import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

import './navBar.css';
import cartLogo from './shopping-cart.png';
import logo from './logoPag.png';

const navBar = () => {
    return (
        <div>
            <Navbar
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    <img className='logoImage' src={logo} alt='logo'></img>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem className='itemsNav'>
                            <NavLink href="#">
                                <h2>Productos</h2>
                            </NavLink>
                        </NavItem>
                        <NavItem className='itemsNav'>
                            <NavLink href="#">
                                <h2>Favoritos</h2>
                            </NavLink>
                        </NavItem>
                        <NavItem className='itemsNav'>
                            <NavLink href="#">
                                <h2>Compras</h2>
                            </NavLink>
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