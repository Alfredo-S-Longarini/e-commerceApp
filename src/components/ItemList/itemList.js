import React from 'react';
import Item from '../Item/item.js';
import './itemList.css';

const ItemList = ({products}) =>{
    return(
        <>
            <div className='viewCards'>
                {
                    products.map((prod) => (
                        <Item key={prod.id} producto={prod} stockProducto={prod.stock}></Item>
                        
                    ))
                }

            </div>
        </>
    );
}

export default ItemList;