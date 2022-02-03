import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import './itemDetail.css'

const ItemDetail = ({ products }) => {
  return (
    <Card className='cardsDetails'>
      <CardBody className='bodyDetails'>
        <CardTitle tag="h5">Precio Online: {products.precio}
        <div>Precio Lista: {products.precioList}</div>
        </CardTitle>
        <CardSubtitle className="mb-2 subtitleDetails" tag="h6">
          12 cuotas sin interes en precio de lista
        </CardSubtitle>
        <CardText>
          Los procesadores para juegos mejor valorados del mundo1 se llaman AMD Ryzen™ Serie 5000.
          Los más veloces del juego.
          Tecnologías de última generación.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ItemDetail;
