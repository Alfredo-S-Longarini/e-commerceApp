import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/itemList.js';
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import './itemListContainer.css';

const ItemListContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(()=>{

    const promiseProduct = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(productos);
        setLoading(false);
      }, 2000);
    })

    promiseProduct.then((res)=>{setProduct(res)}).catch((err)=> {console.log(err)});

    console.log(product);

  },[]);

  return (
    <div className='center'>

      {loading ? <Spinner/> : <ItemList products={product}></ItemList>}

    </div>
  );
}

export default ItemListContainer;