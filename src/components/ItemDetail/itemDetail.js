import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import ItemCount from '../ItemCount/itemCount';
import { db } from '../../Firebase/firebaseConfig';
import { collection, query, addDoc, getDocs } from 'firebase/firestore';

import './itemDetail.css'

const ItemDetail = ({ products }) => {
  // Funcion que se encarga de agregar un producto a favoritos asignandolo a la coleccion favoritos en la base de datos, pero verificando previamente si el prducto ya se encuantra o no.
  const [favs, setFavs]=useState([]);
  
  useEffect(()=>{
    const listFav = async () => {
            const q = query (collection(db, 'favoritos'));
            let docs = [];
            const querySnapshot = await getDocs(q);
      
            querySnapshot.forEach((doc) => {
              docs.push({...doc.data()});
            });
      
            setFavs(docs);
          }
      
        listFav();
  }, [])

  const addFavorite =(prod) =>{

    if(favs.length===0){
      const docRef = addDoc(collection(db, 'favoritos'), {
        prod,
      });

    }else{

      for(let i=0; i<favs.length; i++){
        if(favs[i].prod.name===prod.name){
  
          alert("Ya se encuentra en favoritos");
          break;
  
        }else{
  
          const docRef = addDoc(collection(db, 'favoritos'), {
            prod,
          });
          break;
        }
      }

    }
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
