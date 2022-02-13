import React, { useContext, useEffect, useState} from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText } from 'reactstrap';
import { CartContext } from '../../Context/CartContext';

import './navBar.css';
import cartLogo from './shopping-cart.png';
import logo from './logoPag.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const {totalProducts} = useContext(CartContext);

    console.log("Productos totales: "+totalProducts());

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
                            <div className='col-lg-6 prodsNumber'>
                                <span>{totalProducts()}</span>
                            </div>
                        </div>
                    </NavbarText>

                </Collapse>

            </Navbar>
        </div>
    );
};

export default NavBar;