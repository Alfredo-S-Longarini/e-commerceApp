import React from 'react'
import { Link } from 'react-router-dom'
import CarritoVacio from '../EmptyCart/carritoVacio.png'
import './emptyCart.css'

const EmptyCart = () => {
  return (
    <div className='container-fluid carroVacio'>
        <div className='sinProductos'>
            <img src={CarritoVacio} alt='carritoVacio'></img>
            <h3>El carrito se encuentra vacío</h3>
        </div>
        <Link to={'/'} style={{textDecoration:'none', marginTop:'40px'}}>Agregar Productos</Link>
    </div>
  )
}

export default EmptyCart