import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/itemList.js';
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import './itemListContainer.css';
import NavCategory from '../NavCategory/navCategory.js';

const ItemListContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading]=useState(true);

  let name = useParams();
  let prodName=name.name;

  useEffect(()=>{

    if(prodName===undefined){

      const promiseProduct = new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(productos);
          setLoading(false);
        }, 1000);
      })
  
      promiseProduct.then((res)=>{setProduct(res)}).catch((err)=> {console.log(err)});

    }else{

      const promiseProduct = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let prod = productos.filter(element => element.tipo === prodName);
            resolve(prod);
            setLoading(false);
        }, 1000);
      })

      promiseProduct.then((res)=>{setProduct(res)}).catch((err)=> {console.log(err)});

    }

    console.log(product);

  }, [prodName]);

  return (
    <div className='center container-fluid'>
      <div className='col-lg-2 categoryFilter'>
        <NavCategory/>
      </div>

      <div className='col-lg-10'>
        {loading ? <Spinner/> : <ItemList products={product}></ItemList>}
      </div>
    </div>
  );
}

export default ItemListContainer;