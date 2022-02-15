import React from 'react'
import { Button, CardImg } from 'reactstrap';
import './prodInCart.css'

const prodInCart = ({producto, removeProd}) => {
  console.log(producto);

  return (
    <div className='container-fluid'>
        <div className='row productItem'>
            <div className='col-lg-3 imgCartProd'><CardImg src={producto.imgUrl}></CardImg></div>
            <div className='col-lg-4'><h4>{producto.name}</h4></div>
            <div className='col-lg-3'><h4>cantidad: {producto.cantidad}</h4></div>
            <div className='col-lg-2'><h4>${producto.precio}</h4></div>
            <div className='col-lg-2'><Button color="danger" outline onClick={()=>removeProd(producto.id)}>X</Button></div>
        </div>
    </div>
  )
}

export default prodInCart