import React from 'react';
import {Button} from 'reactstrap';

import './itemDetail.css'

const ItemDetail = ({ products }) => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-5 imagenProd'>
          <img src={products.imgUrl} alt={products.name} style={{width:'70%'}}/>
        </div>
        <div className='col-lg-7'>
          <div className='row titleProd'>
            <h1>{products.name}</h1>
          </div>
          <div className='prodPago'>
            <h5>Precio Online: {products.precio}</h5>
            <h5>Precio de Lista: {products.precioList}</h5>
            <h6>12 cuotas sin interes al precio de lista</h6>
          </div>
          <div className='row infoProd'>
            <p>{products.info}</p>
          </div>
          <div className='row buttonsSeccion'>
            <Button>Comprar</Button>
            <Button>Agregar a Favoritos</Button>
          </div>
        </div>
      </div>
    </div>
    // <div className='detailSection'>

    //   <Card className='cardsDetails' style={{width:'100%',border:'none', flexGrow:0}}>
    //     <CardBody className='bodyDetails'>
    //       <CardTitle tag="h5">Precio Online: {products.precio}
    //       <div>Precio Lista: {products.precioList}</div>
    //       </CardTitle>
    //       <CardSubtitle className="mb-2 subtitleDetails" tag="h6">
    //         12 cuotas sin interes en precio de lista
    //       </CardSubtitle>
    //       <CardText>
    //         Los procesadores para juegos mejor valorados del mundo se llaman AMD Ryzen™ Serie 5000.
    //         Los más veloces del juego.
    //         Tecnologías de última generación.
    //       </CardText>
    //     </CardBody>
    //   </Card>
    // </div>
  );
};

export default ItemDetail;
