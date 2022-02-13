import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import ProdInCart from '../../components/ProdInCart/prodInCart'
import './cart.css'

import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cartProd, setCartProd, addProd, removeProd, clearCart} = useContext(CartContext);

    console.log(cartProd);

    return (
        <div className='container-fluid'>
            
            <div className='row viewCart'>
                <div className='titleCart col-lg-11'><h1>Carrito</h1></div>
                <div className='col-lg-1'><Button color="danger" onClick={()=>clearCart()}>Vaciar</Button></div>
            </div>

            <div>
                {
                    cartProd.map((prod, prodId) =>{
                        return(
                            <ProdInCart key={prodId} producto={prod} addProd={addProd} removeProd={removeProd}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Cart