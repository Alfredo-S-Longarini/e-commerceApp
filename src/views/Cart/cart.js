import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import ProdInCart from '../../components/ProdInCart/prodInCart'
import EmptyCart from './EmptyCart/emptyCart'
import './cart.css'

import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cartProd, removeProd, clearCart, totalPrice} = useContext(CartContext);

    console.log(cartProd);

    const cartVacio = () =>{
        if(cartProd.length>0){
            return true;
        }else{
            return false;
        }
    }

    return (
        <div className='container-fluid'>
            
            <div className='row viewCart'>
                <div className='titleCart col-lg-11'><h1>Carrito</h1></div>
                <div className='col-lg-1'><Button color="danger" onClick={()=>clearCart()}>Vaciar</Button></div>
            </div>

            <div>
                {cartVacio() ? 
                    cartProd.map((prod, prodId) =>{
                        return(
                            <ProdInCart key={prodId} producto={prod} removeProd={removeProd}/>
                        );
                    }) : <EmptyCart/>}
            </div>

            {cartVacio() ? <div className='row priceSeccion'>
                                <h4>Total: ${totalPrice}</h4>
                            </div> : <></>}
        </div>
    )
}

export default Cart