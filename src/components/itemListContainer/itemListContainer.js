import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList.js';
import productos from '../../productos/productos.js';

import './itemListContainer.css';

const ItemListContainer = () => {

  const [product, setProduct] = useState([]);

  useEffect(()=>{

    const promiseProduct = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(productos);
      }, 2000);
    })

    promiseProduct.then((res)=>{setProduct(res)}).catch((err)=> {console.log(err)});

    console.log(product);

  },[]);

  return (
    <div className='center'>

      <ItemList products={product}></ItemList>

    </div>
  );
}

export default ItemListContainer;