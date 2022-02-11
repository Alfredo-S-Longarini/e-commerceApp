import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import './navCategory.css'

const NavCategory = () => {

    return (
        <div className='category'>

            <div className='navCategory'>
                <Nav vertical>

                    <NavItem className='categoryBar'>
                            <Link to={'/category/procesadores'}>
                                Procesadores
                            </Link>
                    </NavItem>

                    <NavItem className='categoryBar'>
                            <Link to='/category/placasDeVideo'>
                                Placas de video
                            </Link>
                    </NavItem>

                    <NavItem className='categoryBar'>
                            <Link to='/category/teclados'>
                                Teclados
                            </Link>
                    </NavItem>

                </Nav>
            </div>

        </div>);
};

export default NavCategory;
