import React from 'react';
import ItemDetail from '../ItemDetail/itemDetail';

const ItemListDetails = ({products}) =>{
    return(
        <>
                {
                    products.map((prod) => (
                        <ItemDetail key={prod.id} products={prod}></ItemDetail>
                    ))
                }
        </>
    );
}

export default ItemListDetails;