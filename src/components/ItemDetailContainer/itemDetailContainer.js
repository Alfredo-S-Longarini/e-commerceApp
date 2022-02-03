import React, { useEffect, useState } from 'react';
import ItemListDetails from '../ItemListDetails/itemListDetails';
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import './itemDetailContainer.css'

const ItemDetailContainer = () => {

    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{

        const promiseProduct = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos);
            setLoading(false);
        }, 2000);
        })

        promiseProduct.then((res)=>{setProductInfo(res)}).catch((err)=> {console.log(err)});

        console.log(productInfo);

    },[]);

    return (
        <div className='centerDetails'>

            {loading ? <Spinner/> : <ItemListDetails products={productInfo}></ItemListDetails>}

        </div>
    );
};

export default ItemDetailContainer;
