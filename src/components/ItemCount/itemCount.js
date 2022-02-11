import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, Button, InputGroupText } from 'reactstrap';
import './itemCount.css';

const ItemCount = ({prodName, stockProd, addFunction}) => {

    const [counter, setCounter] = useState(0);
    const [buttonAdd, setButtonAdd] = useState(false);
    const [buttonRemove, setButtonRemove] = useState(false);
    const [maxStock, setMaxStock] = useState(stockProd);
    const [countEnabled, setCountEnabled] = useState('');

    let aLlevar = counter;

    const disableCount = () => {
        setCountEnabled('none');
    }

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

    const quitarProducto = () => {

        if (aLlevar > 0) {
            setMaxStock(maxStock + 1);
            aLlevar--;
            setCounter(counter - 1);
            buttonEnabled1();
        } else {
            buttonDisabled();
        }
    }

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

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <div onSubmit={onSubmit}>

                <div style={{display:{countEnabled}}}>
                    <div className='stockButtons' style={{display:'flex'}}>
                        <Button type='submit' disabled={buttonRemove} onClick={quitarProducto}>-</Button>
                            <InputGroupText>{counter}</InputGroupText>
                        <Button type='submit' disabled={buttonAdd} onClick={agregarProducto}>+</Button>
                    </div>
                </div>

                <div className='purchaseButtons'>
                    <Button type='button' onClick={()=>addFunction(prodName, counter)}>Agregar al carro</Button>

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
