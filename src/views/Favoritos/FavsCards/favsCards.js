import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../../../Firebase/firebaseConfig'
import { Link } from 'react-router-dom';

const FavsCards = ({prodFav}) => {
    const producto = prodFav.prod

    // Función que se encarga de eliminar un producto de favoritos.
    const deleteFav=async(idProd)=>{
        console.log(idProd);
        await deleteDoc(doc(db, "favoritos", idProd));
    }

    return (
        <div style={{ margin: '20px 20px', width: '20%' }}>
                <Card className='cardProducto'>
                    <Link to={`/item/${producto.id}`} style={{textDecoration:'none'}}>
                        <CardImg
                            className='imgProducto'
                            alt={producto.name}
                            src={producto.img}
                            top
                        />
                    </Link>
                    <CardBody>

                        <CardTitle tag="h5">{producto.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">${producto.precio}</CardSubtitle>
                        <Button onClick={()=>deleteFav(prodFav.id)}>Eliminar de Fav.</Button>
                    </CardBody>

                    <CardFooter className="text-muted">
                        Stock: {producto.stock}
                    </CardFooter>

                </Card>
        </div>
    )
}

export default FavsCards