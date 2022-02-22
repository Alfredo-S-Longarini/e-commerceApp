import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import './item.css';

import { CartContext } from '../../Context/CartContext';

const Item = ({ producto}) => {

    const {inTheCart} = useContext(CartContext);

    return (
        <div style={{margin:'20px 20px', width:'20%'}}>  
            <Link to={`/item/${producto.id}`} style={{textDecoration:'none'}}>
                <Card className='cardProducto'>
                    <CardImg
                        className='imgProducto'
                        alt={producto.name}
                        src={producto.img}
                        top
                    />
                    <CardBody>

                        <CardTitle tag="h5">{producto.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">${producto.precio}</CardSubtitle>
                        <CardText className='cartText'>{inTheCart(producto.id)}</CardText>

                    </CardBody>

                    <CardFooter className="text-muted">
                        Stock: {producto.stock}
                    </CardFooter>
                    
                </Card>
            </Link>
        </div>
    );
}

export default Item;