import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, InputGroupText } from 'reactstrap';
import './itemCount.css';
import {CartContext} from '../../Context/CartContext'

const ItemCount = ({prodId, stockProd}) => {

    const {addProd} = useContext(CartContext);

    const [counter, setCounter] = useState(1);
    const [buttonAdd, setButtonAdd] = useState(false);
    const [buttonRemove, setButtonRemove] = useState(false);
    const [maxStock, setMaxStock] = useState(stockProd);

    let aLlevar = counter;

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------
    // Funciones que son responsables de sumar y restar la cantidad del producto que quieras agregar al carrito.

    // Suma cantidad.
    const agregarProducto = () => {

        if (aLlevar >= 0 && maxStock > 0) {
            setMaxStock(maxStock - 1);
            aLlevar++;
            setCounter(counter + 1);
            buttonEnabled();
        } else if (counter === stockProd) {
            buttonDisabled1();
        }

    }

    //Resta cantidad
    const quitarProducto = () => { 

        if (aLlevar > 1) {
            setMaxStock(maxStock + 1);
            aLlevar--;
            setCounter(counter - 1);
            buttonEnabled1();
        } else {
            buttonDisabled();
        }
    }

    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    //Funciones que se encargan de desabilitar los botones + y - para vitar cantidades negativas o que superen un stock.

    const buttonDisabled = () => {
        setButtonRemove(true);
    }

    const buttonEnabled = () => {
        setButtonRemove(false);
    }

    const buttonDisabled1 = () => {
        setButtonAdd(true);
    }

    const buttonEnabled1 = () => {
        setButtonAdd(false);
    }
    
    // -----------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div onSubmit={onSubmit}>
                <div className='stockButtons' style={{display:'flex'}}>
                    <Button type='submit' disabled={buttonRemove} onClick={quitarProducto}>-</Button>
                        <InputGroupText>{counter}</InputGroupText>
                    <Button type='submit' disabled={buttonAdd} onClick={agregarProducto}>+</Button>
                </div>

                <div className='purchaseButtons'>
                    <Button type='button' onClick={()=>addProd(prodId, counter)}>Agregar al carro</Button>

                    <Button>
                        <Link to={'/cart'}>
                            Terminar Compra
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ItemCount;
