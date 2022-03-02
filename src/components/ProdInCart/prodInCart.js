import React, { useContext } from 'react'
import { Button, CardImg } from 'reactstrap';
import './prodInCart.css'
import { CartContext } from '../../Context/CartContext';

const ProdInCart = ({producto}) => {

  const {removeProd} = useContext(CartContext);

  return (
    <div className='container-fluid'>
        <div className='row productItem'>
            <div className='col-lg-3 imgCartProd'><CardImg src={producto.img}></CardImg></div>
            <div className='col-lg-4'><h4>{producto.name}</h4></div>
            <div className='col-lg-3'><h4>cantidad: {producto.cantidad}</h4></div>
            <div className='col-lg-2'><h4>${producto.precio}</h4></div>
            <div className='col-lg-1'><Button color="danger" outline onClick={()=>removeProd(producto.id, producto.cantidad)}>X</Button></div>
        </div>
    </div>
  )
}

export default ProdInCart