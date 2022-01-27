import React, {useState} from 'react';
import Icon from './iconTitle.png';

import './itemListContainer.css';

const ItemListContainer=({title})=>{

    let stock = 6;

  const [counter, setCounter] = useState(0);
  const [stockMax, setStockMax] = useState(stock);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [buttonRemove, setButtonRemove] = useState(false);

  let aLlevar=counter;

  const agregarProducto = () =>{

    if(aLlevar>=0 && stockMax>0){
      setStockMax(stockMax-1);
      aLlevar++;
      setCounter(counter+1);
      buttonEnabled();
    }else if(counter===stock){
      buttonDisabled1();
    }

  }

  const quitarProducto = () =>{

    if(aLlevar>0){
      setStockMax(stockMax+1);
      aLlevar--;
      setCounter(counter-1);
      buttonEnabled1();
    }else{
      buttonDisabled();
    }
  }

  const buttonDisabled = () =>{
		setButtonRemove(true);
	}

	const buttonEnabled = () =>{
		setButtonRemove(false);
	}

	const buttonDisabled1 = () =>{
		setButtonAdd(true);
	}

	const buttonEnabled1 = () =>{
		setButtonAdd(false);
	}

    return(
        <div className='center'>

            <div className='titleContainer'>
                <h2 className='title'>{title}</h2>
                <img className='iconTitle' src={Icon} alt='icon'/>
            </div>

            <div className='CounterSection'>
                <p>Stock de Producto: {stockMax}</p>
                <p>Producto a llevar: {counter}</p>
                <div className='btn-section'>
                    <button disabled={buttonAdd} onClick={agregarProducto}>+</button>
                    <button disabled={buttonRemove} onClick={quitarProducto}>-</button>
                </div>
			</div>

        </div>
    );
}

export default ItemListContainer;