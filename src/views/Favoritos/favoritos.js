import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import Spinner from '../../components/LoadingSpinner/loadingSpinner';
import FavList from './FavList/favList';

const Favoritos = () => {

  const [favoriteInfo, setFavoriteInfo] = useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(()=>{

    // Funcion que se encarga de obtener informacion de los productos asignados a favoritos, los cuales se encuentran en la colección favoritos de la base de datos.
    const getFavoritos = async () => {
        const q = query (collection(db, 'favoritos'));
        let docs = [];
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
        });

        setLoading(false);

        setFavoriteInfo(docs);
    }

    getFavoritos();

  },[favoriteInfo]);

  return (
    <div>
      {loading ? <Spinner/> : <FavList products={favoriteInfo}></FavList>}
    </div>
  );
};

export default Favoritos;
