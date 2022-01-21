import React from 'react';
import Icon from './iconTitle.png';

import './itemListContainer.css';

const itemListContainer=({title, icon})=>{
    return(
        <div className='titleContainer'>
            <h2 className='title'>{title}</h2>
            <img className='iconTitle' src={Icon} alt='icon'/>
        </div>
    );
}

export default itemListContainer;