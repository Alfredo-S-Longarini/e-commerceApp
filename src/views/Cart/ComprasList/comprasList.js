import React from 'react'
import ItemsCompra from '../ItemsCompra/itemsCompra'
import './comprasList.css'

const ComprasList = ({compras}) => {

  return (
    <div className='container-fluid sectionCompras'>
        <div className='titleCompras'><h1>Compras Realizadas</h1></div>
        <div className='listCompras'>
            {
                compras.map((comp)=>(
                        <ItemsCompra key={comp.id} compraProd={comp}/>
                ))
            }
        </div>
    </div>
  )
}

export default ComprasList