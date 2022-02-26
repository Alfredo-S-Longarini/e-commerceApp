import React from 'react'
import ItemsCompra from '../ItemsCompra/itemsCompra'
import './comprasList.css'

const ComprasList = ({compras}) => {
    console.log(compras);
  return (
    <div className='container-fluid sectionCompras'>
        <div className='titleCompras'><h1>Compras Realizadas</h1></div>
        <div className='listCompras'>
            {compras.map((comp)=>{
                return(
                    <ItemsCompra key={comp.id} compra={comp}/>
                )
            })}
        </div>
    </div>
  )
}

export default ComprasList