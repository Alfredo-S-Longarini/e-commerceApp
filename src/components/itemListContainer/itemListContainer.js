import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/itemList.js';
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig.js';

import './itemListContainer.css';
import NavCategory from '../NavCategory/navCategory.js';

const ItemListContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading]=useState(true);
  const [productsData, setProductData] = useState([]);

  let name = useParams();
  let prodName=name.name;

  useEffect(()=>{

    if(prodName===undefined){

      const getProducts = async () => {
        const q = query (collection(db, 'productosApp'));
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
        }); 

        setLoading(false);

        setProductData(docs);
      }

      getProducts();

    }else{

      const getProducts = async () => {
        const q = query (collection(db, 'productosApp'), where('categoria', '==', prodName));
        const docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
        });

        setLoading(false);

        setProductData(docs);
      }

      getProducts();

    }

  }, [prodName]);

  return (
    <div className='center container-fluid'>
      <div className='col-lg-2 categoryFilter'>
        <NavCategory/>
      </div>

      <div className='col-lg-10'>
        {loading ? <Spinner/> : <ItemList products={productsData}></ItemList>}
      </div>
    </div>
  );
}

export default ItemListContainer;