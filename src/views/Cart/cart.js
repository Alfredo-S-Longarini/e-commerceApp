import React, { useContext} from 'react'
import { Button } from 'reactstrap';
import ProdInCart from '../../components/ProdInCart/prodInCart'
import EmptyCart from './EmptyCart/emptyCart'
import PurchaseForm from '../../components/PurchaseForm/purchaseForm';
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

            <div className='row'>
                <div className='col-lg-7'>

                {cartVacio() ?
                    cartProd.map((prod, prodId) =>{
                        return(
                            <div className='row'>
                                <ProdInCart key={prodId.id} producto={prod} removeProd={removeProd}/>
                            </div>
                        );
                    }) : <EmptyCart/>}

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