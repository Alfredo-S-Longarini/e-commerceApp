import React, { useContext} from 'react'
import { Button } from 'reactstrap';
import ProdInCart from '../../components/ProdInCart/prodInCart'
import EmptyCart from './EmptyCart/emptyCart'
import PurchaseForm from '../../components/PurchaseForm/purchaseForm';
import './cart.css'

import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cartProd, clearCart, totalPrice} = useContext(CartContext);

    //Función que se encarga de mostrar un mensaje si el carrito esta vacio o los productos que se hayan agregado al mismo.
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

            <div className='row'>
                <div className='col-lg-7'>
                    <div className='row'>
                        {cartVacio() ?
                            cartProd.map((prod) =>{
                                return(
                                    <ProdInCart key={prod.id} producto={prod}/>
                                );
                            }) : <EmptyCart/>}
                    </div>

                {cartVacio() ? <div className='row priceSeccion'> <h4>Total: ${totalPrice}</h4> </div> : <></>}

                </div >
                
                <div className='col-lg-5'>

                    {cartVacio() ? <PurchaseForm/> : <></>}

                </div>
            </div>
        </div>
    )
}

export default Cart