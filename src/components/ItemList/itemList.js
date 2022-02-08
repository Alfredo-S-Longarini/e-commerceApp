import React from 'react';
import Item from '../Item/item.js';
import './itemList.css';

const ItemList = ({products}) =>{

    return(
        <div>
            <div className='viewCards'>
                {
                    products.map((prod) => (
                            <Item key={prod.id} producto={prod} stockProducto={prod.stock}></Item>
                    ))
    
                }
            </div>
        </div>
    );
}

export default ItemList;