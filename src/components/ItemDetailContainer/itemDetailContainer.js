import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/itemDetail'
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig.js';

import './itemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading]=useState(true);

    let id = useParams();
    let prodId=id.id;
    // console.log(prodId);

    useEffect(()=>{

        const getProducts = async () => {
            const q = query (collection(db, 'productosApp'));
            let docs = {};
            const querySnapshot = await getDocs(q);
    
            querySnapshot.forEach((doc) => {
                if(doc.id==prodId){
                    docs={...doc.data(), id: doc.id};
                }
            });
    
            setLoading(false);

            setProductInfo(docs);
        }
    
        getProducts();

    },[]);


    return (
        <div className='centerDetails'>

                {loading ? <Spinner/> : <ItemDetail products={productInfo}></ItemDetail>}

        </div>
    );
};

export default ItemDetailContainer;
