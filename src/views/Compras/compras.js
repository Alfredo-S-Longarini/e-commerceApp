import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig.js';
import Spinner from '../../components/LoadingSpinner/loadingSpinner.js';
import ComprasList from '../Cart/ComprasList/comprasList.js';

const Compras = () => {

  const [loading, setLoading]=useState(true);
  const [comprasData, setComprasData] = useState([]);

  useEffect(()=>{

    // Funcion que se encarga de obtener informacion de las compras realizadas, la cual se encuentra en la colección compras de la base de datos. 
    const getCompras = async () => {
      const q = query (collection(db, "compras"));
      const docs = [];
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      }); 
  
      setLoading(false);
  
      setComprasData(docs);
    }

    getCompras();

  },[]);

  console.log(comprasData);

  return (
    <div>
        {loading ? <Spinner/> : <ComprasList compras={comprasData}></ComprasList>}
    </div>
  );
};

export default Compras;
