import React from 'react';
import { Button } from 'reactstrap';
import ItemCount from '../ItemCount/itemCount';
import { db } from '../../Firebase/firebaseConfig';
import { collection, addDoc} from 'firebase/firestore';

import './itemDetail.css'

const ItemDetail = ({ products }) => {
  // Funcion que se encarga de agregar un producto a favoritos asignandolo a la coleccion favoritos en la base de datos, pero verificando previamente si el prducto ya se encuantra o no.
  const addFavorite =(prod) =>{
    const docRef = addDoc(collection(db, 'favoritos'), {
      prod,
    });
    console.log(docRef);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-lg-5 imagenProd'>
          <img src={products.img} alt={products.name} style={{width:'70%'}}/>
        </div>

        <div className='col-lg-7'>

          <div className='row titleProd'>
            <h1>{products.name}</h1>
          </div>

          <div className='prodPago'>
            <h5>Precio Online: ${products.precio}</h5>
            <h5>Precio de Lista: ${products.precioLista}</h5>
            <h6>12 cuotas sin interes al precio de lista</h6>
          </div>

          <div className='row infoProd'>
            <p>{products.info}</p>
          </div>

          <div className='countSection'>
            <p>Stock: {products.stock}</p>
            <ItemCount key={products.id} prodId={products.id} stockProd={products.stock}/>
            <Button onClick={()=> addFavorite(products)}>Agregar a favoritos</Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
