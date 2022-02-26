import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter} from 'reactstrap';
import './itemsCompra.css'

const ItemsCompra = (compra) => {

    const card = compra.compra.values;
    const prods = card.items

    return (
        <>
            <Card className='cardCompra'>
                <CardHeader>
                    {compra.compra.id}
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        Comprador: {card.comprador.Name}
                    </CardTitle>
                    <CardText>
                        Tel.: {card.comprador.Number}
                    </CardText>
                    <CardText>
                        Correo: {card.comprador.Correo}
                    </CardText>
                    <Button>
                        Productos: {prods.length}
                    </Button>
                </CardBody>
                <CardFooter>
                    {card.fecha}
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemsCompra