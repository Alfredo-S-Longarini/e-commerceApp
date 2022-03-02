import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter} from 'reactstrap';
import './itemsCompra.css'

const ItemsCompra = ({compraProd}) => {

    const prodCant = compraProd.values.items;

    return (
        <>
            <Card className='cardCompra'>
                <CardHeader>
                    {compraProd.id}
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">
                        Comprador: {compraProd.values.comprador.Name}
                    </CardTitle>
                    <CardText>
                        Tel.: {compraProd.values.comprador.Number}
                    </CardText>
                    <CardText>
                        Correo: {compraProd.values.comprador.Correo}
                    </CardText>
                    <Button>
                        Productos: {prodCant.length}
                    </Button>
                </CardBody>
                <CardFooter>
                    {compraProd.values.fecha}
                </CardFooter>
            </Card>
        </>
    )
}

export default ItemsCompra