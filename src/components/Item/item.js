import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, Button, InputGroupText, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardFooter } from 'reactstrap';
import './item.css';

const Item = ({ producto, stockProducto }) => {

    let stock = stockProducto;

    const [counter, setCounter] = useState(0);
    const [stockMax, setStockMax] = useState(stock);
    const [buttonAdd, setButtonAdd] = useState(false);
    const [buttonRemove, setButtonRemove] = useState(false);

    let aLlevar = counter;

    const agregarProducto = () => {

        if (aLlevar >= 0 && stockMax > 0) {
            setStockMax(stockMax - 1);
            aLlevar++;
            setCounter(counter + 1);
            buttonEnabled();
        } else if (counter === stock) {
            buttonDisabled1();
        }

    }

    const quitarProducto = () => {

        if (aLlevar > 0) {
            setStockMax(stockMax + 1);
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

    return (
        <div style={{margin:'20px 20px', width:'20%'}}>  
            <Link to={`/item/${producto.id}`} style={{textDecoration:'none'}}>
                <Card className='cardProducto'>
                    <CardImg
                        className='imgProducto'
                        alt={producto.name}
                        src={producto.imgUrl}
                        top
                    />
                    <CardBody>

                        <CardTitle tag="h5">{producto.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">{producto.precio}</CardSubtitle>
                        <CardText> </CardText>

                    </CardBody>

                    <CardFooter className="text-muted">
                        Stock: {producto.stock}
                    </CardFooter>
                    
                </Card>
            </Link>
            <InputGroup >
                <Button disabled={buttonRemove} onClick={quitarProducto}>-</Button>
                <InputGroupText>{counter}</InputGroupText>
                <Button disabled={buttonAdd} onClick={agregarProducto}>+</Button>
            </InputGroup>
        </div>
    );
}

export default Item;