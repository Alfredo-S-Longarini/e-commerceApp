import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import './navCategory.css'

const NavCategory = () => {

    return (
        <div className='category'>

            <div className='navCategory'>
                <Nav vertical>

                    <NavItem>
                        <NavLink>
                            <Link to={'/category/procesadores'}>
                                Procesadores
                            </Link>
                        </NavLink>
                    </NavItem>

                    <NavItem>

                        <NavLink>
                            <Link to='/category/placasDeVideo'>
                                Placas de video
                            </Link>
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink>
                            <Link to='/category/teclados'>
                                Teclados
                            </Link>
                        </NavLink>
                    </NavItem>

                </Nav>
            </div>

        </div>);
};

export default NavCategory;
