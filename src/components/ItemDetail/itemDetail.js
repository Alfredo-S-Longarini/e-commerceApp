import React from 'react';
import ItemCount from '../ItemCount/itemCount';

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

          <div className='countSection'>
            <p>Stock: {products.stock}</p>
            <ItemCount key={products.id} prodId={products.id} stockProd={products.stock}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
