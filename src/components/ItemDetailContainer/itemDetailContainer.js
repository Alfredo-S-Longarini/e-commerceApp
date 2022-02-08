import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/itemDetail'
import productos from '../../productos/productos.js';
import Spinner from '../LoadingSpinner/loadingSpinner.js';

import './itemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productInfo, setProductInfo] = useState([]);
    const [loading, setLoading]=useState(true);

    let id = useParams();
    let prodId=id.id;
    console.log(prodId);

    useEffect(()=>{

        const promiseProduct = new Promise((resolve, reject) => {
            setTimeout(()=>{
                let prod = productos.find(element => element.id == prodId);
                resolve(prod);
                setLoading(false);
            }, 2000);
        })

        promiseProduct.then((res)=>{setProductInfo(res)}).catch((err)=> {console.log(err)});

    },[]);

    console.log(productInfo);

    return (
        <div className='centerDetails'>

            {loading ? <Spinner/> : <ItemDetail products={productInfo}></ItemDetail>}

        </div>
    );
};

export default ItemDetailContainer;
